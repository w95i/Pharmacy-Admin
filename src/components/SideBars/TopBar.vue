<template>
  <div class="topbar">
    <button class="toggle-btn" @click="toggleSidebar">☰</button>
    <h2>{{ currentPage }}</h2>
    <div class="topbar-icons">
      <span>🔍</span>
      <span>🔔</span>
      <span>🌙</span>
    </div>
  </div>
</template>
  
  <script>
export default {
  emits: ["toggle-sidebar"],
  methods: {
    toggleSidebar() {
      this.$emit("toggle-sidebar");
    },
  },
  computed: {
    currentPage() {
      return this.$route.name;
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
.topbar-icons span {
  margin-left: 15px;
  cursor: pointer;
}
</style>
  