import { MessageSquare, Eye, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import { Reveal } from '@/components/ui/Reveal';
import { useReveal } from '@/lib/hooks';
import type { LucideIcon } from 'lucide-react';

interface Step {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'Tell us about your business',
    description: 'Share what you sell and how you currently manage billing, inventory, and sales. We listen first.',
  },
  {
    icon: Eye,
    number: '02',
    title: 'See a live demonstration',
    description: 'We walk you through the relevant applications on a call, showing how they work for your type of business.',
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Start using the right tools',
    description: 'We help you set up the applications that fit your needs. Use them independently or together.',
  },
];

export function HowItWorks() {
  const { ref, visible } = useReveal(0.1);

  return (
    <section id="how-it-works" className="py-24 md:py-32">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow">How it works</p>
          <h2 className="mt-4 font-display text-display-md font-semibold text-ink text-balance">
            From enquiry to running software.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft text-pretty">
            No complicated onboarding. Just a straightforward conversation about what your business needs.
          </p>
        </Reveal>

        <div ref={ref} className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {/* Connector line */}
                {idx < steps.length - 1 && (
                  <div className="absolute top-8 left-full hidden h-px w-full bg-border md:block" />
                )}

                <div className="relative flex items-start gap-5 md:flex-col md:gap-0">
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-border bg-white text-forest-500">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="md:mt-6">
                    <span className="font-display text-3xl font-light text-border">{step.number}</span>
                    <h3 className="mt-2 text-lg font-semibold text-ink">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-mute">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
