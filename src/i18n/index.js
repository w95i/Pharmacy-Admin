// i18n/index.js
import { createI18n } from "vue-i18n";
import en from "./Locales/en.json";
import ar from "./Locales/ar.json";

const defaultLanguage = localStorage.getItem("language") || "en";


const i18n = createI18n({
  locale: defaultLanguage,
  fallbackLocale: "en",
  messages: {
    en,
    ar,
  },
});

export default i18n;
