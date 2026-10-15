import { ArrowRight, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site';
import { ScreenshotPlaceholder } from '@/components/ui/ScreenshotPlaceholder';

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36 pb-20 md:pb-32">
      {/* Subtle grid backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-canvas to-transparent" />

      <div className="container-page relative">
        {/* Trust statement */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="flex justify-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/60 px-4 py-1.5 text-xs font-medium text-ink-soft backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-forest-500" />
            {siteConfig.builtStatement}
          </span>
        </motion.div>

        {/* Headline */}
        <div className="mt-8 text-center">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease }}
              className="font-display text-display-xl font-semibold text-ink text-balance"
            >
              Your business.
            </motion.h1>
          </div>
          <div className="overflow-hidden mt-1">
            <motion.h1
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease }}
              className="font-display text-display-xl font-semibold text-ink text-balance"
            >
              <span className="text-forest-500">Better connected.</span>
            </motion.h1>
          </div>
        </div>

        {/* Supporting copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease }}
          className="mx-auto mt-7 max-w-2xl text-center text-lg leading-relaxed text-ink-soft text-pretty"
        >
          From everyday billing and barcode scanning to inventory management and your own online store—
          practical software built for growing businesses.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a href={siteConfig.contact.demoBookingUrl} className="btn-primary">
            Book a Free Demo
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#products" className="btn-secondary">
            Explore the Products
            <ArrowDown className="h-4 w-4" />
          </a>
        </motion.div>

        {/* Hero visual — layered product composition */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease }}
          className="relative mt-16 md:mt-20"
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto max-w-5xl">
      {/* Main dashboard */}
      <motion.div
        initial={{ opacity: 0, clipPath: 'inset(8% 0 8% 0)', y: 20 }}
        animate={{ opacity: 1, clipPath: 'inset(0% 0 0% 0)', y: 0 }}
        transition={{ duration: 1, delay: 0.8, ease }}
        className="relative z-20 mx-auto max-w-4xl"
      >
        <ScreenshotPlaceholder
          label="Retail Management Dashboard"
          sublabel="Primary hero screenshot — replace with actual dashboard"
          className="shadow-2xl shadow-black/15"
          dark={false}
        />
      </motion.div>

      {/* Left floating card — POS */}
      <motion.div
        initial={{ opacity: 0, x: -40, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0, ease }}
        className="absolute -left-4 bottom-8 z-30 hidden w-64 lg:block"
      >
        <ScreenshotPlaceholder
          label="Barcode POS"
          sublabel="Billing interface"
          className="shadow-xl shadow-black/20"
          dark={true}
        />
      </motion.div>

      {/* Right floating card — Storefront */}
      <motion.div
        initial={{ opacity: 0, x: 40, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1, ease }}
        className="absolute -right-4 top-12 z-30 hidden w-64 lg:block"
      >
        <ScreenshotPlaceholder
          label="Online Storefront"
          sublabel="Product browsing"
          className="shadow-xl shadow-black/20"
          dark={false}
        />
      </motion.div>

      {/* Bottom right — GST invoice */}
      <motion.div
        initial={{ opacity: 0, x: 30, y: 30 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2, ease }}
        className="absolute -right-8 -bottom-6 z-30 hidden w-56 xl:block"
      >
        <ScreenshotPlaceholder
          label="GST Invoice"
          sublabel="Invoice preview"
          className="shadow-xl shadow-black/20"
          dark={false}
        />
      </motion.div>

      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-forest-500/[0.04] blur-3xl" />
    </div>
  );
}
