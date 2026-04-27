'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, Eye, EyeOff, ArrowRight, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';

export default function AdminLoginPage() {
  const [secret, setSecret] = useState('');
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ secret }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success('Welcome back!');
        router.push('/admin/dashboard');
      } else {
        toast.error('Invalid secret. Access denied.');
      }
    } catch {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-charcoal flex items-center justify-center px-6">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-maroon/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-blush/5 blur-[80px]" />
        <div className="absolute inset-0 opacity-[0.02]"
          style={{ backgroundImage: 'radial-gradient(circle, #FAF7F2 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />
      </div>

      <div className="relative w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 mb-6">
            <Lock size={24} className="text-gold" />
          </div>
          <h1 className="font-display text-4xl text-cream mb-2">Admin Panel</h1>
          <p className="font-body text-lg text-cream/40">Enter your access secret to continue</p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="bg-white/5 backdrop-blur rounded-2xl p-8 border border-white/10">
          <div className="mb-6">
            <label className="font-ui text-xs uppercase tracking-[0.25em] text-gold mb-3 block">
              Access Secret
            </label>
            <div className="relative">
              <input
                required
                type={show ? 'text' : 'password'}
                value={secret}
                onChange={(e) => setSecret(e.target.value)}
                placeholder="Enter admin secret"
                className="w-full px-4 py-4 pr-12 bg-white/5 border border-white/10 rounded-xl font-ui text-sm text-cream placeholder:text-cream/20 focus:outline-none focus:border-gold/40 transition-all"
              />
              <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-cream/30 hover:text-cream/60 transition-colors"
              >
                {show ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading || !secret}
            className="w-full flex items-center justify-center gap-2 bg-gold text-charcoal font-ui text-sm font-medium tracking-wide py-4 rounded-xl hover:bg-gold-light transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <>Access Dashboard <ArrowRight size={16} /></>
            )}
          </button>
        </form>

        <p className="text-center mt-6 font-ui text-xs text-cream/20">
          This page is restricted to authorised personnel only.
        </p>
      </div>
    </div>
  );
}
