import React from "react";
import { useTranslation } from "react-i18next";
import Flag from "react-world-flags";
import "./LanguageSwitcher.css";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang); 
    }
  };

  return (
    <div className="language-switcher fixed top-0 left-0 right-0 z-10 shadow-md">
      <div className="flex justify-center space-x-4 py-4">
        <button onClick={() => changeLanguage("en")} aria-label="Switch to English">
          <Flag code="GB" className="w-8 h-8"  alt="Great Britain Flag" /> 
        </button>
        <button onClick={() => changeLanguage("de")} aria-label="Switch to German">
          <Flag code="DE" className="w-8 h-8" alt="Flag German"  /> 
        </button>
        <button onClick={() => changeLanguage("fr")}  aria-label="Switch to French">
          <Flag code="FR" className="w-8 h-8"  alt="French Flag"  /> 
        </button>

      </div>
    </div>
  );
};

export default LanguageSwitcher;
