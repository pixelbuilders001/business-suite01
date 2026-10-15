import { Package, ShoppingCart, LayoutDashboard, Receipt } from 'lucide-react';
import { motion } from 'framer-motion';
import { Reveal } from '@/components/ui/Reveal';
import { useReveal } from '@/lib/hooks';
import type { LucideIcon } from 'lucide-react';

interface FlowNode {
  icon: LucideIcon;
  label: string;
  description: string;
}

const flowNodes: FlowNode[] = [
  { icon: Package, label: 'Product Catalogue', description: 'Manage your products, categories, and inventory' },
  { icon: ShoppingCart, label: 'Customer Order', description: 'Receive orders from the online storefront' },
  { icon: LayoutDashboard, label: 'Retail Management', description: 'Track stock and sales in the admin panel' },
  { icon: Receipt, label: 'Billing & Inventory', description: 'Generate invoices and update stock levels' },
];

export function Workflow() {
  const { ref, visible } = useReveal(0.1);

  return (
    <section id="workflow" className="py-24 md:py-32 bg-surface-warm border-y border-border">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow">How they work together</p>
          <h2 className="mt-4 font-display text-display-md font-semibold text-ink text-balance">
            Tools that fit the way you work.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft text-pretty">
            The four applications are complementary tools. Each works independently, and where they share
            data, the connections are designed to match real retail workflows.
          </p>
        </Reveal>

        {/* Workflow diagram */}
        <div ref={ref} className="mt-16">
          <div className="grid gap-4 md:grid-cols-4 md:gap-0">
            {flowNodes.map((node, idx) => {
              const Icon = node.icon;
              return (
                <div key={node.label} className="relative flex flex-col items-center md:items-start">
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={visible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-full"
                  >
                    <div className="flex flex-col items-center rounded-xl border border-border bg-white p-6 text-center md:mx-2">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest-50 text-forest-500">
                        <Icon className="h-6 w-6" />
                      </span>
                      <p className="mt-4 text-sm font-semibold text-ink">{node.label}</p>
                      <p className="mt-1.5 text-xs leading-relaxed text-ink-mute">{node.description}</p>
                    </div>
                  </motion.div>

                  {/* Connector arrow */}
                  {idx < flowNodes.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={visible ? { opacity: 1, scaleX: 1 } : {}}
                      transition={{ duration: 0.4, delay: idx * 0.15 + 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute top-1/2 left-full hidden h-px w-full -translate-y-1/2 bg-border md:block"
                      style={{ transformOrigin: 'left' }}
                    >
                      <span className="absolute right-0 top-1/2 -translate-y-1/2 text-border">
                        <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
                          <path d="M1 1L7 6L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <Reveal delay={0.3}>
          <div className="mt-14 max-w-2xl rounded-xl border border-border bg-white/60 p-6">
            <p className="text-sm leading-relaxed text-ink-soft">
              <span className="font-semibold text-ink">Note:</span> The applications are designed as complementary
              tools. Each one works independently. Where specific integrations are available, they are documented
              within each product. They are not currently a single unified platform.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
