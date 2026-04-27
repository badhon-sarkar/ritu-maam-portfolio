'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Upload, Trash2, LogOut, Loader2, Edit3, Check, X, BookOpen, Download } from 'lucide-react';
import toast from 'react-hot-toast';
import { formatDate, formatFileSize } from '@/lib/utils';

interface Material {
  _id: string;
  title: string;
  description: string;
  courseName: string;
  semester: string;
  fileType: string;
  fileName: string;
  filePath: string;
  fileSize: number;
  downloadCount: number;
  createdAt: string;
}

interface FormData {
  title: string;
  description: string;
  courseName: string;
  semester: string;
}

const typeColors: Record<string, string> = {
  PDF: 'bg-red-50 text-red-600',
  PPTX: 'bg-orange-50 text-orange-600',
  DOCX: 'bg-blue-50 text-blue-600',
  ZIP: 'bg-gray-100 text-gray-600',
};

export default function AdminDashboard() {
  const router = useRouter();
  const fileRef = useRef<HTMLInputElement>(null);
  const [materials, setMaterials] = useState<Material[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<FormData>({ title: '', description: '', courseName: '', semester: '' });
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const [uploadForm, setUploadForm] = useState<FormData>({
    title: '', description: '', courseName: '', semester: '',
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [dragOver, setDragOver] = useState(false);

  const fetchMaterials = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/materials');
      const data = await res.json();
      if (data.success) setMaterials(data.data);
      else if (res.status === 401) router.push('/admin');
    } catch { /* empty */ }
    finally { setLoading(false); }
  };

  useEffect(() => { fetchMaterials(); }, []);

  const handleLogout = async () => {
    await fetch('/api/auth', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ action: 'logout' }) });
    router.push('/admin');
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) return toast.error('Please select a file');
    setUploading(true);
    const fd = new FormData();
    fd.append('file', selectedFile);
    Object.entries(uploadForm).forEach(([k, v]) => fd.append(k, v));
    try {
      const res = await fetch('/api/materials', { method: 'POST', body: fd });
      const data = await res.json();
      if (data.success) {
        toast.success('Material uploaded successfully!');
        setUploadForm({ title: '', description: '', courseName: '', semester: '' });
        setSelectedFile(null);
        if (fileRef.current) fileRef.current.value = '';
        fetchMaterials();
      } else {
        toast.error(data.error || 'Upload failed');
      }
    } catch { toast.error('Upload failed'); }
    finally { setUploading(false); }
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/materials/${id}`, { method: 'DELETE' });
      if (res.ok) { toast.success('Deleted successfully'); fetchMaterials(); }
      else toast.error('Delete failed');
    } catch { toast.error('Delete failed'); }
    setDeleteConfirm(null);
  };

  const handleEdit = async (id: string) => {
    try {
      const res = await fetch(`/api/materials/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editForm),
      });
      if (res.ok) { toast.success('Updated!'); setEditingId(null); fetchMaterials(); }
      else toast.error('Update failed');
    } catch { toast.error('Update failed'); }
  };

  const startEdit = (m: Material) => {
    setEditingId(m._id);
    setEditForm({ title: m.title, description: m.description, courseName: m.courseName, semester: m.semester });
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) setSelectedFile(file);
  };

  return (
    <div className="min-h-screen bg-parchment">
      {/* Admin Navbar */}
      <div className="bg-charcoal text-cream px-6 py-4 flex items-center justify-between">
        <div>
          <span className="font-display text-xl">Admin Dashboard</span>
          <span className="font-ui text-xs text-cream/40 ml-4">Most. Afshara Tasnim Ritu</span>
        </div>
        <button onClick={handleLogout} className="flex items-center gap-2 font-ui text-sm text-cream/60 hover:text-gold transition-colors">
          <LogOut size={16} /> Logout
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Upload Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-card p-7 sticky top-8">
              <h2 className="font-display text-2xl text-charcoal mb-6 flex items-center gap-2">
                <Upload size={22} className="text-maroon" /> Upload Material
              </h2>
              <form onSubmit={handleUpload} className="space-y-4">
                {/* File drop zone */}
                <div
                  onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={onDrop}
                  onClick={() => fileRef.current?.click()}
                  className={`relative border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all ${dragOver ? 'border-gold bg-gold/5' : 'border-gold/30 hover:border-gold/60 hover:bg-parchment'}`}
                >
                  <input ref={fileRef} type="file" accept=".pdf,.pptx,.ppt,.docx,.doc,.zip" className="hidden"
                    onChange={(e) => setSelectedFile(e.target.files?.[0] || null)} />
                  {selectedFile ? (
                    <div>
                      <div className="text-3xl mb-2">✅</div>
                      <p className="font-ui text-sm font-medium text-charcoal">{selectedFile.name}</p>
                      <p className="font-ui text-xs text-warm-gray mt-1">{formatFileSize(selectedFile.size)}</p>
                    </div>
                  ) : (
                    <div>
                      <div className="text-3xl mb-2">📎</div>
                      <p className="font-ui text-sm text-warm-gray">Drop file here or click to browse</p>
                      <p className="font-ui text-xs text-warm-gray/60 mt-1">PDF, PPTX, DOCX, ZIP · Max 50MB</p>
                    </div>
                  )}
                </div>

                {[
                  { key: 'title', label: 'Title', placeholder: 'e.g. Introduction to Islamic History — Week 1' },
                  { key: 'courseName', label: 'Course Name', placeholder: 'e.g. IHC 101 – Introduction to Islamic History' },
                  { key: 'semester', label: 'Semester', placeholder: 'e.g. Spring 2024' },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="font-ui text-xs uppercase tracking-[0.2em] text-warm-gray mb-1 block">{field.label} *</label>
                    <input required value={uploadForm[field.key as keyof FormData]}
                      onChange={(e) => setUploadForm({ ...uploadForm, [field.key]: e.target.value })}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 bg-parchment rounded-xl font-body text-base text-charcoal focus:outline-none focus:ring-2 focus:ring-gold/30" />
                  </div>
                ))}

                <div>
                  <label className="font-ui text-xs uppercase tracking-[0.2em] text-warm-gray mb-1 block">Description *</label>
                  <textarea required rows={3} value={uploadForm.description}
                    onChange={(e) => setUploadForm({ ...uploadForm, description: e.target.value })}
                    placeholder="Brief description of the material"
                    className="w-full px-4 py-3 bg-parchment rounded-xl font-body text-base text-charcoal focus:outline-none focus:ring-2 focus:ring-gold/30 resize-none" />
                </div>

                <button type="submit" disabled={uploading || !selectedFile}
                  className="w-full flex items-center justify-center gap-2 bg-maroon text-cream font-ui text-sm py-4 rounded-xl hover:bg-maroon-light transition-all disabled:opacity-50">
                  {uploading ? <><Loader2 size={16} className="animate-spin" /> Uploading...</> : <><Upload size={16} /> Upload Material</>}
                </button>
              </form>
            </div>
          </div>

          {/* Materials List */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-2xl text-charcoal">
                Uploaded Materials
                <span className="font-ui text-sm text-warm-gray ml-3">({materials.length})</span>
              </h2>
            </div>

            {loading ? (
              <div className="flex items-center justify-center py-20">
                <Loader2 size={32} className="text-maroon animate-spin" />
              </div>
            ) : materials.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-2xl border border-gold/5">
                <BookOpen size={40} className="text-warm-gray/30 mx-auto mb-4" />
                <p className="font-body text-lg text-warm-gray">No materials uploaded yet.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {materials.map((m) => (
                  <div key={m._id} className="bg-white rounded-2xl shadow-card p-6 border border-gold/5">
                    {editingId === m._id ? (
                      // Edit form
                      <div className="space-y-3">
                        {[
                          { key: 'title', label: 'Title' },
                          { key: 'courseName', label: 'Course' },
                          { key: 'semester', label: 'Semester' },
                        ].map((f) => (
                          <input key={f.key} value={editForm[f.key as keyof FormData]}
                            onChange={(e) => setEditForm({ ...editForm, [f.key]: e.target.value })}
                            placeholder={f.label}
                            className="w-full px-3 py-2 bg-parchment rounded-lg font-body text-base text-charcoal focus:outline-none focus:ring-2 focus:ring-gold/30" />
                        ))}
                        <textarea rows={2} value={editForm.description}
                          onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                          className="w-full px-3 py-2 bg-parchment rounded-lg font-body text-base text-charcoal focus:outline-none focus:ring-2 focus:ring-gold/30 resize-none" />
                        <div className="flex gap-2">
                          <button onClick={() => handleEdit(m._id)} className="flex items-center gap-1 bg-maroon text-cream font-ui text-xs px-4 py-2 rounded-lg hover:bg-maroon-light">
                            <Check size={14} /> Save
                          </button>
                          <button onClick={() => setEditingId(null)} className="flex items-center gap-1 bg-parchment text-warm-gray font-ui text-xs px-4 py-2 rounded-lg hover:bg-blush/20">
                            <X size={14} /> Cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <span className={`font-ui text-xs px-2.5 py-1 rounded-full ${typeColors[m.fileType] || 'bg-gray-100 text-gray-600'}`}>
                                {m.fileType}
                              </span>
                              <span className="font-ui text-xs text-warm-gray">{m.semester}</span>
                            </div>
                            <h3 className="font-display text-lg text-charcoal mb-1">{m.title}</h3>
                            <p className="font-ui text-xs text-maroon/70 mb-2">{m.courseName}</p>
                            <p className="font-body text-base text-warm-gray line-clamp-2">{m.description}</p>
                            <div className="flex items-center gap-4 mt-3 text-warm-gray">
                              <span className="font-ui text-xs">{formatDate(m.createdAt)}</span>
                              <span className="font-ui text-xs">{formatFileSize(m.fileSize)}</span>
                              <span className="font-ui text-xs flex items-center gap-1">
                                <Download size={11} /> {m.downloadCount}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            <button onClick={() => startEdit(m)}
                              className="w-9 h-9 rounded-lg bg-parchment hover:bg-blush/30 flex items-center justify-center transition-colors">
                              <Edit3 size={15} className="text-warm-gray" />
                            </button>
                            {deleteConfirm === m._id ? (
                              <div className="flex gap-1">
                                <button onClick={() => handleDelete(m._id)}
                                  className="w-9 h-9 rounded-lg bg-red-500 hover:bg-red-600 flex items-center justify-center transition-colors">
                                  <Check size={15} className="text-white" />
                                </button>
                                <button onClick={() => setDeleteConfirm(null)}
                                  className="w-9 h-9 rounded-lg bg-parchment flex items-center justify-center">
                                  <X size={15} className="text-warm-gray" />
                                </button>
                              </div>
                            ) : (
                              <button onClick={() => setDeleteConfirm(m._id)}
                                className="w-9 h-9 rounded-lg bg-parchment hover:bg-red-50 flex items-center justify-center transition-colors">
                                <Trash2 size={15} className="text-warm-gray hover:text-red-500" />
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
