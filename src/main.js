import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import AdminDashboard from "./Plugins/AdminDashboard";

createApp(App)
.use(router)
.use(AdminDashboard)
.mount("#app");
