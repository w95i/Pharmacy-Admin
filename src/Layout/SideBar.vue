<template>
  <div class="app" @click="closeDropdown">
    <SidebarComponent :isCollapsed="isSidebarCollapsed" />
    <div class="main-content">
      <TopBarComponent
        @toggle-sidebar="toggleSidebar"
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
import { useLanguageStore } from "@/Stores/LanguageStore";

export default {
  components: { SidebarComponent, TopBarComponent },
  data() {
    return {
      isSidebarCollapsed: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarCollapsed = !this.isSidebarCollapsed;
    },
  },
  setup(){
    const languageStore = useLanguageStore();

    const closeDropdown = () => {
      languageStore.closeDropdown();
    }

    return{
      languageStore,
      closeDropdown
    }
  }
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
  background-color: #ffffff;
}
</style>