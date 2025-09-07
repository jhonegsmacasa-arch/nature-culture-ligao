import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AttractionsSection from "@/components/AttractionsSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Update page title and meta description
    document.title = "Ligao City Tourism - Discover Nature and Culture in Albay";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore Ligao City\'s amazing attractions including St. Stephen Church, Kawa-kawa Hill, nature parks, and hidden springs. Your gateway to authentic Filipino culture and natural beauty in Albay Province.');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <AttractionsSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
