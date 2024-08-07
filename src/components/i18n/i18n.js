import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: require('./en.json')
  },
  ka: {
    translation: require('./ka.json')
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ka",
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;