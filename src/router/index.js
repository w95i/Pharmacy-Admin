import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

// Mock function to check for token; replace with your actual token-check logic
function isAuthenticated() {
  return !!localStorage.getItem("AdminToken"); // Example: Check token in localStorage
}

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Global navigation guard
router.beforeEach((to, from, next) => {
  // Public routes that do not require authentication
  const publicRoutes = ["/login"];
  
  // Check if the route is public or if the user is authenticated
  if (publicRoutes.includes(to.path) || isAuthenticated()) {
    next(); // Allow navigation
  } else {
    next("/login"); // Redirect to login page
  }
});

export default router;
