<template>
  <SideBar />
</template>

<script>
import SideBar from './Layout/SideBar.vue';
export default{
components:{
  SideBar,
}
}
</script>

<style>
@import "@/assets/Css/CssRoot.css";
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  width: 100%;
}
</style>
