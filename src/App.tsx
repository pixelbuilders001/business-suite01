import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { ProductOverview } from '@/components/sections/ProductOverview';
import { ProductShowcase } from '@/components/sections/ProductShowcase';
import { BarcodePosSequence } from '@/components/sections/BarcodePosSequence';
import { Workflow } from '@/components/sections/Workflow';
import { CaseStudy } from '@/components/sections/CaseStudy';
import { Features } from '@/components/sections/Features';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { FAQ } from '@/components/sections/FAQ';
import { DemoCTA } from '@/components/sections/DemoCTA';
import { products } from '@/config/products';

function App() {
  return (
    <div className="min-h-screen bg-canvas">
      <Navbar />
      <main>
        <Hero />
        <ProductOverview />

        {/* Product 1: Online Storefront */}
        <ProductShowcase product={products[0]} />

        {/* Product 2: Retail Management */}
        <ProductShowcase product={products[1]} reversed />

        {/* Product 3: Barcode POS — with sticky scroll sequence */}
        <BarcodePosSequence />
        <ProductShowcase product={products[2]} reversed />

        {/* Product 4: GST Billing */}
        <ProductShowcase product={products[3]} />

        <Workflow />
        <CaseStudy />
        <Features />
        <HowItWorks />
        <FAQ />
        <DemoCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
