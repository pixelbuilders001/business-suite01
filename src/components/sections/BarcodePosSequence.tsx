import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ScanLine, Plus, Check, Printer } from 'lucide-react';
import { products } from '@/config/products';
import { ScreenshotFrame } from '@/components/ui/ScreenshotFrame';
import type { ProductStep } from '@/config/products';
import type { LucideIcon } from 'lucide-react';

const stepIcons: LucideIcon[] = [ScanLine, Plus, Check, Printer];

const stepScreenshots = [
  { src: '/pos-scanner.png', alt: 'Step 1 — Barcode Scanner & Lookup' },
  { src: '/06-in-store-pos-sales.jpg', alt: 'Step 2 — Counter Billing & Cart' },
  { src: '/04-payment---qr-workflow.jpg', alt: 'Step 3 — QR & UPI Payment' },
  { src: '/billtoprint-pos.png', alt: 'Step 4 — Printable Bill & Invoice' },
];

export function BarcodePosSequence() {
  const posProduct = products.find((p) => p.id === 'barcode-pos')!;
  const sectionRef = useRef<HTMLElement>(null);
  const steps = posProduct.steps ?? [];
  const stepCount = steps.length;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const screenshotY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-surface-deep"
      style={{ height: `${stepCount * 100}vh` }}
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="container-page w-full">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: screenshot */}
            <div className="relative hidden lg:block">
              <motion.div style={{ y: screenshotY }} className="relative">
                {stepScreenshots.map((item, idx) => (
                  <StepScreenshotItem
                    key={item.src}
                    image={item}
                    index={idx}
                    total={stepCount}
                    progress={scrollYProgress}
                  />
                ))}
              </motion.div>
            </div>

            {/* Right: steps */}
            <div className="relative">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-forest-300">
                Barcode POS — Step by step
              </p>
              <h3 className="mt-4 font-display text-display-sm font-semibold text-white text-balance">
                From scan to sale, with less friction.
              </h3>

              <div className="mt-10 space-y-1">
                {steps.map((step, idx) => (
                  <StepItem
                    key={step.step}
                    step={step}
                    index={idx}
                    total={stepCount}
                    progress={scrollYProgress}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StepItem({
  step,
  index,
  total,
  progress,
}: {
  step: ProductStep;
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
}) {
  const Icon = stepIcons[index] || ScanLine;
  const segmentSize = 1 / total;
  const start = index * segmentSize;
  const mid = start + segmentSize * 0.5;
  const end = start + segmentSize;

  const opacity = useTransform(progress, [start, mid, end], [0.3, 1, 0.3]);
  const x = useTransform(progress, [start, mid, end], [20, 0, -20]);
  const accentOpacity = useTransform(progress, [start, mid, end], [0, 1, 0]);

  return (
    <motion.div
      style={{ opacity, x }}
      className="flex gap-4 border-b border-white/10 py-6 last:border-b-0"
    >
      <div className="relative flex-shrink-0">
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-forest-300">
          <Icon className="h-5 w-5" />
        </span>
        <motion.div
          style={{ opacity: accentOpacity }}
          className="absolute inset-0 rounded-lg ring-2 ring-forest-500/40"
        />
      </div>
      <div>
        <p className="text-xs font-medium text-white/40">Step {step.step}</p>
        <p className="mt-1 text-base font-semibold text-white">{step.title}</p>
        <p className="mt-1 text-sm leading-relaxed text-white/60">{step.description}</p>
      </div>
    </motion.div>
  );
}

function StepScreenshotItem({
  image,
  index,
  total,
  progress,
}: {
  image: { src: string; alt: string };
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
}) {
  const segment = 1 / total;
  const start = index * segment;
  const end = (index + 1) * segment;

  const inputRange =
    index === 0
      ? [0, end * 0.7, end]
      : index === total - 1
      ? [start - segment * 0.3, start + segment * 0.2, 1]
      : [start - segment * 0.3, start, end - segment * 0.3, end];

  const outputRange =
    index === 0
      ? [1, 1, 0]
      : index === total - 1
      ? [0, 1, 1]
      : [0, 1, 1, 0];

  const opacity = useTransform(progress, inputRange, outputRange);

  return (
    <motion.div
      style={{ opacity }}
      className={index === 0 ? 'relative' : 'absolute inset-0 pointer-events-none'}
    >
      <ScreenshotFrame
        src={image.src}
        alt={image.alt}
        dark={true}
        className="shadow-2xl shadow-black/40"
      />
    </motion.div>
  );
}
