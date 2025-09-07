import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Attractions", href: "#attractions" },
    { name: "Culture", href: "#culture" },
    { name: "Nature", href: "#nature" },
    { name: "About", href: "#about" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-smooth ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-soft"
          : "glass-effect"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 
              className={`text-2xl font-bold transition-smooth ${
                isScrolled ? "text-primary" : "text-white"
              }`}
            >
              Ligao City
            </h1>
            <span 
              className={`text-sm transition-smooth ${
                isScrolled ? "text-muted-foreground" : "text-white/80"
              }`}
            >
              Nature & Culture
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-smooth hover:scale-105 ${
                  isScrolled
                    ? "text-foreground hover:text-primary"
                    : "text-white hover:text-primary-light"
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-smooth ${
              isScrolled
                ? "text-foreground hover:bg-muted"
                : "text-white hover:bg-white/10"
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 p-4 bg-background/95 backdrop-blur-md rounded-lg shadow-medium">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 text-foreground hover:text-primary transition-smooth border-b border-border last:border-b-0"
              >
                {item.name}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;