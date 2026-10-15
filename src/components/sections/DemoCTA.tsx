import { useState, type FormEvent } from 'react';
import { MessageCircle, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/config/site';
import { products } from '@/config/products';
import { Reveal } from '@/components/ui/Reveal';

type FormState = {
  name: string;
  businessName: string;
  businessType: string;
  phone: string;
  productInterest: string;
  message: string;
};

type FormStatus = 'idle' | 'submitting' | 'success';

const businessTypes = [
  'Garment store',
  'Boutique',
  'Saree shop',
  'Footwear retailer',
  'General store',
  'Wholesaler',
  'Other',
];

function buildWhatsAppUrl(form: FormState): string {
  const lines = [
    `Hello ${siteConfig.brand.name}, I'd like to request a demo.`,
    ``,
    `Name: ${form.name}`,
    `Business: ${form.businessName}`,
    `Business type: ${form.businessType}`,
    `Phone: ${form.phone}`,
    `Product of interest: ${form.productInterest}`,
    form.message ? `Message: ${form.message}` : '',
  ].filter(Boolean);

  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`;
}

export function DemoCTA() {
  const [form, setForm] = useState<FormState>({
    name: '',
    businessName: '',
    businessType: '',
    phone: '',
    productInterest: products[0].label,
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  function validate(): boolean {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!form.businessName.trim()) e.businessName = 'Please enter your business name';
    if (!form.businessType) e.businessType = 'Please select a business type';
    if (!form.phone.trim()) e.phone = 'Please enter a phone or WhatsApp number';
    else if (!/^[+\d\s-]{8,}$/.test(form.phone.trim())) e.phone = 'Please enter a valid phone number';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    const whatsappUrl = buildWhatsAppUrl(form);

    // The form submits via WhatsApp fallback — no backend endpoint is configured.
    // This opens WhatsApp with a pre-filled enquiry message.
    setTimeout(() => {
      setStatus('success');
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }, 800);
  }

  function updateField<K extends keyof FormState>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  const directWhatsAppUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    `Hello ${siteConfig.brand.name}, I'd like to know more about your business applications.`
  )}`;

  return (
    <section id="demo" className="py-24 md:py-32 bg-surface-deep text-white relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-dots opacity-20" />

      <div className="container-page relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left — copy */}
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-forest-300">
                Book a demo
              </p>
              <h2 className="mt-4 font-display text-display-md font-semibold text-white text-balance">
                Let's find the right setup for your business.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/70 text-pretty">
                Tell us about your business and we'll walk you through the applications that fit.
                No pressure, no jargon—just a practical demonstration.
              </p>

              <div className="mt-8 space-y-3">
                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <MessageCircle className="h-4.5 w-4.5 text-forest-300" />
                  Chat on WhatsApp
                </a>
                <p className="text-sm text-white/50">
                  Or call us at{' '}
                  <a href={`tel:${siteConfig.contact.phone}`} className="font-semibold text-white/80 hover:text-white">
                    {siteConfig.contact.phone}
                  </a>
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-7">
            <Reveal delay={0.15}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8 backdrop-blur-sm">
                <AnimatePresence mode="wait">
                  {status === 'success' ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center py-12 text-center"
                    >
                      <CheckCircle2 className="h-12 w-12 text-forest-300" />
                      <p className="mt-4 text-lg font-semibold text-white">Thank you, {form.name}.</p>
                      <p className="mt-2 max-w-sm text-sm text-white/60">
                        Your enquiry has been opened in WhatsApp. Please send the message to complete your
                        demo request. We'll get back to you shortly.
                      </p>
                      <button
                        onClick={() => {
                          setStatus('idle');
                          setForm({
                            name: '',
                            businessName: '',
                            businessType: '',
                            phone: '',
                            productInterest: products[0].label,
                            message: '',
                          });
                        }}
                        className="mt-6 text-sm font-semibold text-forest-300 hover:text-forest-200"
                      >
                        Submit another enquiry
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      noValidate
                      className="space-y-5"
                    >
                      <div className="grid gap-5 sm:grid-cols-2">
                        <FormField
                          label="Name"
                          required
                          error={errors.name}
                        >
                          <input
                            type="text"
                            value={form.name}
                            onChange={(e) => updateField('name', e.target.value)}
                            className="form-input"
                            placeholder="Your full name"
                            aria-required="true"
                            aria-invalid={!!errors.name}
                          />
                        </FormField>
                        <FormField
                          label="Business name"
                          required
                          error={errors.businessName}
                        >
                          <input
                            type="text"
                            value={form.businessName}
                            onChange={(e) => updateField('businessName', e.target.value)}
                            className="form-input"
                            placeholder="Your business name"
                            aria-required="true"
                            aria-invalid={!!errors.businessName}
                          />
                        </FormField>
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <FormField
                          label="Business type"
                          required
                          error={errors.businessType}
                        >
                          <select
                            value={form.businessType}
                            onChange={(e) => updateField('businessType', e.target.value)}
                            className="form-input"
                            aria-required="true"
                            aria-invalid={!!errors.businessType}
                          >
                            <option value="">Select a type</option>
                            {businessTypes.map((type) => (
                              <option key={type} value={type}>{type}</option>
                            ))}
                          </select>
                        </FormField>
                        <FormField
                          label="Phone or WhatsApp"
                          required
                          error={errors.phone}
                        >
                          <input
                            type="tel"
                            value={form.phone}
                            onChange={(e) => updateField('phone', e.target.value)}
                            className="form-input"
                            placeholder="+91 00000 00000"
                            aria-required="true"
                            aria-invalid={!!errors.phone}
                          />
                        </FormField>
                      </div>

                      <FormField label="Product of interest">
                        <select
                          value={form.productInterest}
                          onChange={(e) => updateField('productInterest', e.target.value)}
                          className="form-input"
                        >
                          {products.map((p) => (
                            <option key={p.id} value={p.label}>{p.label}</option>
                          ))}
                          <option value="All products">All products</option>
                        </select>
                      </FormField>

                      <FormField label="Message (optional)">
                        <textarea
                          value={form.message}
                          onChange={(e) => updateField('message', e.target.value)}
                          className="form-input min-h-[80px] resize-y"
                          placeholder="Tell us about your needs..."
                          rows={3}
                        />
                      </FormField>

                      <div className="flex items-start gap-2">
                        <p className="text-xs leading-relaxed text-white/40">
                          By submitting this form, your enquiry will be sent via WhatsApp to our team.
                          We do not store or share your information with third parties.
                        </p>
                      </div>

                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest-500 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 ease-out-expo hover:bg-forest-600 disabled:opacity-50 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-300 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-deep"
                      >
                        {status === 'submitting' ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Request Demo
                            <Send className="h-4 w-4" />
                          </>
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <style>{`
        .form-input {
          width: 100%;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.04);
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          color: white;
          transition: border-color 0.2s, background 0.2s;
        }
        .form-input::placeholder {
          color: rgba(255,255,255,0.3);
        }
        .form-input:focus {
          outline: none;
          border-color: rgba(23,107,80,0.6);
          background: rgba(255,255,255,0.06);
        }
        .form-input option {
          background: #1A1A18;
          color: white;
        }
      `}</style>
    </section>
  );
}

function FormField({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-white/70">
        {label}
        {required && <span className="text-forest-300"> *</span>}
      </span>
      {children}
      {error && (
        <span className="mt-1 block text-xs text-amber-300">{error}</span>
      )}
    </label>
  );
}
