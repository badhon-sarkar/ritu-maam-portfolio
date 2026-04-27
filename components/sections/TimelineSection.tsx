'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award, BookMarked, Star } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const timelineItems = [
  {
    year: '2023–Present',
    category: 'Position',
    icon: Briefcase,
    color: 'bg-maroon',
    title: 'Lecturer',
    institution: 'Varendra University, Rajshahi',
    desc: 'Teaching undergraduate and postgraduate courses in Islamic History and Culture. Supervising thesis research, conducting seminars, and contributing to departmental curriculum development.',
  },
  {
    year: '2022',
    category: 'Award',
    icon: Star,
    color: 'bg-gold',
    title: 'Best Paper Award',
    institution: 'National History Conference, Dhaka',
    desc: 'Recognised for an outstanding paper titled "Sufi Networks and Trade Routes in Pre-Mughal Bengal" presented at the annual conference of the Bangladesh Historical Society.',
  },
  {
    year: '2021–2022',
    category: 'Education',
    icon: GraduationCap,
    color: 'bg-lavender-dark',
    title: 'Master of Arts in Islamic History',
    institution: 'University of Rajshahi',
    desc: 'Graduated with First Class distinction. Thesis: "The Role of Female Mystics in Shaping Sufi Thought in Bengal, 15th–17th Century." Supervised by Professor Dr. Md. Khairul Islam.',
  },
  {
    year: '2020',
    category: 'Research',
    icon: BookMarked,
    color: 'bg-sage',
    title: 'Research Fellowship',
    institution: 'Bangladesh National Museum',
    desc: 'Conducted archival research on Islamic manuscripts and inscriptions from medieval Bengal. Contributed to the museum\'s digital preservation initiative for rare Qur\'anic manuscripts.',
  },
  {
    year: '2018–2021',
    category: 'Education',
    icon: GraduationCap,
    color: 'bg-lavender-dark',
    title: 'Bachelor of Social Science (Hons.) in Islamic History',
    institution: 'University of Rajshahi',
    desc: 'Graduated with First Class Honours. Dean\'s Award recipient for consecutive academic years. Active member of the university\'s history and cultural studies society.',
  },
  {
    year: '2018',
    category: 'Achievement',
    icon: Award,
    color: 'bg-blush-dark',
    title: 'Higher Secondary Certificate (HSC)',
    institution: 'Rajshahi Government Girls\' College',
    desc: 'Completed HSC with exceptional marks in Humanities. Awarded the college merit scholarship for academic excellence.',
  },
];

export default function TimelineSection() {
  return (
    <section className="section-padding bg-cream">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent" />

          <div className="space-y-12">
            {timelineItems.map((item, i) => {
              const isRight = i % 2 === 0;
              return (
                <ScrollReveal key={item.title} delay={0.1 * i} direction={isRight ? 'right' : 'left'}>
                  <div className={`relative flex items-start gap-8 ${isRight ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}>
                    {/* Desktop: spacer for opposite side */}
                    <div className="hidden md:block flex-1" />

                    {/* Center dot */}
                    <div className="shrink-0 relative z-10">
                      <div className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center shadow-soft`}>
                        <item.icon size={20} className="text-white" />
                      </div>
                    </div>

                    {/* Card */}
                    <div className="flex-1">
                      <div className="bg-white rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-all duration-300 border border-gold/5">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="font-ui text-xs uppercase tracking-[0.2em] text-gold">
                            {item.category}
                          </span>
                          <span className="text-warm-gray/30">·</span>
                          <span className="font-ui text-xs text-warm-gray">{item.year}</span>
                        </div>
                        <h3 className="font-display text-xl text-charcoal mb-1">{item.title}</h3>
                        <p className="font-ui text-sm text-maroon/70 mb-3">{item.institution}</p>
                        <p className="font-body text-lg text-warm-gray leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
