import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import type { ProductConfig } from '@/config/products';
import { ScreenshotFrame } from '@/components/ui/ScreenshotFrame';
import { useReveal } from '@/lib/hooks';

interface ProductShowcaseProps {
  product: ProductConfig;
  reversed?: boolean;
}

export function ProductShowcase({ product, reversed = false }: ProductShowcaseProps) {
  const { ref, visible } = useReveal(0.12);
  const isDark = product.theme === 'dark';

  return (
    <section
      id={product.id}
      className={`relative py-24 md:py-32 ${isDark ? 'bg-surface-deep text-white' : ''}`}
    >
      <div className="container-page">
        <div
          ref={ref}
          className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
            reversed ? 'lg:grid-flow-col-dense' : ''
          }`}
        >
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className={reversed ? 'lg:col-start-2' : ''}
          >
            <div className="flex items-center gap-3">
              <span className={`font-display text-3xl font-light ${isDark ? 'text-white/20' : 'text-border'}`}>
                {product.number}
              </span>
              <span className={`text-xs font-medium uppercase tracking-[0.18em] ${isDark ? 'text-forest-300' : 'text-forest-500'}`}>
                {product.label}
              </span>
            </div>

            <h2 className={`mt-5 font-display text-display-sm font-semibold text-balance ${isDark ? 'text-white' : 'text-ink'}`}>
              {product.headline}
            </h2>

            <p className={`mt-5 text-lg leading-relaxed text-pretty ${isDark ? 'text-white/70' : 'text-ink-soft'}`}>
              {product.description}
            </p>

            <ul className="mt-8 space-y-4">
              {product.features.map((feature, idx) => (
                <motion.li
                  key={feature.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={visible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="flex gap-3.5"
                >
                  <span
                    className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${
                      isDark ? 'bg-forest-500/30 text-forest-200' : 'bg-forest-50 text-forest-500'
                    }`}
                  >
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <div>
                    <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-ink'}`}>
                      {feature.label}
                    </p>
                    <p className={`mt-0.5 text-sm leading-relaxed ${isDark ? 'text-white/60' : 'text-ink-mute'}`}>
                      {feature.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>

            <a
              href={product.ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-8 inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
                isDark ? 'text-forest-300 hover:text-forest-200' : 'text-forest-500 hover:text-forest-600'
              }`}
            >
              {product.ctaLabel}
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          {/* Screenshot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            animate={visible ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className={reversed ? 'lg:col-start-1 lg:row-start-1' : ''}
          >
            <div className="relative">
              <ScreenshotFrame
                src={product.primaryScreenshot}
                alt={`${product.name} — Main Interface`}
                dark={isDark}
                priority={product.id === 'storefront'}
                className="shadow-2xl shadow-black/15"
              />

              {/* Support screenshots */}
              {product.supportScreenshots.length > 0 && (
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {product.supportScreenshots.map((src, idx) => (
                    <ScreenshotFrame
                      key={idx}
                      src={src}
                      alt={`${product.name} — Screen ${idx + 2}`}
                      dark={isDark}
                      className="shadow-lg shadow-black/10"
                    />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle section divider */}
      {isDark && (
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      )}
    </section>
  );
}
