'use client';

import { useState, useEffect, useCallback } from 'react';
import { Search, Filter, Loader2, BookOpen } from 'lucide-react';
import MaterialCard from './MaterialCard';

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

const FILE_TYPES = ['All', 'PDF', 'PPTX', 'DOCX', 'ZIP'];

export default function MaterialsGrid() {
  const [materials, setMaterials] = useState<Material[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedCourse, setSelectedCourse] = useState('All');
  const [courses, setCourses] = useState<string[]>([]);

  const fetchMaterials = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (search) params.set('search', search);
      if (selectedType !== 'All') params.set('fileType', selectedType);
      if (selectedCourse !== 'All') params.set('course', selectedCourse);

      const res = await fetch(`/api/materials?${params}`);
      const data = await res.json();
      if (data.success) {
        setMaterials(data.data);
        // Extract unique courses
        const unique = [...new Set(data.data.map((m: Material) => m.courseName))] as string[];
        setCourses(unique);
      }
    } catch {
      console.error('Failed to fetch materials');
    } finally {
      setLoading(false);
    }
  }, [search, selectedType, selectedCourse]);

  useEffect(() => {
    const t = setTimeout(fetchMaterials, search ? 400 : 0);
    return () => clearTimeout(t);
  }, [fetchMaterials, search]);

  return (
    <div>
      {/* Search & Filter Bar */}
      <div className="bg-white rounded-2xl shadow-card p-6 mb-10 border border-gold/5">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="relative flex-1">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-warm-gray" />
            <input
              type="text"
              placeholder="Search materials..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-parchment rounded-xl font-ui text-sm text-charcoal placeholder:text-warm-gray/60 focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all"
            />
          </div>

          {/* File type filter */}
          <div className="flex items-center gap-2 flex-wrap">
            <Filter size={16} className="text-warm-gray shrink-0" />
            {FILE_TYPES.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`font-ui text-xs px-4 py-2 rounded-full transition-all duration-200 ${
                  selectedType === type
                    ? 'bg-maroon text-cream'
                    : 'bg-parchment text-warm-gray hover:bg-blush/30'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Course filter */}
        {courses.length > 0 && (
          <div className="mt-4 flex items-center gap-2 flex-wrap">
            <span className="font-ui text-xs text-warm-gray uppercase tracking-wider">Course:</span>
            {['All', ...courses].map((course) => (
              <button
                key={course}
                onClick={() => setSelectedCourse(course)}
                className={`font-ui text-xs px-4 py-2 rounded-full transition-all duration-200 ${
                  selectedCourse === course
                    ? 'bg-gold text-charcoal'
                    : 'bg-parchment text-warm-gray hover:bg-blush/30'
                }`}
              >
                {course}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Loading */}
      {loading && (
        <div className="flex items-center justify-center py-20">
          <Loader2 size={32} className="text-maroon animate-spin" />
        </div>
      )}

      {/* Empty state */}
      {!loading && materials.length === 0 && (
        <div className="text-center py-20">
          <div className="w-20 h-20 bg-parchment rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen size={32} className="text-warm-gray/50" />
          </div>
          <h3 className="font-display text-2xl text-charcoal mb-2">No Materials Found</h3>
          <p className="font-body text-lg text-warm-gray">
            {search || selectedType !== 'All' || selectedCourse !== 'All'
              ? 'Try adjusting your search or filters.'
              : 'Study materials will appear here once uploaded.'}
          </p>
        </div>
      )}

      {/* Grid */}
      {!loading && materials.length > 0 && (
        <>
          <p className="font-ui text-sm text-warm-gray mb-6">
            Showing <span className="text-maroon font-medium">{materials.length}</span> material{materials.length !== 1 ? 's' : ''}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {materials.map((material) => (
              <MaterialCard key={material._id} material={material} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
