export type ProductId = 'storefront' | 'retail-management' | 'barcode-pos' | 'gst-billing';

export interface ProductFeature {
  label: string;
  description: string;
}

export interface ProductStep {
  step: number;
  title: string;
  description: string;
}

export interface ProductConfig {
  id: ProductId;
  number: string;
  label: string;
  name: string;
  headline: string;
  description: string;
  features: ProductFeature[];
  steps?: ProductStep[];
  ctaLabel: string;
  ctaHref: string;
  screenshotDir: string;
  primaryScreenshot: string;
  supportScreenshots: string[];
  theme: 'light' | 'dark';
  accent: string;
}

export const products: ProductConfig[] = [
  {
    id: 'storefront',
    number: '01',
    label: 'Online Storefront',
    name: 'Storefront',
    headline: 'Your shop, open beyond the counter.',
    description:
      'Present your full catalogue online with a clean, fast storefront that lets customers browse products, view details, and reach you directly—without the complexity of a full marketplace.',
    features: [
      { label: 'Product catalogue', description: 'Display your complete inventory with images, pricing, and details.' },
      { label: 'Browse & search', description: 'Customers can filter and find products quickly by category or name.' },
      { label: 'Mobile-first design', description: 'A storefront that works smoothly on any phone or tablet.' },
      { label: 'Direct enquiries', description: 'Customers can contact you for orders and product availability.' },
    ],
    ctaLabel: 'Explore Storefront',
    ctaHref: 'https://example.com/storefront',
    screenshotDir: '/',
    primaryScreenshot: '/storefront-home.png',
    supportScreenshots: [
      '/storefront-product.png',
      '/05-product-catalogue.jpg',
    ],
    theme: 'light',
    accent: '#176B50',
  },
  {
    id: 'retail-management',
    number: '02',
    label: 'Retail Management System',
    name: 'Retail Management',
    headline: 'One clearer view of your business.',
    description:
      'An admin panel that brings inventory, sales, and online/offline retail workflows together. Track stock, manage products, and monitor your operations from a single, organised dashboard.',
    features: [
      { label: 'Inventory management', description: 'Add, edit, and track products across categories and stock levels.' },
      { label: 'Sales overview', description: 'View sales activity and transaction history in one dashboard.' },
      { label: 'Online & offline sync', description: 'Manage both in-store and online retail operations from one place.' },
      { label: 'Product organisation', description: 'Categorise, search, and manage product details efficiently.' },
    ],
    ctaLabel: 'Explore Retail Management',
    ctaHref: 'https://example.com/retail-management',
    screenshotDir: '/',
    primaryScreenshot: '/01-retail-command-center.jpg',
    supportScreenshots: [
      '/03-stock-inventory.jpg',
      '/14-business-reports.jpg',
    ],
    theme: 'light',
    accent: '#176B50',
  },
  {
    id: 'barcode-pos',
    number: '03',
    label: 'Barcode POS',
    name: 'Barcode POS',
    headline: 'From scan to sale, with less friction.',
    description:
      'A point-of-sale application that supports barcode-based product lookup and fast billing. Scan, add, and total—designed for speed at the counter during busy hours.',
    features: [
      { label: 'Barcode scanning', description: 'Look up products instantly by scanning their barcodes.' },
      { label: 'Quick billing', description: 'Build a bill with a few clicks or scans, without navigating menus.' },
      { label: 'Product search', description: 'Find products by name or code when a barcode is unavailable.' },
      { label: 'Bill summary', description: 'Clear line items, totals, and a printable bill at the end of the sale.' },
    ],
    steps: [
      { step: 1, title: 'Find or scan a product', description: 'Scan a barcode or search by name to add products to the bill.' },
      { step: 2, title: 'Add it to the bill', description: 'Products appear as line items with prices and quantities.' },
      { step: 3, title: 'Complete the billing', description: 'Review the total, apply any discounts, and finish the sale.' },
      { step: 4, title: 'Print the bill', description: 'Generate a printable bill for the customer instantly.' },
    ],
    ctaLabel: 'Explore Barcode POS',
    ctaHref: 'https://example.com/barcode-pos',
    screenshotDir: '/',
    primaryScreenshot: '/pos-scanner.png',
    supportScreenshots: [
      '/06-in-store-pos-sales.jpg',
      '/02-barcode-label-printing.jpg',
    ],
    theme: 'dark',
    accent: '#176B50',
  },
  {
    id: 'gst-billing',
    number: '04',
    label: 'GST Billing & Invoice Generator',
    name: 'GST Billing',
    headline: 'Professional invoices. Without the complexity.',
    description:
      'A dedicated billing application for creating invoices with applicable tax calculations, HSN details, and printable PDF output. Generate clean, professional invoices for your customers.',
    features: [
      { label: 'Invoice creation', description: 'Create detailed invoices with line items, quantities, and rates.' },
      { label: 'Tax & HSN details', description: 'Add applicable tax rates and HSN codes to your invoices.' },
      { label: 'Discounts', description: 'Apply discounts at the line-item or invoice level.' },
      { label: 'Printable PDFs', description: 'Generate and print professional invoices as PDF documents.' },
      { label: 'Product listing', description: 'View and manage your product inventory within the billing app.' },
    ],
    ctaLabel: 'Explore GST Billing',
    ctaHref: 'https://example.com/gst-billing',
    screenshotDir: '/',
    primaryScreenshot: '/billtoprint-pos.png',
    supportScreenshots: [
      '/20-invoice---sale-detail.jpg',
      '/14-business-reports.jpg',
    ],
    theme: 'light',
    accent: '#176B50',
  },
];

export const faqs = [
  {
    question: 'Are these products already functional, or are they concepts?',
    answer:
      'All four applications are real, working products that have been built and used in an actual saree retail business—Shree Banarasi Sarees. They are not prototypes or concepts.',
  },
  {
    question: 'Which types of businesses are these applications designed for?',
    answer:
      'They are designed for Indian small and medium businesses, including garment stores, boutiques, saree shops, footwear retailers, general stores, wholesalers, and other businesses that need billing or inventory management.',
  },
  {
    question: 'Do the four applications share data with each other?',
    answer:
      'The applications are complementary tools. Each one works independently. Where specific integrations exist, they are documented. They are not currently a single unified platform.',
  },
  {
    question: 'How do I see a live demonstration of these products?',
    answer:
      'You can request a free live demo through the demo form on this page. Alternatively, you can send a WhatsApp message directly using the contact details provided in the demo section.',
  },
  {
    question: 'Do I need special hardware for the Barcode POS?',
    answer:
      'The POS application supports barcode scanning with compatible barcode scanners. You can also search for products manually if a scanner is not available. Contact us to discuss your setup.',
  },
  {
    question: 'Does the GST Billing application handle GST compliance?',
    answer:
      'The application creates invoices with applicable tax calculations and HSN details, and generates printable PDFs. It does not guarantee full GST-law compliance or support every statutory GST workflow. Please consult your accountant for compliance requirements.',
  },
];
