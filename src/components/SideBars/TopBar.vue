<template>
  <div class="topbar" @click="closeDropdown">
    <button class="toggle-btn" @click.stop="toggleSidebar">☰</button>
    <h2>{{ currentPage }}</h2>
    <div class="topbar-icons">
      <span>🌙</span>
      <NotificationSection :showNotification="toggleShowNotification" @toggle-notification="toggleNotification" />
      <ProfileSection :showDropdown="toggleShowDropdown" @toggle-dropdown="toggleDropdown"/>
    </div>
  </div>
</template>

<script>
import ProfileSection from './ProfileSection.vue';
import NotificationSection from './NotificationSection.vue';
export default {
  emits: ["toggle-sidebar", "toggle-dropdown", "toggle-notification" , "close-dropdown"],
  props: {
    showDropdown: {
      type: Boolean,
      default: false,
    },
    showNotification:{
      type: Boolean,
      default: false,
    }
  },
  components: {
    ProfileSection,
    NotificationSection
  },
  data() {
    return {
      toggleShowDropdown: this.showDropdown,
      toggleShowNotification: this.showNotification,
    };
  },
  watch: {
    showDropdown(newValue) {
      this.toggleShowDropdown = newValue;
    },
    showNotification(newValue) {
      this.toggleShowNotification = newValue;
    },
  },
  methods: {
    toggleSidebar() {
      this.$emit("toggle-sidebar");
    },
    toggleDropdown() {
      this.toggleShowDropdown = !this.toggleShowDropdown;
      this.$emit("toggle-dropdown", this.toggleShowDropdown);
    },
    toggleNotification() {
      this.toggleShowNotification = !this.toggleShowNotification;
      this.$emit("toggle-notification", this.toggleShowNotification);
    },
    closeDropdown() {
      if (this.toggleShowDropdown) {
        this.toggleShowDropdown = false;
        this.$emit("close-dropdown");
      }
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
  gap: 25px;
  padding: 0 15px;
}
.topbar-icons span {
  position: relative;
}
</style>
