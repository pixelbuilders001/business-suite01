import { ShoppingCart, Boxes, BarChart3, Smartphone, Cloud, ShieldCheck, Printer, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { Reveal } from '@/components/ui/Reveal';
import { useReveal } from '@/lib/hooks';
import type { LucideIcon } from 'lucide-react';

interface Capability {
  icon: LucideIcon;
  label: string;
  description: string;
}

const capabilities: Capability[] = [
  { icon: ShoppingCart, label: 'Online storefront', description: 'A clean, mobile-friendly storefront for your products.' },
  { icon: Boxes, label: 'Inventory management', description: 'Track stock, categories, and product details in one place.' },
  { icon: BarChart3, label: 'Sales overview', description: 'Monitor sales activity and transaction history.' },
  { icon: Search, label: 'Barcode scanning', description: 'Fast product lookup with barcode support at the counter.' },
  { icon: Printer, label: 'Invoice generation', description: 'Create and print professional invoices with tax details.' },
  { icon: Smartphone, label: 'Mobile-friendly', description: 'Designed to work on phones, tablets, and desktops.' },
  { icon: Cloud, label: 'Accessible anywhere', description: 'Web-based applications you can access from any device.' },
  { icon: ShieldCheck, label: 'Practical security', description: 'Your data stays in systems you control.' },
];

export function Features() {
  const { ref, visible } = useReveal(0.08);

  return (
    <section id="features" className="py-24 md:py-32 bg-surface-warm border-y border-border">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow">Capabilities</p>
          <h2 className="mt-4 font-display text-display-md font-semibold text-ink text-balance">
            Practical features, not feature lists.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft text-pretty">
            Every capability listed here is implemented and in use. No roadmap promises disguised as features.
          </p>
        </Reveal>

        <div ref={ref} className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.label}
                initial={{ opacity: 0, y: 20 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="group"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-white text-forest-500 transition-colors group-hover:bg-forest-50">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="mt-4 text-sm font-semibold text-ink">{cap.label}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-mute">{cap.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
