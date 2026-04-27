'use client';

import Link from 'next/link';
import { ArrowRight, Feather, Heart, Star } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const pillars = [
  {
    icon: Feather,
    title: 'Scholarly Depth',
    desc: 'Grounded in rigorous primary source analysis and contemporary historical methodology.',
  },
  {
    icon: Heart,
    title: 'Student-Centred',
    desc: 'Creating an inclusive, empathetic classroom that nurtures curiosity and critical thinking.',
  },
  {
    icon: Star,
    title: 'Cultural Insight',
    desc: 'Bridging classical Islamic civilisation with modern perspectives for relevant scholarship.',
  },
];

export default function AboutPreview() {
  return (
    <section className="section-padding bg-parchment">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div>
            <ScrollReveal>
              <p className="font-ui text-xs uppercase tracking-[0.3em] text-gold mb-4">
                About
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-display text-4xl md:text-5xl text-charcoal leading-tight mb-6">
                A Passion for
                <br />
                <em>Islamic Scholarship</em>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="font-body text-xl text-warm-gray leading-relaxed mb-6">
                Most. Afshara Tasnim Ritu is a dedicated lecturer whose academic journey has been
                shaped by a deep reverence for Islamic history and a commitment to making this rich
                heritage accessible and relevant to contemporary students.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="font-body text-xl text-warm-gray leading-relaxed mb-10">
                With expertise spanning the classical period through the modern era, she brings
                nuanced, cross-cultural perspectives to every lecture — weaving primary sources,
                cultural context, and analytical rigour into a transformative learning experience.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 font-ui text-sm text-maroon tracking-wide hover:gap-3 transition-all"
              >
                Read Full Profile
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </ScrollReveal>
          </div>

          {/* Right: Pillars */}
          <div className="space-y-5">
            {pillars.map((pillar, i) => (
              <ScrollReveal key={pillar.title} delay={0.1 * i} direction="right">
                <div className="group bg-white rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-all duration-300 flex gap-5 items-start">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-blush/30 group-hover:bg-blush/50 transition-colors flex items-center justify-center">
                    <pillar.icon size={20} className="text-maroon" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-charcoal mb-2">{pillar.title}</h3>
                    <p className="font-body text-lg text-warm-gray leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
