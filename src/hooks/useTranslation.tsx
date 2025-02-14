
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
    // Add more translations as needed
  },
  en: {
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "hero.title": "Transforming Ideas into Results",
    "hero.subtitle": "Innovative solutions in logistics and production engineering",
    // Add more translations as needed
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
