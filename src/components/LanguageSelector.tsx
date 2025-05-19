
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Language, languageNames } from "@/utils/translations";
import { ChevronDown } from "lucide-react";

export const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  
  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    setIsOpen(false);
  };

  const getFlag = (lang: string) => {
    switch (lang) {
      case 'en':
        return "🇺🇸"; // US flag for English
      case 'es':
        return "🇪🇸"; // Spain flag for Spanish
      case 'fr':
        return "🇫🇷"; // France flag for French
      case 'gl':
        return "🇪🇸"; // Spanish flag for Galician temporarily
      default:
        return "";
    }
  };

  return (
    <div className="language-selector">
      <button
        className="language-selector-btn"
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="mr-2">{getFlag(language)}</span>
        {languageNames[language]}
        <ChevronDown size={16} />
      </button>
      
      {isOpen && (
        <div className="language-dropdown">
          {Object.entries(languageNames).map(([code, name]) => (
            <button
              key={code}
              className="language-option flex items-center w-full"
              onClick={() => handleLanguageChange(code as Language)}
            >
              <span className="mr-2">{getFlag(code)}</span>
              {name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
