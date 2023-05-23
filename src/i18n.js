import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "credits": "credits",
      "projectList": "project list",
      "purchase": "purchase",
      "purchased": "purchased",
    }
  },
  pt: {
    translation: {
      "credits": "créditos",
      "projectList": "projetos",
      "purchase": "comprar",
      "purchased": "comprado",
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;
