import { ShoppingBag, LayoutDashboard, ScanLine, FileText, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { products } from '@/config/products';
import { useReveal } from '@/lib/hooks';
import type { ProductId } from '@/config/products';
import type { LucideIcon } from 'lucide-react';

const productIcons: Record<ProductId, LucideIcon> = {
  storefront: ShoppingBag,
  'retail-management': LayoutDashboard,
  'barcode-pos': ScanLine,
  'gst-billing': FileText,
};

export function ProductOverview() {
  const { ref, visible } = useReveal(0.1);

  return (
    <section id="products" className="py-24 md:py-32">
      <div className="container-page">
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <p className="eyebrow">Four applications. One business.</p>
            <h2 className="mt-4 font-display text-display-md font-semibold text-ink text-balance">
              Everything you need to run your retail business.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft text-pretty">
              Each tool is built to solve a specific problem—from selling online to billing at the counter.
              Use them individually or together, depending on what your business needs.
            </p>
          </motion.div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, idx) => {
            const Icon = productIcons[product.id];
            return (
              <motion.a
                key={product.id}
                href={`#${product.id}`}
                initial={{ opacity: 0, y: 24 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col rounded-xl border border-border bg-white p-6 transition-all duration-300 ease-out-expo hover:border-forest-500/30 hover:shadow-lg hover:shadow-forest-500/5"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-forest-50 text-forest-500 transition-colors group-hover:bg-forest-500 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-display text-2xl font-light text-border">{product.number}</span>
                </div>
                <p className="mt-5 text-xs font-medium uppercase tracking-wider text-ink-mute">
                  {product.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft line-clamp-2">
                  {product.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-forest-500">
                  Learn more
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                </span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
