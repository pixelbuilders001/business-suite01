import { MessageCircle, Mail, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { products } from '@/config/products';

function buildWhatsAppUrl() {
  const msg = encodeURIComponent(
    `Hello ${siteConfig.brand.name}, I'd like to know more about your business applications.`
  );
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${msg}`;
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-warm">
      <div className="container-page py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-forest-500 text-white font-bold text-sm">
                V
              </span>
              <span className="font-display text-lg font-semibold tracking-tight text-ink">
                {siteConfig.brand.wordmark}
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-mute">
              {siteConfig.brand.tagline}. Built and tested in a real retail business.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-white text-forest-500 transition-colors hover:border-forest-500/30 hover:bg-forest-50"
                aria-label="Contact on WhatsApp"
              >
                <MessageCircle className="h-4.5 w-4.5" />
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-white text-forest-500 transition-colors hover:border-forest-500/30 hover:bg-forest-50"
                aria-label="Send email"
              >
                <Mail className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-ink-mute">Products</p>
            <ul className="mt-4 space-y-3">
              {products.map((product) => (
                <li key={product.id}>
                  <a
                    href={`#${product.id}`}
                    className="text-sm text-ink-soft transition-colors hover:text-forest-500"
                  >
                    {product.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-ink-mute">Get in touch</p>
            <ul className="mt-4 space-y-3">
              <li>
                <a href={siteConfig.contact.demoBookingUrl} className="text-sm text-ink-soft transition-colors hover:text-forest-500">
                  Book a free demo
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.contact.email}`} className="text-sm text-ink-soft transition-colors hover:text-forest-500">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-ink-soft transition-colors hover:text-forest-500"
                >
                  WhatsApp: {siteConfig.contact.whatsappDisplay}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-ink-mute">
            © {new Date().getFullYear()} {siteConfig.brand.name}. All rights reserved.
          </p>
          <p className="text-xs text-ink-mute">
            Built for {siteConfig.caseStudyBusiness}
          </p>
        </div>
      </div>
    </footer>
  );
}
