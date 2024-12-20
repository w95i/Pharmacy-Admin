<template>
  <div class="app" @click="closeDropdown">
    <SidebarComponent :isCollapsed="isSidebarCollapsed" />
    <div class="main-content">
      <TopBarComponent 
        @toggle-sidebar="toggleSidebar"
        @toggle-dropdown="toggleDropdown"
        @toggle-notification="toggleNotification"
        @close-dropdown="closeDropdown"
        :showDropdown="showDropdown"
        :showNotification="showNotification"
      />
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import SidebarComponent from "@/components/SideBars/SidebarComponent.vue";
import TopBarComponent from "@/components/SideBars/TopBar.vue";

export default {
  components: { SidebarComponent, TopBarComponent },
  data() {
    return {
      isSidebarCollapsed: false,
      showDropdown: false,
      showNotification: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarCollapsed = !this.isSidebarCollapsed;
    },
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    toggleNotification() {
      this.showNotification = !this.showNotification;
    },
    closeDropdown() {
      if (this.showDropdown) {
        this.showDropdown = false;
      }
      if (this.showNotification) {
        this.showNotification = false;
      }
    },
  },
};
</script>

<style scoped>
.app {
  display: flex;
  height: 100vh;
}
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.content {
  flex: 1;
  padding: 20px;
  background-color: #FFFFFF;
}
</style>