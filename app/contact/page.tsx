'use client';

import { useState } from 'react';
import { Mail, MapPin, Clock, Send, Check } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import toast from 'react-hot-toast';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulate sending (connect to your email API / backend as needed)
    await new Promise((r) => setTimeout(r, 1400));
    setSending(false);
    setSent(true);
    toast.success('Message sent! I will respond within 2–3 working days.');
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="pt-20 bg-cream min-h-screen">
      {/* Banner */}
      <div className="relative bg-charcoal py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ background: 'radial-gradient(circle at 70% 50%, #C9A96E 0%, transparent 60%)' }}
        />
        <div className="relative max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="font-ui text-xs uppercase tracking-[0.3em] text-gold mb-6">Get in Touch</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="font-display text-5xl md:text-6xl text-cream leading-tight mb-6">
              Let&rsquo;s <em className="text-blush">Connect</em>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="font-body text-xl text-cream/60 max-w-xl leading-relaxed">
              For academic inquiries, course-related questions, research collaboration, or any other
              matter, I welcome your message.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Content */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-8">
              <ScrollReveal>
                <div>
                  <h2 className="font-display text-3xl text-charcoal mb-8">Contact Details</h2>
                  <div className="space-y-6">
                    {[
                      {
                        icon: Mail,
                        label: 'Email',
                        value: 'afshara.ritu@vu.edu.bd',
                        href: 'mailto:afshara.ritu@vu.edu.bd',
                      },
                      {
                        icon: MapPin,
                        label: 'Office',
                        value: 'Room 214, Arts Building\nVarendra University, Rajshahi',
                      },
                      {
                        icon: Clock,
                        label: 'Office Hours',
                        value: 'Sunday–Thursday\n10:00 AM – 2:00 PM',
                      },
                    ].map((item) => (
                      <div key={item.label} className="flex gap-4 items-start">
                        <div className="w-11 h-11 rounded-xl bg-blush/30 flex items-center justify-center shrink-0">
                          <item.icon size={18} className="text-maroon" />
                        </div>
                        <div>
                          <div className="font-ui text-xs uppercase tracking-[0.2em] text-gold mb-1">
                            {item.label}
                          </div>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="font-body text-lg text-charcoal hover:text-maroon transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="font-body text-lg text-charcoal whitespace-pre-line">
                              {item.value}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="bg-parchment rounded-2xl p-7 border border-gold/10">
                  <h3 className="font-display text-xl text-charcoal mb-3">A Note for Students</h3>
                  <p className="font-body text-lg text-warm-gray leading-relaxed">
                    For course-related questions, please include your student ID and course code in
                    your message. For study materials, visit the{' '}
                    <a href="/materials" className="text-maroon hover:text-gold transition-colors">
                      Materials page
                    </a>
                    .
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal direction="right">
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-card border border-gold/5 space-y-6">
                  <h2 className="font-display text-2xl text-charcoal">Send a Message</h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="font-ui text-xs uppercase tracking-[0.2em] text-warm-gray mb-2 block">
                        Full Name *
                      </label>
                      <input
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 bg-parchment rounded-xl font-body text-lg text-charcoal focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="font-ui text-xs uppercase tracking-[0.2em] text-warm-gray mb-2 block">
                        Email *
                      </label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 bg-parchment rounded-xl font-body text-lg text-charcoal focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-ui text-xs uppercase tracking-[0.2em] text-warm-gray mb-2 block">
                      Subject *
                    </label>
                    <input
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-parchment rounded-xl font-body text-lg text-charcoal focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all"
                      placeholder="Subject of your message"
                    />
                  </div>

                  <div>
                    <label className="font-ui text-xs uppercase tracking-[0.2em] text-warm-gray mb-2 block">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 bg-parchment rounded-xl font-body text-lg text-charcoal focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all resize-none"
                      placeholder="Write your message here..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending || sent}
                    className="w-full flex items-center justify-center gap-2 bg-maroon text-cream font-ui text-sm tracking-wide py-4 rounded-xl hover:bg-maroon-light transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {sent ? (
                      <><Check size={16} /> Message Sent</>
                    ) : sending ? (
                      <><span className="animate-spin">⟳</span> Sending...</>
                    ) : (
                      <><Send size={16} /> Send Message</>
                    )}
                  </button>
                </form>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
