'use client';

import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = false,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-14 ${centered ? 'text-center' : ''}`}>
      {eyebrow && (
        <ScrollReveal delay={0}>
          <p
            className={`font-ui text-xs uppercase tracking-[0.3em] mb-4 ${
              light ? 'text-blush/70' : 'text-gold'
            }`}
          >
            {eyebrow}
          </p>
        </ScrollReveal>
      )}

      <ScrollReveal delay={0.1}>
        <h2
          className={`font-display text-4xl md:text-5xl leading-tight mb-5 ${
            light ? 'text-cream' : 'text-charcoal'
          }`}
        >
          {title}
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div
          className={`flex items-center gap-4 ${centered ? 'justify-center' : ''} mb-5`}
        >
          <div
            className={`h-px w-12 ${light ? 'bg-gold/50' : 'bg-gold'}`}
          />
          <motion.div
            className={`w-1.5 h-1.5 rounded-full ${light ? 'bg-gold/50' : 'bg-gold'}`}
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <div
            className={`h-px w-12 ${light ? 'bg-gold/50' : 'bg-gold'}`}
          />
        </div>
      </ScrollReveal>

      {subtitle && (
        <ScrollReveal delay={0.3}>
          <p
            className={`font-body text-xl max-w-2xl ${
              centered ? 'mx-auto' : ''
            } leading-relaxed ${light ? 'text-cream/70' : 'text-warm-gray'}`}
          >
            {subtitle}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}
