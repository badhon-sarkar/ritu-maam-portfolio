import type { Metadata } from 'next';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';
import { BookOpen, Microscope, FileText, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Teaching & Research',
  description: 'Courses, specialisations, and research interests of Most. Afshara Tasnim Ritu.',
};

const courses = [
  { code: 'IHC 101', title: 'Introduction to Islamic History', level: 'Undergraduate', semester: 'Offered Each Semester', desc: 'A foundational survey of Islamic history from the birth of the Prophet ﷺ through the classical period, covering the Rightly-Guided Caliphs, Umayyads, and Abbasids.' },
  { code: 'IHC 201', title: 'Islamic Civilisation & Culture', level: 'Undergraduate', semester: 'Offered Each Semester', desc: 'Exploration of the material, artistic, intellectual, and social dimensions of Islamic civilisation from the 7th through 15th centuries.' },
  { code: 'IHC 302', title: 'The Mughal Empire', level: 'Undergraduate', semester: 'Spring', desc: 'An in-depth study of the Mughal empire\'s political history, cultural achievements, religious policy, and eventual decline, with attention to South Asian contexts.' },
  { code: 'IHC 305', title: 'Islamic Art & Architecture', level: 'Undergraduate', semester: 'Fall', desc: 'Visual and spatial analysis of Islamic artistic traditions, from the Great Mosque of Córdoba to the Taj Mahal, examining form, symbolism, and cultural transmission.' },
  { code: 'IHC 401', title: 'Islam in South Asia', level: 'Undergraduate', semester: 'Spring', desc: 'Historical and cultural examination of Islamic traditions in the Indian subcontinent, with particular focus on Bengal, Sufism, and syncretic cultural exchange.' },
  { code: 'IHC 501', title: 'Research Methods in Islamic Studies', level: 'Postgraduate', semester: 'Each Semester', desc: 'Graduate seminar developing skills in archival research, source criticism, historiographical analysis, and academic writing in the field of Islamic studies.' },
];

const researchAreas = [
  { icon: Microscope, title: 'Sufi Networks in Bengal', desc: 'Investigating the role of Sufi orders (tariqas) in cultural transmission, trade networks, and popular religion across medieval Bengal.' },
  { icon: Users, title: 'Women in Islamic History', desc: 'Recovering female voices and contributions in Islamic intellectual and social history, challenging androcentric historiographical traditions.' },
  { icon: BookOpen, title: 'Islamic Manuscripts of Bangladesh', desc: 'Cataloguing, conserving, and interpreting Arabic and Persian manuscripts held in Bangladeshi institutions and private collections.' },
  { icon: FileText, title: 'Historiography of Islamic Studies', desc: 'Critical examination of how Islamic history has been written, from classical Muslim historians to Orientalist scholarship and postcolonial interventions.' },
];

const publications = [
  { year: '2023', title: 'Sufi Networks and Trade Routes in Pre-Mughal Bengal', journal: 'Bangladesh Journal of Historical Studies', vol: 'Vol. 18, No. 2', type: 'Journal Article' },
  { year: '2022', title: 'Female Voices in the Sufi Tradition: A Study of Bengali Sources', journal: 'Islamic Studies Quarterly', vol: 'Vol. 61, No. 4', type: 'Journal Article' },
  { year: '2022', title: 'Reassessing the Syncretism Thesis: Islam and Local Cultures in Medieval Bengal', journal: 'Proceedings of the National History Conference', vol: 'Dhaka, 2022', type: 'Conference Paper' },
];

export default function TeachingPage() {
  return (
    <div className="pt-20 bg-cream">
      {/* Banner */}
      <div className="relative bg-parchment border-b border-gold/10 py-28 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-full bg-gradient-to-l from-blush/20 to-transparent" />
        <div className="relative max-w-4xl mx-auto">
          <p className="font-ui text-xs uppercase tracking-[0.3em] text-gold mb-6">Academics</p>
          <h1 className="font-display text-5xl md:text-6xl text-charcoal leading-tight mb-6">
            Teaching &amp;
            <br />
            <em className="text-maroon">Research</em>
          </h1>
          <p className="font-body text-xl text-warm-gray max-w-2xl leading-relaxed">
            Courses that challenge, research that illuminates, and scholarship that bridges the past
            with the urgent questions of the present.
          </p>
        </div>
      </div>

      {/* Courses */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHeader eyebrow="Curriculum" title="Courses Taught" subtitle="A selection of undergraduate and postgraduate courses currently offered at Varendra University." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, i) => (
              <ScrollReveal key={course.code} delay={0.05 * i}>
                <div className="bg-white rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-all duration-300 border border-gold/5 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <span className="font-ui text-xs font-medium text-maroon bg-blush/30 px-3 py-1 rounded-full">
                      {course.code}
                    </span>
                    <span className="font-ui text-xs text-warm-gray">{course.level}</span>
                  </div>
                  <h3 className="font-display text-xl text-charcoal mb-3">{course.title}</h3>
                  <p className="font-body text-lg text-warm-gray leading-relaxed flex-1">{course.desc}</p>
                  <div className="mt-5 pt-4 border-t border-parchment">
                    <span className="font-ui text-xs text-warm-gray">{course.semester}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Research */}
      <section className="section-padding bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHeader eyebrow="Scholarship" title="Research Interests" subtitle="Ongoing inquiries and areas of active scholarly investigation." light centered />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchAreas.map((area, i) => (
              <ScrollReveal key={area.title} delay={0.1 * i}>
                <div className="bg-white/5 rounded-2xl p-7 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center mb-5">
                    <area.icon size={22} className="text-gold" />
                  </div>
                  <h3 className="font-display text-2xl text-cream mb-3">{area.title}</h3>
                  <p className="font-body text-lg text-cream/60 leading-relaxed">{area.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="section-padding bg-parchment">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <SectionHeader eyebrow="Scholarship" title="Publications" subtitle="Peer-reviewed articles and conference papers." />
          <div className="space-y-5">
            {publications.map((pub, i) => (
              <ScrollReveal key={pub.title} delay={0.1 * i}>
                <div className="bg-white rounded-2xl p-7 shadow-card flex gap-6 items-start">
                  <div className="shrink-0 text-center">
                    <div className="font-display text-2xl text-maroon">{pub.year}</div>
                    <div className="font-ui text-xs uppercase tracking-[0.15em] text-warm-gray mt-1">{pub.type.split(' ')[0]}</div>
                  </div>
                  <div className="w-px bg-gold/20 self-stretch" />
                  <div>
                    <h3 className="font-display text-xl text-charcoal mb-2">{pub.title}</h3>
                    <p className="font-ui text-sm text-maroon">{pub.journal}</p>
                    <p className="font-ui text-xs text-warm-gray mt-1">{pub.vol}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
