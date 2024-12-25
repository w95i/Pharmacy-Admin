<template>
    <div class="login-container">
      <div class="login-card">
        <div class="logo">
          <img src="@/assets/Images/assets-34.png" alt="Cure+ Logo"/>
        </div>
  
        <form @submit.prevent="onSubmit" class="login-form">
          <div class="input-group">
            <label for="username">Username</label>
            <input
              type="text"
              id="username"
              v-model="username"
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
          <button type="submit" class="btn sign-in">Sign In</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "LoginPage",
    data() {
      return {
        username: "",
        password: "",
      };
    },
    methods: {
      onSubmit() {
        // Add your login logic here
        console.log("Username:", this.username);
        console.log("Password:", this.password);
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
  </style>
  