
import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";

const LanguageToggle = () => {
  const { currentLanguage, setLanguage } = useTranslation();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLanguage("pt")}
        className={`px-2 py-1 rounded ${
          currentLanguage === "pt"
            ? "bg-primary text-white"
            : "text-secondary hover:bg-primary/10"
        } transition-colors`}
      >
        PT
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`px-2 py-1 rounded ${
          currentLanguage === "en"
            ? "bg-primary text-white"
            : "text-secondary hover:bg-primary/10"
        } transition-colors`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageToggle;
