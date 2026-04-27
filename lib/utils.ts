import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { format } from 'date-fns';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string | Date): string {
  return format(new Date(date), 'dd MMM yyyy');
}

export function getFileTypeLabel(mimetype: string, filename: string): string {
  const ext = filename.split('.').pop()?.toLowerCase();
  if (ext === 'pdf') return 'PDF';
  if (ext === 'pptx' || ext === 'ppt') return 'PPTX';
  if (ext === 'docx' || ext === 'doc') return 'DOCX';
  if (ext === 'zip') return 'ZIP';
  return ext?.toUpperCase() || 'FILE';
}

export function getFileIcon(fileType: string): string {
  const type = fileType.toLowerCase();
  if (type === 'pdf') return '📄';
  if (type === 'pptx' || type === 'ppt') return '📊';
  if (type === 'docx' || type === 'doc') return '📝';
  if (type === 'zip') return '🗜️';
  return '📁';
}

export function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
