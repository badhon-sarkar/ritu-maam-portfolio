'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  magnetic?: boolean;
  as?: 'button' | 'a';
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  magnetic = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!magnetic || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.3);
    y.set((e.clientY - centerY) * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    'inline-flex items-center justify-center gap-2 font-ui font-medium tracking-wide transition-all duration-300 rounded-full cursor-pointer relative overflow-hidden';

  const variants = {
    primary:
      'bg-maroon text-cream hover:bg-maroon-light shadow-soft hover:shadow-card-hover',
    secondary:
      'bg-gold text-charcoal hover:bg-gold-light shadow-soft hover:shadow-card-hover',
    ghost:
      'bg-transparent text-maroon hover:bg-blush/30',
    outline:
      'bg-transparent border border-maroon text-maroon hover:bg-maroon hover:text-cream',
  };

  const sizes = {
    sm: 'px-5 py-2 text-sm',
    md: 'px-7 py-3 text-sm',
    lg: 'px-9 py-4 text-base',
  };

  return (
    <motion.button
      ref={ref}
      style={magnetic ? { x: springX, y: springY } : undefined}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.97 }}
      className={cn(base, variants[variant], sizes[size], className)}
      {...(props as React.ComponentProps<typeof motion.button>)}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {/* Shimmer on hover */}
      <motion.span
        className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"
        whileHover={{ opacity: 0.08 }}
      />
    </motion.button>
  );
}
