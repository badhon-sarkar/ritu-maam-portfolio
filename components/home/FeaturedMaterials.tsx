'use client';

import Link from 'next/link';
import { ArrowRight, FileText, BookOpen } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const sampleMaterials = [
  { title: 'Introduction to Islamic History', course: 'IHC 101', type: 'PDF', semester: 'Spring 2024' },
  { title: 'The Abbasid Caliphate — Lecture Slides', course: 'IHC 201', type: 'PPTX', semester: 'Spring 2024' },
  { title: 'Mughal Art & Architecture Study Guide', course: 'IHC 305', type: 'DOCX', semester: 'Fall 2023' },
];

const typeColors: Record<string, string> = {
  PDF: 'bg-red-50 text-red-600',
  PPTX: 'bg-orange-50 text-orange-600',
  DOCX: 'bg-blue-50 text-blue-600',
  ZIP: 'bg-gray-100 text-gray-600',
};

export default function FeaturedMaterials() {
  return (
    <section className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <ScrollReveal>
            <p className="font-ui text-xs uppercase tracking-[0.3em] text-gold mb-4">
              Study Materials
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-5">
              Resources for <em>Your Learning</em>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="font-body text-xl text-warm-gray max-w-2xl mx-auto">
              Lecture notes, presentations, and reading materials — organised by course and readily
              available for download.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {sampleMaterials.map((mat, i) => (
            <ScrollReveal key={mat.title} delay={0.1 * i}>
              <div className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 group hover:-translate-y-1 border border-gold/5">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-parchment flex items-center justify-center">
                    <FileText size={22} className="text-maroon/60" />
                  </div>
                  <span className={`font-ui text-xs font-medium px-3 py-1 rounded-full ${typeColors[mat.type]}`}>
                    {mat.type}
                  </span>
                </div>
                <h3 className="font-display text-lg text-charcoal mb-2 leading-snug">
                  {mat.title}
                </h3>
                <div className="flex items-center gap-2 text-warm-gray mt-4">
                  <BookOpen size={13} />
                  <span className="font-ui text-xs">{mat.course} · {mat.semester}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="text-center">
            <Link
              href="/materials"
              className="group inline-flex items-center gap-2 bg-maroon text-cream font-ui text-sm tracking-wide px-8 py-4 rounded-full hover:bg-maroon-light transition-all duration-300 shadow-soft"
            >
              Browse All Materials
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
