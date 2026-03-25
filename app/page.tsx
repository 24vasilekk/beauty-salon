import Header from "@/components/layout/Header";
import AboutSection from "@/sections/AboutSection";
import ContactSection from "@/sections/ContactSection";
import HeroSection from "@/sections/HeroSection";
import MastersSection from "@/sections/MastersSection";
import PricingSection from "@/sections/PricingSection";
import ReviewsSection from "@/sections/ReviewsSection";
import ServicesSection from "@/sections/ServicesSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <MastersSection />
        <PricingSection />
        <ReviewsSection />
        <ContactSection />
      </main>
    </>
  );
}
