import type { Metadata } from 'next';
import TimelineSection from '@/components/sections/TimelineSection';

export const metadata: Metadata = {
  title: 'Academic Journey',
  description: 'Education, experience, and academic achievements of Most. Afshara Tasnim Ritu.',
};

export default function JourneyPage() {
  return (
    <div className="pt-20 bg-cream">
      {/* Banner */}
      <div className="relative bg-maroon overflow-hidden py-28 px-6">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, #C9A96E 0%, transparent 50%), radial-gradient(circle at 80% 50%, #B8C4D8 0%, transparent 50%)',
          }}
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="font-ui text-xs uppercase tracking-[0.3em] text-gold mb-6">My Path</p>
          <h1 className="font-display text-5xl md:text-6xl text-cream leading-tight mb-6">
            Academic <em>Journey</em>
          </h1>
          <p className="font-body text-xl text-cream/60 max-w-2xl mx-auto">
            A chronicle of education, research, and professional milestones that have shaped my
            scholarly identity and practice.
          </p>
        </div>
      </div>
      <TimelineSection />
    </div>
  );
}
