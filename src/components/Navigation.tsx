
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
        isScrolled ? "glass py-4" : "py-6"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-4">
        <a href="#" className="text-2xl font-bold text-primary">
          LP.
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#about"
            className="text-secondary hover:text-primary transition-colors"
          >
            Sobre
          </a>
          <a
            href="#projects"
            className="text-secondary hover:text-primary transition-colors"
          >
            Projetos
          </a>
          <a
            href="#services"
            className="text-secondary hover:text-primary transition-colors"
          >
            Serviços
          </a>
          <a
            href="#contact"
            className="text-secondary hover:text-primary transition-colors"
          >
            Contato
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
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
          <div className="absolute top-full left-0 right-0 glass p-4 slide-in md:hidden">
            <div className="flex flex-col space-y-4">
              <a
                href="#about"
                className="text-secondary hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </a>
              <a
                href="#projects"
                className="text-secondary hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Projetos
              </a>
              <a
                href="#services"
                className="text-secondary hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </a>
              <a
                href="#contact"
                className="text-secondary hover:text-primary transition-colors"
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
