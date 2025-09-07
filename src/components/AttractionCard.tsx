import { MapPin } from "lucide-react";

interface AttractionCardProps {
  title: string;
  description: string;
  image: string;
  category: "Cultural" | "Nature" | "Adventure" | "Educational";
  featured?: boolean;
}

const AttractionCard = ({ 
  title, 
  description, 
  image, 
  category, 
  featured = false 
}: AttractionCardProps) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Cultural":
        return "bg-accent text-accent-foreground";
      case "Nature":
        return "bg-nature text-nature-foreground";
      case "Adventure":
        return "bg-secondary text-secondary-foreground";
      case "Educational":
        return "bg-primary text-primary-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div 
      className={`attraction-card group cursor-pointer ${
        featured ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className={`w-full object-cover transition-smooth group-hover:scale-110 ${
            featured ? "h-80 md:h-96" : "h-48"
          }`}
        />
        <div className="absolute inset-0 gradient-overlay opacity-40 group-hover:opacity-60 transition-smooth" />
        
        {/* Category Badge */}
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(category)}`}>
          {category}
        </div>

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className={`font-bold mb-2 group-hover:text-primary-light transition-smooth ${
            featured ? "text-2xl md:text-3xl" : "text-xl"
          }`}>
            {title}
          </h3>
          <p className={`text-white/90 mb-3 ${
            featured ? "text-base" : "text-sm"
          }`}>
            {description}
          </p>
          <div className="flex items-center text-white/80 text-sm">
            <MapPin size={16} className="mr-1" />
            <span>Ligao City, Albay</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttractionCard;