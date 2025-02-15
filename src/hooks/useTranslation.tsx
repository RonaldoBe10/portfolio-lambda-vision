
import { createContext, useContext, useState, ReactNode } from "react";

type Language = "pt" | "en";

type Translations = {
  [key in Language]: {
    [key: string]: string;
  };
};

const translations: Translations = {
  pt: {
    "nav.about": "Sobre",
    "nav.projects": "Projetos",
    "nav.services": "Serviços",
    "nav.contact": "Contato",
    "hero.title": "Transformando Ideias em Resultados",
    "hero.subtitle": "Soluções inovadoras em logística e engenharia de produção",
    "about.title": "Sobre Mim",
    "about.subtitle": "Experiência e Dedicação em Cada Projeto",
    "about.description": "Com mais de uma década de experiência em logística e engenharia de produção, trago soluções inovadoras e eficientes para os desafios mais complexos do setor industrial e logístico.",
    "about.formation.title": "Formação e Experiência",
    "about.formation.description": "Engenheiro de Produção formado, com especialização em Gestão de Projetos e Logística. Experiência em empresas de grande porte e projetos internacionais, sempre buscando a excelência operacional.",
    "about.skills.title": "Habilidades",
    "about.learnMore": "Saiba mais",
    "projects.title": "Projetos",
    "projects.subtitle": "Casos de Sucesso",
    "projects.description": "Conheça alguns dos projetos que desenvolvemos e os resultados alcançados.",
    "blog.title": "Blog",
    "blog.subtitle": "Últimas Publicações",
    "blog.description": "Fique por dentro das últimas novidades e tendências do setor.",
    "contact.title": "Contato",
    "contact.subtitle": "Vamos Conversar",
    "contact.description": "Entre em contato para discutirmos seu projeto ou tirar dúvidas.",
    "footer.rights": "Todos os direitos reservados.",
    "footer.quickLinks": "Links Rápidos",
    "footer.contact": "Contato",
    "footer.solutions": "Soluções inovadoras em logística e engenharia de produção.",
    "blog.readMore": "Ler mais",
    "button.back": "Voltar",
  },
  en: {
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "hero.title": "Transforming Ideas into Results",
    "hero.subtitle": "Innovative solutions in logistics and production engineering",
    "about.title": "About Me",
    "about.subtitle": "Experience and Dedication in Every Project",
    "about.description": "With over a decade of experience in logistics and production engineering, I bring innovative and efficient solutions to the most complex challenges in the industrial and logistics sector.",
    "about.formation.title": "Education and Experience",
    "about.formation.description": "Production Engineer graduate, specialized in Project Management and Logistics. Experience in large companies and international projects, always seeking operational excellence.",
    "about.skills.title": "Skills",
    "about.learnMore": "Learn more",
    "projects.title": "Projects",
    "projects.subtitle": "Success Cases",
    "projects.description": "Learn about some of the projects we've developed and the results achieved.",
    "blog.title": "Blog",
    "blog.subtitle": "Latest Posts",
    "blog.description": "Stay up to date with the latest news and industry trends.",
    "contact.title": "Contact",
    "contact.subtitle": "Let's Talk",
    "contact.description": "Get in touch to discuss your project or clarify any doubts.",
    "footer.rights": "All rights reserved.",
    "footer.quickLinks": "Quick Links",
    "footer.contact": "Contact",
    "footer.solutions": "Innovative solutions in logistics and production engineering.",
    "blog.readMore": "Read more",
    "button.back": "Back",
  },
};

type TranslationContextType = {
  t: (key: string) => string;
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
};

const TranslationContext = createContext<TranslationContextType | undefined>(
  undefined
);

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>("pt");

  const t = (key: string) => {
    return translations[currentLanguage][key] || key;
  };

  return (
    <TranslationContext.Provider
      value={{
        t,
        currentLanguage,
        setLanguage: setCurrentLanguage,
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
};
