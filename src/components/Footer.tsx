import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Ligao City</h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Discover the perfect blend of nature and culture in the heart of Albay Province. 
              Your gateway to authentic Filipino experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Home</a></li>
              <li><a href="#attractions" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Attractions</a></li>
              <li><a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">About</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Travel Guide</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Events</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Explore By Category</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Cultural Sites</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Nature Parks</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Adventure Sports</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Educational</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Accommodations</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary-foreground/80 mt-1" />
                <div>
                  <p className="text-primary-foreground/80">
                    Ligao City, Albay Province<br />
                    Bicol Region, Philippines
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-primary-foreground/80" />
                <p className="text-primary-foreground/80">+63 (0) 52 xxx-xxxx</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-primary-foreground/80" />
                <p className="text-primary-foreground/80">tourism@ligaocity.gov.ph</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/80 text-sm mb-4 md:mb-0">
              © 2024 Ligao City Tourism. Discover the beauty of nature and culture.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;