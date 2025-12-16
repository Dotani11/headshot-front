import FloatingHeader from "@/components/landing/FloatingHeader";
import FloatingCTA from "@/components/landing/FloatingCTA";
import HeroSection from "@/components/landing/HeroSection";
import StatsSection from "@/components/landing/StatsSection";
import WhySection from "@/components/landing/WhySection";
import BeforeAfterSection from "@/components/landing/BeforeAfterSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import PricingSection from "@/components/landing/PricingSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import UseCasesSection from "@/components/landing/UseCasesSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <>
      <FloatingHeader />
      <FloatingCTA />
      <main className="min-h-screen">
        <HeroSection />
        <StatsSection />
        <WhySection />
        <BeforeAfterSection />
        <HowItWorksSection />
        <PricingSection />
        <TestimonialsSection />
        <UseCasesSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
