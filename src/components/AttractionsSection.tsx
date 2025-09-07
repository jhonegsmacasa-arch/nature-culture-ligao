import AttractionCard from "./AttractionCard";
import stStephenChurch from "@/assets/st-stephen-church.jpg";
import kawakawaHill from "@/assets/kawa-kawa-hill.jpg";
import bambusetumPark from "@/assets/bambusetum-park.jpg";
import hiddenSpring from "@/assets/hidden-spring.jpg";
import mtMasaraga from "@/assets/mt-masaraga.jpg";

const AttractionsSection = () => {
  const attractions = [
    {
      id: 1,
      title: "St. Stephen Protomartyr Church",
      description: "A historic Catholic church showcasing beautiful Filipino architecture and serving as a spiritual cornerstone of the community.",
      image: stStephenChurch,
      category: "Cultural" as const,
      featured: true,
    },
    {
      id: 2,
      title: "Kawa-kawa Hill",
      description: "Rolling green hills offering panoramic views of Ligao's countryside and perfect for hiking and photography.",
      image: kawakawaHill,
      category: "Nature" as const,
    },
    {
      id: 3,
      title: "Bambusetum Park",
      description: "A serene bamboo forest park with walking trails, perfect for nature lovers and peaceful contemplation.",
      image: bambusetumPark,
      category: "Nature" as const,
    },
    {
      id: 4,
      title: "Burok-burukan Hidden Spring Resort",
      description: "A pristine natural spring resort with crystal-clear waters surrounded by lush tropical vegetation.",
      image: hiddenSpring,
      category: "Adventure" as const,
    },
    {
      id: 5,
      title: "The Campsite Mt. Masaraga",
      description: "Adventure camping site with breathtaking mountain views and outdoor activities for thrill-seekers.",
      image: mtMasaraga,
      category: "Adventure" as const,
    },
    {
      id: 6,
      title: "Fallen Sons of Ligao",
      description: "A memorial monument honoring the brave souls who sacrificed their lives for the country.",
      image: stStephenChurch, // Placeholder - would generate specific image
      category: "Cultural" as const,
    },
    {
      id: 7,
      title: "Divine Mercy Shrine",
      description: "A peaceful monastery of the Carmelite Nuns offering spiritual retreat and reflection.",
      image: stStephenChurch, // Placeholder - would generate specific image
      category: "Cultural" as const,
    },
    {
      id: 8,
      title: "Ilah Nature Park",
      description: "A beautiful nature preserve showcasing native flora and fauna with educational trails.",
      image: bambusetumPark, // Placeholder - would generate specific image
      category: "Nature" as const,
    },
    {
      id: 9,
      title: "Paayahayan sa Bulod",
      description: "A scenic hilltop destination offering stunning sunset views and local cultural experiences.",
      image: kawakawaHill, // Placeholder - would generate specific image
      category: "Cultural" as const,
    },
    {
      id: 10,
      title: "Hobbit Hill",
      description: "Charming hobbit-themed attraction with unique architecture and beautiful garden landscapes.",
      image: kawakawaHill, // Placeholder - would generate specific image
      category: "Nature" as const,
    },
    {
      id: 11,
      title: "Tigbao Highlands",
      description: "Elevated grasslands with cool climate and panoramic mountain views perfect for picnics.",
      image: mtMasaraga, // Placeholder - would generate specific image
      category: "Nature" as const,
    },
    {
      id: 12,
      title: "Coco Farm Resort",
      description: "A tropical resort surrounded by coconut plantations offering authentic farm-to-table experiences.",
      image: hiddenSpring, // Placeholder - would generate specific image
      category: "Adventure" as const,
    },
    {
      id: 13,
      title: "Ligao City Library",
      description: "Modern public library serving as a center for learning and community engagement.",
      image: stStephenChurch, // Placeholder - would generate specific image
      category: "Educational" as const,
    },
  ];

  return (
    <section id="attractions" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Discover Amazing Attractions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From sacred cultural sites to breathtaking natural wonders, Ligao City offers 
            an incredible variety of experiences for every type of traveler.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractions.map((attraction) => (
            <AttractionCard
              key={attraction.id}
              title={attraction.title}
              description={attraction.description}
              image={attraction.image}
              category={attraction.category}
              featured={attraction.featured}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Ready to explore these incredible destinations?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-light transition-smooth font-semibold">
              Get Directions
            </button>
            <button className="px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-smooth font-semibold">
              Download Guide
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AttractionsSection;