<template>
  <div class="topbar" @click="closeDropdown">
    <button class="toggle-btn" @click.stop="toggleSidebar">☰</button>
    <h2>{{ $t(currentPage) }}</h2>
    <div class="topbar-icons">
      <LanguageSection />
      <NotificationSection />
      <ProfileSection />
    </div>
  </div>
</template>

<script>
import ProfileSection from './ProfileSection.vue';
import NotificationSection from './NotificationSection.vue';
import LanguageSection from './LanguageSection.vue';
export default {
  emits: ["toggle-sidebar"],
  components: {
    ProfileSection,
    NotificationSection,
    LanguageSection
  },
  methods: {
    toggleSidebar() {
      this.$emit("toggle-sidebar");
    },
  },
  computed: {
    currentPage() {
      return this.$route.name || "Home";
    },
  },
};
</script>

<style scoped>
.topbar {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 0 20px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}
.toggle-btn {
  font-size: 1.2em;
  background: none;
  border: none;
  cursor: pointer;
}
.topbar-icons {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 0 15px;
}
.topbar-icons span {
  position: relative;
}
</style>
