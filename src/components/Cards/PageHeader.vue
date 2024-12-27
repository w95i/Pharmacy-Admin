<template>
  <div class="card_container">
    <div class="card_titles">
      <h1
        :style="{
          fontFamily:
            languageStore.selectedLanguage === 'en'
              ? 'var(--jakarta-font)'
              : 'var(--cairo-font)',
        }"
      >
        {{ title }}
      </h1>
      <p
        :style="{
          fontFamily:
            languageStore.selectedLanguage === 'en'
              ? 'var(--jakarta-font)'
              : 'var(--cairo-font)',
        }"
      >
        {{ path }}
      </p>
    </div>
    <img src="@/assets/Images/Logo-36-300.png" alt="logo" />
  </div>
</template>

<script>
import { useLanguageStore } from "@/Stores/LanguageStore";
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      languageStore: useLanguageStore(),
    };
  },
};
</script>

<style scoped>
.card_container {
  background-color: var(--light-bg-color);
  padding: 20px 35px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
}

.card_container .card_titles {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.card_titles h1 {
  font-size: 32px;
  font-weight: 600;
  font-family: var(--jakarta-font);
}

.card_titles p {
  font-size: 18px;
  font-weight: 500;
  font-family: var(--cairo-font);
  color: #979797;
}

.card_container img {
  width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: 50%;
  position: absolute;
  top: 65%;
  right: -10px;
  transform: translateY(-50%);
  filter: drop-shadow(1px -2px 3px #00000080);
}
</style>