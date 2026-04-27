import type { Metadata } from 'next';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';
import { Heart, BookOpen, Compass, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About',
  description: 'Personal introduction, academic philosophy, and teaching interests of Most. Afshara Tasnim Ritu.',
};

const interests = [
  { icon: BookOpen, title: 'Islamic History', desc: 'From early Islamic conquests to the modern nation-state, tracing the arc of Islamic civilisation.' },
  { icon: Compass, title: 'Cultural Studies', desc: 'Art, architecture, literature, and philosophy as expressions of Islamic thought across centuries.' },
  { icon: Heart, title: 'Women in Islam', desc: 'Recovering the voices and contributions of Muslim women throughout history.' },
  { icon: Users, title: 'Social History', desc: 'Understanding everyday life, trade networks, and social structures in the Islamic world.' },
];

export default function AboutPage() {
  return (
    <div className="pt-20 bg-cream">
      {/* Hero banner */}
      <div className="relative bg-charcoal overflow-hidden py-28 px-6">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-blush/10 blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-lavender/10 blur-[80px]" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <p className="font-ui text-xs uppercase tracking-[0.3em] text-gold mb-6">About Me</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="font-display text-5xl md:text-6xl text-cream leading-tight mb-6">
              Scholarship with
              <br />
              <em className="text-blush">Purpose &amp; Passion</em>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="font-body text-xl text-cream/60 max-w-2xl mx-auto leading-relaxed">
              Every student who walks through the door carries the potential to become the next great
              voice in Islamic scholarship. My mission is to nurture that potential.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Bio column */}
          <div className="lg:col-span-3 space-y-8">
            <ScrollReveal>
              <SectionHeader eyebrow="Introduction" title="Who I Am" />
            </ScrollReveal>

            <div className="prose-elegant space-y-6">
              <ScrollReveal delay={0.1}>
                <p>
                  I am Most. Afshara Tasnim Ritu, a Lecturer at the Department of Islamic History and
                  Culture at Varendra University, Rajshahi. My academic journey has been defined by an
                  enduring fascination with the breadth and depth of Islamic civilisation — from the
                  luminous courts of Baghdad in the Abbasid Golden Age to the vibrant syncretic culture
                  of Mughal India.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p>
                  I completed my undergraduate and postgraduate education with distinction, specialising
                  in medieval Islamic history and the cultural exchanges that shaped the Muslim world.
                  My research reflects an interdisciplinary approach, drawing on historical texts,
                  material culture, and contemporary theory to produce scholarship that is both
                  academically rigorous and humanly meaningful.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p>
                  In the classroom, I strive to create a space where students are not merely recipients
                  of historical information, but active interpreters of the past. I believe that history
                  is never neutral — it reflects the concerns of the present, and studying it carefully
                  teaches us as much about ourselves as about those who came before.
                </p>
              </ScrollReveal>

              {/* Philosophy callout */}
              <ScrollReveal delay={0.25}>
                <blockquote className="relative border-l-2 border-gold pl-8 py-4 my-10">
                  <div className="absolute top-0 left-0 -translate-x-2 -translate-y-2 text-gold/20 font-display text-6xl leading-none">&ldquo;</div>
                  <p className="font-display text-2xl italic text-maroon leading-relaxed">
                    History is not a chronicle of kings. It is the story of humanity — of its
                    aspirations, its creativity, and its capacity for both greatness and failure.
                  </p>
                  <footer className="mt-4 font-ui text-xs uppercase tracking-[0.25em] text-warm-gray">
                    — Academic Philosophy
                  </footer>
                </blockquote>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <p>
                  Outside the lecture hall, I am an avid reader of classical Arabic and Persian
                  literature, and I am committed to making these traditions accessible to
                  Bangla-speaking students through thoughtful translation and contextualisation.
                </p>
              </ScrollReveal>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick info card */}
            <ScrollReveal direction="right">
              <div className="bg-parchment rounded-2xl p-8 border border-gold/10">
                <h3 className="font-display text-2xl text-charcoal mb-6">At a Glance</h3>
                <dl className="space-y-4">
                  {[
                    { dt: 'Position', dd: 'Lecturer' },
                    { dt: 'Department', dd: 'Islamic History & Culture' },
                    { dt: 'Institution', dd: 'Varendra University' },
                    { dt: 'Location', dd: 'Rajshahi, Bangladesh' },
                    { dt: 'Specialisation', dd: 'Medieval & Early Modern Islamic History' },
                    { dt: 'Languages', dd: 'Bengali, English, Arabic (reading)' },
                  ].map((item) => (
                    <div key={item.dt} className="flex flex-col gap-0.5">
                      <dt className="font-ui text-xs uppercase tracking-[0.2em] text-gold">{item.dt}</dt>
                      <dd className="font-body text-lg text-charcoal">{item.dd}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </ScrollReveal>

            {/* Teaching interests */}
            <ScrollReveal direction="right" delay={0.1}>
              <div>
                <h3 className="font-display text-2xl text-charcoal mb-6">Teaching Interests</h3>
                <div className="grid grid-cols-1 gap-4">
                  {interests.map((interest) => (
                    <div
                      key={interest.title}
                      className="bg-white rounded-xl p-5 flex gap-4 shadow-card hover:shadow-card-hover transition-shadow"
                    >
                      <div className="shrink-0 w-10 h-10 rounded-lg bg-blush/30 flex items-center justify-center">
                        <interest.icon size={18} className="text-maroon" />
                      </div>
                      <div>
                        <div className="font-display text-base text-charcoal mb-1">{interest.title}</div>
                        <div className="font-body text-sm text-warm-gray leading-relaxed">{interest.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
