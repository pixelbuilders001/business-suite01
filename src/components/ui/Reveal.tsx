import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { useReveal } from '@/lib/hooks';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

export function Reveal({ children, className = '', delay = 0, y = 24 }: RevealProps) {
  const { ref, visible } = useReveal();

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={{ opacity: 0, y }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function RevealText({ children, className = '', delay = 0 }: RevealProps) {
  const { ref, visible } = useReveal();

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: '100%', opacity: 0 }}
        animate={visible ? { y: '0%', opacity: 1 } : {}}
        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}

interface CTAButtonProps {
  children: ReactNode;
  href: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  external?: boolean;
}

export function CTAButton({ children, href, variant = 'primary', className = '', external = false }: CTAButtonProps) {
  const base = variant === 'primary' ? 'btn-primary' : variant === 'secondary' ? 'btn-secondary' : 'btn-ghost';
  const ext = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <a href={href} className={`${base} ${className}`} {...ext}>
      {children}
      {variant !== 'ghost' && <ArrowRight className="h-4 w-4" />}
    </a>
  );
}
