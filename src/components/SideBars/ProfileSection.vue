<template>
  <div class="profile-container" @click.stop="toggleDropdown">
    <img
      src="@/assets/Images/assets-35.png"
      alt="Profile"
      height="38"
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
        <hr
          style="
            border-color: rgba(229, 234, 239, 1);
            opacity: 1;
            border-style: solid;
            border-width: thin 0 0 0;
            height: 0px;
          "
        />
      </div>
      <div class="profile_items">
        <ul>
          <li @click="navigateTo('about')">
            <div class="item_container">
              <div class="icon_bg">
                <font-awesome-icon :icon="['fas', 'user']" />
              </div>
              <div class="item_links">
                <p class="clicked_link">My Profile</p>
                <p class="item_description">Profile Settings</p>
              </div>
            </div>
          </li>
          <li @click="navigateTo('settings')">
            <div class="item_container">
              <div class="icon_bg">
                <font-awesome-icon :icon="['fas', 'gears']" />
              </div>
              <div class="item_links">
                <p class="clicked_link">My Settings</p>
                <p class="item_description">Account Settings</p>
              </div>
            </div>
          </li>
          <li>
            <div class="btn">
              <p class="btn_text" @click="logout">Logout</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["toggle-dropdown", "logout"],
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
    toggleDropdown() {
      this.toggleShowDropdown = !this.toggleShowDropdown;
      this.$emit("toggle-dropdown", this.toggleShowDropdown);
    },
    navigateTo(page) {
      this.$router.push({ name: page });
    },
    logout() {
      alert("Logged out");
    },
  },
};
</script>

<style scoped>
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
.information_titles .email {
  margin-top: 5px;
}
.profile_information .profile_content {
  margin-top: 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding-bottom: 24px;
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
  cursor: pointer;
  transition: background-color 0.2s ease;
}
.profile-dropdown li:hover .clicked_link {
  color: #054ff0;
}

.item_container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding: 16px 32px;
}

.item_container .icon_bg {
  flex: none;
  align-items: center;
  display: inline-flex;
  justify-content: center;
  line-height: normal;
  overflow: hidden;
  position: relative;
  text-align: center;
  transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transition-property: width, height;
  vertical-align: middle;
  width: 48px;
  height: 48px;
  background-color: #ecf2ff;
  border-radius: 7px;
  margin-inline-end: 12px;
}

.icon_bg svg {
  font-size: 1.5rem;
  color: var(--icon-color);
}

.item_container .item_links {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  font-family: "Plus Jakarta Sans", sans-serif;
}

.item_links p {
  font-size: 0.875rem !important;
  line-height: 1.1rem;
  letter-spacing: 0.009375em !important;
  font-family: inherit;
  text-transform: none !important;
}

.item_links .clicked_link {
  font-weight: 700 !important;
}
.item_links .item_description {
  font-weight: 400;
}

.btn {
  padding: 16px 32px;
}

.btn_text {
  background-color: transparent;
  border: 1px solid var(--primary-color);
  border-radius: 8px;
  min-width: 100%;
  height: 36px;
  text-align: center;
  flex: none;
  align-items: center;
  display: inline-flex;
  justify-content: center;
  line-height: normal;
  overflow: hidden;
  position: relative;
  text-align: center;
  transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transition-property: width, height;
  vertical-align: middle;
  font-family: var(--jakarta-font);
  font-size: 14px;
  font-weight: 500;
}

.btn_text:hover {
  background-color: #f7f7f7;
  color: var(--primary-color);
}
</style>