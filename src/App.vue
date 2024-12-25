<template>
  <SideBar v-if="!loginPage"/>
  <LoginView v-else />
</template>

<script>
import SideBar from './Layout/SideBar.vue';
import LoginView from './views/LoginView.vue';
export default{
components:{
  SideBar,
  LoginView
},
computed: {
  loginPage() {
    return this.$route.path === "/login";
  }
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

.page_container{
  width: 80%;
  margin: 0 auto;
}
</style>
