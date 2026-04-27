import Link from 'next/link';
import { Mail, MapPin, BookOpen } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-cream/80 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
          {/* About */}
          <div>
            <div className="font-display text-2xl text-cream mb-2">Afshara Tasnim Ritu</div>
            <div className="font-ui text-xs uppercase tracking-[0.25em] text-gold mb-5">
              Lecturer · Islamic History & Culture
            </div>
            <p className="font-body text-lg text-cream/60 leading-relaxed">
              Dedicated to illuminating the rich tapestry of Islamic civilisation and culture through
              scholarship and engaged teaching.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-ui text-xs uppercase tracking-[0.25em] text-gold mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { href: '/about', label: 'About Me' },
                { href: '/journey', label: 'Academic Journey' },
                { href: '/teaching', label: 'Teaching & Research' },
                { href: '/materials', label: 'Study Materials' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-lg text-cream/60 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-ui text-xs uppercase tracking-[0.25em] text-gold mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold mt-1.5 shrink-0" />
                <span className="font-body text-lg text-cream/60">
                  Department of Islamic History & Culture,
                  <br />Varendra University, Rajshahi, Bangladesh
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-gold shrink-0" />
                <a
                  href="mailto:afshara.ritu@vu.edu.bd"
                  className="font-ui text-sm text-cream/60 hover:text-gold transition-colors"
                >
                  afshara.ritu@vu.edu.bd
                </a>
              </li>
              <li className="flex items-center gap-3">
                <BookOpen size={16} className="text-gold shrink-0" />
                <span className="font-ui text-sm text-cream/60">
                  Office Hours: Sun–Thu, 10 AM–2 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-ui text-xs text-cream/30 tracking-wide">
            © {year} Most. Afshara Tasnim Ritu. All rights reserved.
          </p>
          <Link
            href="/admin"
            className="font-ui text-xs text-cream/20 hover:text-gold/50 transition-colors tracking-wide"
          >
            Admin
          </Link>
        </div>
      </div>
    </footer>
  );
}
