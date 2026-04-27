import type { Metadata } from 'next';
import ScrollReveal from '@/components/ui/ScrollReveal';
import MaterialsGrid from '@/components/materials/MaterialsGrid';

export const metadata: Metadata = {
  title: 'Study Materials',
  description: 'Download lecture notes, presentations, and study guides for Islamic History & Culture courses at Varendra University.',
};

export default function MaterialsPage() {
  return (
    <div className="pt-20 bg-cream min-h-screen">
      {/* Banner */}
      <div className="relative bg-gradient-to-br from-parchment to-cream border-b border-gold/15 py-24 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-full bg-gradient-to-l from-blush/15 to-transparent" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full border border-gold/10" />
        <div className="absolute top-10 right-40 w-32 h-32 rounded-full border border-blush/20" />

        <div className="relative max-w-5xl mx-auto">
          <ScrollReveal>
            <p className="font-ui text-xs uppercase tracking-[0.3em] text-gold mb-6">Resources</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="font-display text-5xl md:text-6xl text-charcoal leading-tight mb-6">
              Study <em className="text-maroon">Materials</em>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="font-body text-xl text-warm-gray max-w-2xl leading-relaxed mb-8">
              Lecture notes, presentations, reading guides, and supplementary resources for all courses.
              Browse, filter by course or file type, and download freely.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="flex flex-wrap gap-6 text-sm font-ui text-warm-gray">
              <div className="flex items-center gap-2">
                <span className="text-lg">📄</span> PDF Lectures
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">📊</span> Presentations
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">📝</span> Study Guides
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">🗜️</span> Resource Packs
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Materials Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <MaterialsGrid />
        </div>
      </section>
    </div>
  );
}
