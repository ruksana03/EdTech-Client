import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


const resources = {
    en: {
      translation: {
        // English translations here
      },
    },
    // Add translations for other languages as needed
  };
  
  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources,
      lng: 'en', // default language
      fallbackLng: 'en', // fallback language
      interpolation: {
        escapeValue: false, // react already safes from xss
      },
    });
  
  export default i18n;