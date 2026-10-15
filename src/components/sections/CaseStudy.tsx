import { Store, ShoppingBag, ScanLine, FileText, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site';
import { Reveal } from '@/components/ui/Reveal';
import { ScreenshotPlaceholder } from '@/components/ui/ScreenshotPlaceholder';
import { useReveal } from '@/lib/hooks';

const caseStudyPoints = [
  { icon: ShoppingBag, label: 'Managing a real product catalogue', description: 'The online storefront displays a live catalogue of sarees and garments.' },
  { icon: Store, label: 'Handling retail inventory', description: 'The retail management system tracks stock across categories in a working shop.' },
  { icon: ScanLine, label: 'Barcode-based product lookup', description: 'The POS application is used for fast, barcode-driven billing at the counter.' },
  { icon: FileText, label: 'Professional invoicing', description: 'The GST billing application generates invoices for real customer transactions.' },
];

export function CaseStudy() {
  const { ref, visible } = useReveal(0.1);

  return (
    <section id="case-study" className="py-24 md:py-32">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow">Real-world proof</p>
          <h2 className="mt-4 font-display text-display-md font-semibold text-ink text-balance">
            Built around the realities of retail.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft text-pretty">
            The software was developed and is used in{' '}
            <span className="font-semibold text-ink">{siteConfig.caseStudyBusiness}</span>, a real saree retail
            operation. These are not concepts—they are working tools, shaped by actual retail needs.
          </p>
        </Reveal>

        <div ref={ref} className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Screenshot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            animate={visible ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <ScreenshotPlaceholder
              label={`${siteConfig.caseStudyBusiness} — Storefront`}
              sublabel="Replace with actual shop screenshot"
              className="shadow-2xl shadow-black/10"
            />
          </motion.div>

          {/* Points */}
          <div className="space-y-6">
            {caseStudyPoints.map((point, idx) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={point.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={visible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex gap-4 rounded-xl border border-border bg-white p-5"
                >
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-forest-50 text-forest-500">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{point.label}</p>
                    <p className="mt-1 text-sm leading-relaxed text-ink-mute">{point.description}</p>
                  </div>
                </motion.div>
              );
            })}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <a
                href={siteConfig.contact.demoBookingUrl}
                className="inline-flex items-center gap-2 text-sm font-semibold text-forest-500 transition-colors hover:text-forest-600"
              >
                See it in action — book a demo
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
