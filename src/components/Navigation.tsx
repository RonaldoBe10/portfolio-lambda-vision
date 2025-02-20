
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();

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
          LP<span className="text-secondary dark:text-white">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#about"
            className="relative text-secondary dark:text-white hover:text-primary transition-colors after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
          >
            {t("nav.about")}
          </a>
          <a
            href="#projects"
            className="relative text-secondary dark:text-white hover:text-primary transition-colors after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
          >
            {t("nav.projects")}
          </a>
          <a
            href="#services"
            className="relative text-secondary dark:text-white hover:text-primary transition-colors after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
          >
            {t("nav.services")}
          </a>
          <a
            href="#contact"
            className="relative text-secondary dark:text-white hover:text-primary transition-colors after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
          >
            {t("nav.contact")}
          </a>
          <ThemeToggle />
          <LanguageToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <LanguageToggle />
          <button
            className="p-2 hover:bg-primary/10 rounded-full transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-secondary dark:text-white" />
            ) : (
              <Menu className="h-6 w-6 text-secondary dark:text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 glass p-6 slide-in md:hidden border-t border-white/20">
            <div className="flex flex-col space-y-6">
              <a
                href="#about"
                className="text-secondary dark:text-white hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.about")}
              </a>
              <a
                href="#projects"
                className="text-secondary dark:text-white hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.projects")}
              </a>
              <a
                href="#services"
                className="text-secondary dark:text-white hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.services")}
              </a>
              <a
                href="#contact"
                className="text-secondary dark:text-white hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.contact")}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
