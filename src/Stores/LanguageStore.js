// stores/languageStore.js
import { defineStore } from "pinia";

export const useLanguageStore = defineStore("language", {
  state: () => ({
    selectedLanguage: localStorage.getItem("language") || "en",
    ShowLanguage: false,
    showDropdown: false,
    showNotification: false,
    languages: [
      {
        short: "en",
        name: "English",
        image:
          "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
      },
      {
        short: "ar",
        name: "عربي",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/f/f6/Flag_of_Iraq.svg",
      },
    ],
  }),
  actions: {
    toggleLanguageDropdown() {
      if (!this.ShowLanguage) {
        this.showDropdown = false;
        this.showNotification = false;
      }
      this.ShowLanguage = !this.ShowLanguage;
    },
    changeLanguage(language, i18n) {
      this.selectedLanguage = language;
      i18n.global.locale.value = language;
      document.documentElement.lang = language;
      localStorage.setItem("language", language); // Save the language to localStorage
    },
    toggleDropdown() {
      if (!this.showDropdown) {
        this.showNotification = false;
        this.ShowLanguage = false;
      }
      this.showDropdown = !this.showDropdown;
    },
    toggleNotification() {
      if (!this.showNotification) {
        this.showDropdown = false;
        this.ShowLanguage = false;
      }
      this.showNotification = !this.showNotification;
    },
    closeDropdown() {
      if (this.showDropdown) {
        this.showDropdown = false;
      }
      if (this.showNotification) {
        this.showNotification = false;
      }
      if (this.ShowLanguage) {
        this.ShowLanguage = false;
      }
    },
  },
});
