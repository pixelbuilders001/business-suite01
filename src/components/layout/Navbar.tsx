import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { siteConfig, navLinks } from '@/config/site';
import { useScrollDirection } from '@/lib/hooks';

export function Navbar() {
  const { scrolled } = useScrollDirection();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out-expo ${
          scrolled
            ? 'border-b border-border/60 bg-canvas/80 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <nav className="container-page flex h-16 items-center justify-between md:h-18">
          <a href="#top" className="flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-400 rounded-md">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-forest-500 text-white font-bold text-sm">
              V
            </span>
            <span className="font-display text-lg font-semibold tracking-tight text-ink">
              {siteConfig.brand.wordmark}
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-ink-soft transition-colors hover:text-forest-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-400 rounded-md"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a href={siteConfig.contact.demoBookingUrl} className="btn-primary text-sm">
              Book a Demo
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-ink transition-colors hover:bg-surface md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-400"
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-canvas md:hidden"
          >
            <div className="flex h-16 items-center justify-between px-6">
              <span className="font-display text-lg font-semibold text-ink">{siteConfig.brand.wordmark}</span>
              <button
                onClick={() => setMenuOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-lg text-ink transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-400"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <motion.nav
              className="flex flex-col gap-2 px-6 pt-4"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
              }}
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-border py-4 text-2xl font-display font-medium text-ink transition-colors hover:text-forest-500"
                  variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href={siteConfig.contact.demoBookingUrl}
                onClick={() => setMenuOpen(false)}
                className="btn-primary mt-6 w-full"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              >
                Book a Demo
                <ArrowRight className="h-4 w-4" />
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
