<template>
  <div class="topbar" @click="closeDropdown">
    <button class="toggle-btn" @click.stop="toggleSidebar">☰</button>
    <h2>{{ currentPage }}</h2>
    <div class="topbar-icons">
      <span>🌙</span>
      <span>🔔</span>
      <div class="profile-container" @click.stop="toggleDropdown">
        <img
          src="@/assets/Images/assets-35.png"
          alt="Profile"
          height="36"
          style="border-radius: 50%; cursor: pointer"
        />
        <div v-if="toggleShowDropdown" class="profile-dropdown">
          <div class="profile_information">
            <p>User Profile</p>
            <div class="profile_content">
              <img
                src="@/assets/Images/assets-35.png"
                width="80"
                alt="Profile Image"
              />
              <div class="information_titles">
                <p class="profile_name">Waeel Mohammed</p>
                <p class="job_title">Developer</p>
                <p class="email">
                  <font-awesome-icon :icon="['fas', 'envelope']" />
                  waeel.moh97@gmail.com
                </p>
              </div>
            </div>
          </div>
          <ul>
            <li @click="navigateTo('profile')">Show Profile</li>
            <li @click="navigateTo('settings')">Settings</li>
            <li @click="logout">Logout</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["toggle-sidebar", "toggle-dropdown", "close-dropdown"],
  props: {
    showDropdown: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      toggleShowDropdown: this.showDropdown,
    };
  },
  watch: {
    showDropdown(newValue) {
      this.toggleShowDropdown = newValue;
    },
  },
  methods: {
    toggleSidebar() {
      this.$emit("toggle-sidebar");
    },
    toggleDropdown() {
      this.toggleShowDropdown = !this.toggleShowDropdown;
      this.$emit("toggle-dropdown", this.toggleShowDropdown);
    },
    closeDropdown() {
      if (this.toggleShowDropdown) {
        this.toggleShowDropdown = false;
        this.$emit("close-dropdown");
      }
    },
    navigateTo(page) {
      this.$router.push({ name: page });
    },
    logout() {
      alert("Logged out");
    },
  },
  computed: {
    currentPage() {
      return this.$route.name || "Home";
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap");
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
.topbar-icons {
  display: flex;
  align-items: center;
}
.topbar-icons span {
  margin-left: 15px;
  position: relative;
}
.profile-container {
  position: relative;
}
.profile-dropdown {
  position: absolute;
  top: 50px;
  right: 0;
  background: #fff;
  border: 1px solid #ddd;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 360px;
  z-index: 10;
}
.profile_information {
  padding: 24px 32px 0;
}
.profile_information p {
  font-size: 18px;
  font-weight: 600;
  font-family: "Plus Jakarta Sans", sans-serif;
}
.information_titles .profile_name {
  font-size: 16px;
  color: rgba(0, 0, 0, 0.87);
  font-weight: 600;
  line-height: 19px;
  font-family: "Plus Jakarta Sans", sans-serif;
}
.information_titles .job_title,
.information_titles .email {
  font-size: 14px;
  color: rgb(42, 53, 71);
  font-weight: 400;
  line-height: 18px;
}
.information_titles .email{
  margin-top: 5px;
}
.profile_information .profile_content {
  margin-top: 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
}
.profile_information .profile_content img {
  width: 80px;
  border-radius: 50%;
}
.profile-dropdown ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.profile-dropdown li {
  padding: 10px 15px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}
.profile-dropdown li:hover {
  color: #054ff0;
}
</style>
