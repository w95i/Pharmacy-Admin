import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";
import AdminDashboard from "./Plugins/AdminDashboard";
import VueGoogleMaps from "@fawmi/vue-google-maps";





createApp(App)
.use(createPinia())
.use(router)
.use(i18n)
.use(AdminDashboard)
.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyAgsoJHE4i_F6eiN4tuKLmKWkhmzQlgnOs',
    },
  })
.mount("#app");
