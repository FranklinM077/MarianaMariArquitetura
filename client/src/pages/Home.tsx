import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WaitlistSection from "@/components/WaitlistSection";
import FeaturesSection from "@/components/FeaturesSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <WaitlistSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
