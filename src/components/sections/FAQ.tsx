import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { faqs } from '@/config/products';
import { Reveal } from '@/components/ui/Reveal';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32 bg-surface-warm border-t border-border">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="eyebrow">FAQ</p>
              <h2 className="mt-4 font-display text-display-sm font-semibold text-ink text-balance">
                Questions, answered.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-ink-mute">
                Can't find what you're looking for? Send us a WhatsApp message.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <div className="divide-y divide-border border-y border-border">
              {faqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div key={idx}>
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-forest-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-400 rounded-md"
                      aria-expanded={isOpen}
                    >
                      <span className="text-base font-semibold text-ink">{faq.question}</span>
                      <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-border text-forest-500">
                        {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="pb-5 pr-12 text-sm leading-relaxed text-ink-mute">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
