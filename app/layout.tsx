import type { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/ui/CustomCursor';

export const metadata: Metadata = {
  title: {
    default: 'Most. Afshara Tasnim Ritu — Lecturer, Islamic History & Culture',
    template: '%s | Most. Afshara Tasnim Ritu',
  },
  description:
    'Academic portfolio of Most. Afshara Tasnim Ritu, Lecturer of Islamic History and Culture at Varendra University. Research, teaching, and study materials.',
  keywords: ['Islamic History', 'Varendra University', 'Lecturer', 'Academic', 'Bangladesh'],
  authors: [{ name: 'Most. Afshara Tasnim Ritu' }],
  openGraph: {
    title: 'Most. Afshara Tasnim Ritu — Lecturer',
    description: 'Academic portfolio and study materials',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-cream min-h-screen">
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#FAF7F2',
              color: '#2C2C2C',
              border: '1px solid rgba(201,169,110,0.3)',
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '14px',
              borderRadius: '8px',
              boxShadow: '0 4px 20px rgba(107,31,42,0.08)',
            },
            success: {
              iconTheme: { primary: '#6B1F2A', secondary: '#FAF7F2' },
            },
          }}
        />
      </body>
    </html>
  );
}
