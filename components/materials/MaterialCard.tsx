'use client';

import { motion } from 'framer-motion';
import { Download, BookOpen, Calendar, FileText } from 'lucide-react';
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

interface MaterialCardProps {
  material: Material;
}

const typeStyles: Record<string, { bg: string; text: string; border: string }> = {
  PDF:  { bg: 'bg-red-50',    text: 'text-red-600',    border: 'border-red-100' },
  PPTX: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-100' },
  DOCX: { bg: 'bg-blue-50',   text: 'text-blue-600',   border: 'border-blue-100' },
  ZIP:  { bg: 'bg-gray-100',  text: 'text-gray-600',   border: 'border-gray-200' },
};

const typeIcons: Record<string, string> = {
  PDF: '📄', PPTX: '📊', DOCX: '📝', ZIP: '🗜️',
};

export default function MaterialCard({ material }: MaterialCardProps) {
  const style = typeStyles[material.fileType] || typeStyles.ZIP;
  const icon = typeIcons[material.fileType] || '📁';

  const handleDownload = async () => {
    // Track download
    await fetch(`/api/materials/${material._id}`).catch(() => {});
    // Open file
    window.open(material.filePath, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl shadow-card hover:shadow-card-hover border border-gold/5 overflow-hidden group transition-all duration-300"
    >
      {/* Top accent */}
      <div className="h-1 bg-gradient-to-r from-maroon via-gold to-blush opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="p-7">
        {/* Header row */}
        <div className="flex items-start justify-between gap-4 mb-5">
          <div className="w-14 h-14 rounded-xl bg-parchment flex items-center justify-center text-2xl shrink-0">
            {icon}
          </div>
          <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium font-ui ${style.bg} ${style.text} border ${style.border}`}>
            <FileText size={11} />
            {material.fileType}
          </div>
        </div>

        {/* Title & description */}
        <h3 className="font-display text-xl text-charcoal leading-snug mb-2">
          {material.title}
        </h3>
        <p className="font-body text-base text-warm-gray leading-relaxed mb-5 line-clamp-3">
          {material.description}
        </p>

        {/* Meta */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-2 text-warm-gray">
            <BookOpen size={13} className="shrink-0 text-gold" />
            <span className="font-ui text-xs">{material.courseName} · {material.semester}</span>
          </div>
          <div className="flex items-center gap-2 text-warm-gray">
            <Calendar size={13} className="shrink-0 text-gold" />
            <span className="font-ui text-xs">{formatDate(material.createdAt)}</span>
          </div>
          <div className="flex items-center gap-2 text-warm-gray">
            <Download size={13} className="shrink-0 text-gold" />
            <span className="font-ui text-xs">{material.downloadCount} downloads · {formatFileSize(material.fileSize)}</span>
          </div>
        </div>

        {/* Download button */}
        <button
          onClick={handleDownload}
          className="w-full flex items-center justify-center gap-2 bg-maroon text-cream font-ui text-sm tracking-wide py-3 rounded-xl hover:bg-maroon-light transition-all duration-300 shadow-soft hover:shadow-card-hover group/btn"
        >
          <Download size={15} className="group-hover/btn:-translate-y-0.5 transition-transform" />
          Download {material.fileType}
        </button>
      </div>
    </motion.div>
  );
}
