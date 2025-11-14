import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Diseases from "@/components/Diseases";
import Technologies from "@/components/Technologies";
import Team from "@/components/Team";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <HowItWorks />
      <Diseases />
      <Technologies />
      <Team />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;