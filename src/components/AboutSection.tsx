import { Mountain, Church, TreePine, Users } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: <Church className="text-accent" size={32} />,
      title: "Rich Cultural Heritage",
      description: "Discover centuries-old churches, monuments, and cultural sites that tell the story of Ligao's vibrant past.",
    },
    {
      icon: <Mountain className="text-nature" size={32} />,
      title: "Stunning Natural Beauty",
      description: "From rolling hills to hidden springs, experience the breathtaking landscapes that make Ligao unique.",
    },
    {
      icon: <TreePine className="text-secondary" size={32} />,
      title: "Adventure & Recreation",
      description: "Hiking, camping, spring resorts, and outdoor activities for thrill-seekers and nature enthusiasts.",
    },
    {
      icon: <Users className="text-primary" size={32} />,
      title: "Warm Local Community",
      description: "Experience the genuine Filipino hospitality and connect with the friendly locals of Ligao City.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About Ligao City
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nestled in the province of Albay, Ligao City is a hidden gem that perfectly 
              blends natural wonders with rich cultural heritage. Known for its stunning 
              landscapes, sacred sites, and warm hospitality, Ligao offers visitors an 
              authentic Filipino experience away from the crowded tourist destinations.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Whether you're seeking spiritual enlightenment at our historic churches, 
              adventure in our pristine nature parks, or simply a peaceful retreat among 
              the rolling hills, Ligao City has something special for every traveler.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-light transition-smooth font-semibold">
                Learn More
              </button>
              <button className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-smooth font-semibold">
                Contact Tourism Office
              </button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-6 bg-card rounded-lg shadow-soft hover:shadow-medium transition-smooth border border-border"
              >
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 pt-16 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">13+</div>
              <div className="text-muted-foreground">Tourist Attractions</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-nature mb-2">5+</div>
              <div className="text-muted-foreground">Nature Parks</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">3+</div>
              <div className="text-muted-foreground">Cultural Sites</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">4+</div>
              <div className="text-muted-foreground">Adventure Spots</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;