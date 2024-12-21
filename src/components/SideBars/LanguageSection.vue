<template>
    <div class="languages_container" @click.stop="toggleLanguageDropdown">
      <span class="flag_wrapper">
        <img
          :src="
            languageStore.selectedLanguage === 'en'
              ? languageStore.languages[0].image
              : languageStore.languages[1].image
          "
          alt="flag"
        />
      </span>
  
      <div v-if="languageStore.ShowLanguage" class="language_dropdown">
        <ul>
          <li
            v-for="lang in languageStore.languages"
            :key="lang.short"
            @click="changeLanguage(lang.short)"
          >
            <img :src="lang.image" alt="" /> {{ lang.name }}
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import { useLanguageStore } from "@/Stores/LanguageStore";
  import { useI18n } from "vue-i18n";
  export default {
    setup() {
      const languageStore = useLanguageStore();
      const { t, locale } = useI18n();

      locale.value = languageStore.selectedLanguage;
  
      const toggleLanguageDropdown = () => {
        languageStore.toggleLanguageDropdown();
      };
  
      const changeLanguage = (language) => {
        languageStore.changeLanguage(language, { global: { locale } });
        languageStore.toggleShowNotification = false;
      };
  
      return {
        languageStore,
        toggleLanguageDropdown,
        changeLanguage,
        t,
      };
    },
  };
  </script>
  
  <style scoped>
  .languages_container {
    position: relative;
  }
  
  .flag_wrapper {
    background-color: #dfdfdf;
    border-radius: 50%;
    cursor: pointer;
    min-width: 100%;
    text-align: center;
    flex: none;
    align-items: center;
    display: inline-flex;
    justify-content: center;
    line-height: normal;
    overflow: hidden;
    position: relative;
    text-align: center;
    transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    transition-property: width, height;
    vertical-align: middle;
    padding: 8px;
  }
  
  .flag_wrapper:hover {
    background-color: #cacaca;
  }
  
  .flag_wrapper img {
    width: 22px;
    height: 22px;
    object-fit: cover;
    border-radius: 50%;
  }
  
  .language_dropdown {
    position: absolute;
    top: 40px;
    right: 0;
    background: #fff;
    border: 1px solid #ddd;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    width: 200px;
    z-index: 10;
  }
  
  .language_dropdown ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .language_dropdown li {
    padding: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  
  .language_dropdown li:hover {
    background-color: #f5f5f5;
  }
  
  .language_dropdown img {
    width: 20px;
    height: 20px;
    margin-right: 8px;
    object-fit: cover;
    border-radius: 50%;
  }
  </style>
  