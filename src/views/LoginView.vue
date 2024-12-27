<template>
  <div class="login-container">
    <div class="login-card">
      <div class="logo">
        <img src="@/assets/Images/assets-34.png" alt="Cure+ Logo" />
      </div>

      <form @submit.prevent="onSubmit" class="login-form">
        <div class="input-group">
          <label for="username">Username</label>
          <input
            type="text"
            id="username"
            v-model="email"
            placeholder="info@wrappixel.com"
            required
          />
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="********"
            required
          />
        </div>
        <button type="submit" class="btn sign-in" :disabled="loading">
          {{ loading ? "Signing In..." : "Sign In" }}
        </button>
        <p v-if="error" class="error">{{ error }}</p>
      </form>
    </div>
  </div>
</template>

<script>
import { useUserStore } from "@/Stores/UserStore";
export default {
  name: "LoginPage",
  data() {
    return {
      userStore: useUserStore(),
      loading: false,
      error: null,
      email: "",
      password: "",
    };
  },
  watch: {
    "userStore.success"(newVal) {
      if (newVal) {
        this.$router.push("/");
      }
    },
  },
  methods: {
    async onSubmit() {
      this.loading = true;
      this.error = null;
      try {
        await this.userStore.fetchLogin(this.email, this.password);
        if (!this.userStore.success) {
          this.error = "Invalid username or password.";
        }
      } catch (err) {
        this.error = "An error occurred. Please try again.";
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f5faff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.login-card {
  background: #ffffff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.267);
  width: 400px;
  text-align: center;
}

.logo img {
  width: 150px;
  margin-bottom: 40px;
}

.input-group {
  margin-bottom: 15px;
  text-align: left;
  font-family: var(--jakarta-font);
}

.input-group label {
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
}

.input-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px;
  font-family: var(--jakarta-font);
}

.btn {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;
}

.sign-in {
  background-color: var(--primary-color);
  color: #ffffff;
}

.sign-in:hover {
  background-color: #3367d6;
}

.sign-in:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.error {
  color: red;
  font-size: 14px;
  margin-top: 10px;
}
</style>
