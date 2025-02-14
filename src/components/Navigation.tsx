
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-4 shadow-lg" : "py-6"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-4">
        <a href="#" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
          LP<span className="text-secondary">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#about"
            className="text-secondary hover:text-primary transition-colors relative group"
          >
            Sobre
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#projects"
            className="text-secondary hover:text-primary transition-colors relative group"
          >
            Projetos
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#services"
            className="text-secondary hover:text-primary transition-colors relative group"
          >
            Serviços
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#contact"
            className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
          >
            Contato
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-primary/10 rounded-full transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-secondary" />
          ) : (
            <Menu className="h-6 w-6 text-secondary" />
          )}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 glass p-6 slide-in md:hidden border-t border-white/20">
            <div className="flex flex-col space-y-6">
              <a
                href="#about"
                className="text-secondary hover:text-primary transition-colors flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </a>
              <a
                href="#projects"
                className="text-secondary hover:text-primary transition-colors flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Projetos
              </a>
              <a
                href="#services"
                className="text-secondary hover:text-primary transition-colors flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </a>
              <a
                href="#contact"
                className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
