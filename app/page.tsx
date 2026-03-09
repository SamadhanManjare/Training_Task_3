import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import FeaturesSection from "@/components/FeaturesSection";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import ContactBackSection from "@/components/ContactBackSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary selection:text-white">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <FeaturesSection />
      <SuccessStoriesSection />
      <ContactBackSection />
      <Footer />
    </main>
  );
}
