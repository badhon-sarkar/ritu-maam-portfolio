'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Download, GraduationCap, BookOpen, Award } from 'lucide-react';

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-cream pt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large soft gradient orbs */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-blush/20 blur-[80px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-lavender/20 blur-[80px]" />
        <div className="absolute top-[30%] left-[40%] w-[300px] h-[300px] rounded-full bg-gold/8 blur-[60px]" />

        {/* Geometric decorative shapes */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute top-20 right-20 w-32 h-32 border border-gold/15 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
          className="absolute top-28 right-28 w-20 h-20 border border-blush/20 rounded-full"
        />

        {/* Floating dot grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, #6B1F2A 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Diagonal decorative line */}
        <div className="absolute top-0 right-[20%] w-px h-full bg-gradient-to-b from-transparent via-gold/15 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-5rem)]">
          {/* Left: Text Content */}
          <div className="py-20 lg:py-0">
            {/* Eyebrow */}
            <motion.div {...fadeUp(0.1)} className="flex items-center gap-3 mb-8">
              <div className="h-px w-10 bg-gold" />
              <span className="font-ui text-xs uppercase tracking-[0.3em] text-gold">
                Academic Portfolio
              </span>
            </motion.div>

            {/* Main Name */}
            <motion.div {...fadeUp(0.2)}>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-charcoal mb-4">
                Most. Afshara
                <br />
                <span className="italic text-maroon">Tasnim Ritu</span>
              </h1>
            </motion.div>

            {/* Designation */}
            <motion.div {...fadeUp(0.35)} className="mb-8">
              <div className="flex items-center gap-3">
                <GraduationCap size={18} className="text-gold" />
                <p className="font-ui text-sm tracking-wide text-warm-gray">
                  Lecturer of Islamic History &amp; Culture
                </p>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <BookOpen size={18} className="text-gold" />
                <p className="font-ui text-sm tracking-wide text-warm-gray">
                  Varendra University, Rajshahi, Bangladesh
                </p>
              </div>
            </motion.div>

            {/* Intro */}
            <motion.p
              {...fadeUp(0.45)}
              className="font-body text-xl text-warm-gray leading-relaxed max-w-lg mb-12"
            >
              Dedicated to the scholarly exploration of Islamic civilisation, culture, and history.
              Shaping informed, empathetic scholars through engaged and rigorous academic practice.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.55)} className="flex flex-wrap gap-4">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2.5 bg-maroon text-cream font-ui text-sm tracking-wide px-8 py-4 rounded-full hover:bg-maroon-light transition-all duration-300 shadow-soft hover:shadow-card-hover"
              >
                View Profile
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/materials"
                className="group inline-flex items-center gap-2.5 bg-transparent border border-maroon/30 text-maroon font-ui text-sm tracking-wide px-8 py-4 rounded-full hover:border-maroon hover:bg-blush/20 transition-all duration-300"
              >
                <Download size={16} />
                Study Materials
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div {...fadeUp(0.65)} className="mt-16 flex items-center gap-8 flex-wrap">
              {[
                { value: '5+', label: 'Years Teaching' },
                { value: '12+', label: 'Courses Taught' },
                { value: '3+', label: 'Research Papers' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-3xl text-maroon">{stat.value}</div>
                  <div className="font-ui text-xs uppercase tracking-[0.2em] text-warm-gray mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Decorative portrait/graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="hidden lg:flex items-center justify-center relative"
          >
            {/* Outer ring */}
            <div className="relative w-[420px] h-[420px]">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border border-dashed border-gold/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-8 rounded-full border border-blush/30"
              />

              {/* Portrait placeholder */}
              <div className="absolute inset-12 rounded-full bg-gradient-to-br from-blush/40 via-parchment to-lavender/30 flex items-center justify-center overflow-hidden border-2 border-gold/20 shadow-glow">
                <div className="text-center p-8">
                  <div className="font-display text-6xl text-maroon/20 mb-2">ع</div>
                  <div className="font-display text-2xl italic text-maroon/60">AT</div>
                  <div className="font-ui text-xs uppercase tracking-[0.3em] text-warm-gray/50 mt-2">
                    Afshara Tasnim
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-white shadow-card rounded-2xl px-4 py-3 flex items-center gap-2"
              >
                <GraduationCap size={16} className="text-maroon" />
                <span className="font-ui text-xs text-charcoal">M.A. Islamic History</span>
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-white shadow-card rounded-2xl px-4 py-3 flex items-center gap-2"
              >
                <Award size={16} className="text-gold" />
                <span className="font-ui text-xs text-charcoal">Varendra University</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 border border-warm-gray/30 rounded-full flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 bg-warm-gray/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
