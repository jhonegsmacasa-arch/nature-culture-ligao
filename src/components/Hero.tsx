import { ArrowDown, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/ligao-hero.jpg";

const Hero = () => {
  const scrollToAttractions = () => {
    document.getElementById("attractions")?.scrollIntoView({ 
      behavior: "smooth" 
    });
  };

  return (
    <section 
      id="home"
      className="hero-section relative flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${heroImage})`,
      }}
    >
      <div className="container mx-auto px-4 text-center text-white">
        <div className="flex items-center justify-center mb-6">
          <MapPin className="text-primary-light mr-2" size={24} />
          <span className="text-lg font-medium">Ligao City, Albay Province</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Unveiling Ligao City
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-white/90">
          A Journey Through <span className="text-primary-light font-semibold">Nature</span> and{" "}
          <span className="text-accent-light font-semibold">Culture</span>
        </p>
        
        <p className="text-lg mb-10 max-w-2xl mx-auto text-white/80">
          Discover the hidden gems of Ligao City - from sacred churches and monuments 
          to pristine nature parks and breathtaking mountain views. Experience the perfect 
          blend of Filipino heritage and natural beauty.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            onClick={scrollToAttractions}
            size="lg"
            className="bg-primary hover:bg-primary-light text-primary-foreground px-8 py-4 text-lg font-semibold transition-bounce"
          >
            Explore Attractions
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold transition-bounce"
          >
            Plan Your Visit
          </Button>
        </div>

        <div className="animate-bounce">
          <button 
            onClick={scrollToAttractions}
            className="text-white/80 hover:text-white transition-smooth"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;