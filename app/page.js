import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import ProductsSection from "@/components/ProductsSection";
import WholesaleSection from "@/components/WholesaleSection";
import NetworkSection from "@/components/NetworkSection";
import AboutSection from "@/components/AboutSection";
import EnquiryForm from "@/components/EnquiryForm";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Three Trust Pillars */}
      <TrustSection />

      {/* Products Section */}
      <ProductsSection />

      {/* Wholesale & Commercial Supply */}
      <WholesaleSection />

      {/* Strategic Delivery & Distribution Network */}
      <NetworkSection />

      {/* About STAR EGGS CENTRE */}
      <AboutSection />

      {/* Business Enquiry Form */}
      <EnquiryForm />

      {/* Contact & Map Directions */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Floating & Mobile Sticky WhatsApp Contact */}
      <WhatsAppButton />
    </main>
  );
}
