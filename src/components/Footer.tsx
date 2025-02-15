
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-secondary py-12 text-white/90">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center">
            <h4 className="text-lg font-semibold mb-4">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-white/70 hover:text-primary transition-colors">
                  {t("nav.about")}
                </a>
              </li>
              <li>
                <a href="#projects" className="text-white/70 hover:text-primary transition-colors">
                  {t("nav.projects")}
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-primary transition-colors">
                  {t("nav.services")}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-primary transition-colors">
                  {t("nav.contact")}
                </a>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">
              LP<span className="text-white">.</span>
            </h3>
            <p className="text-white/70 mb-6">
              {t("footer.solutions")}
            </p>
            <div className="flex justify-center items-center space-x-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-primary transition-colors transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-7 h-7" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-primary transition-colors transform hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-7 h-7" />
              </a>
            </div>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <h4 className="text-lg font-semibold mb-4">
              {t("footer.contact")}
            </h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:contato@lp.com"
                  className="text-white/70 hover:text-primary transition-colors inline-flex items-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  contato@lp.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+551199999999"
                  className="text-white/70 hover:text-primary transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  (11) 99999-9999
                </a>
              </li>
              <li>
                <a 
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-primary transition-colors inline-flex items-center gap-2"
                >
                  <MapPin className="w-5 h-5" />
                  São Paulo, SP
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-white/50">
          <p>© {new Date().getFullYear()} LP. {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
