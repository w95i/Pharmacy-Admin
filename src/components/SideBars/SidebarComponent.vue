<template>
  <div class="sidebar" :class="{ collapsed: isCollapsed }">
    <!-- Logo -->
    <div class="sidebar-header">
      <h2 v-if="!isCollapsed" class="logo">
        <img src="@/assets/Images/assets-34.png" alt="Logo" height="32" />
      </h2>
      <h2 v-else class="logo">
        <img src="@/assets/Images/assets-36.png" alt="Logo" height="32" />
      </h2>
    </div>

    <!-- Menu Items -->
    <div class="sidebar-menu">
      <div v-for="(menu, index) in menus" :key="index" style="width: 100%">
        <!-- Main Item -->
        <router-link :to="menu.path || '#'" class="menu-link">
          <div
            class="menu-item"
            :class="{ active: activeMenu === menu.label }"
            @click="toggleMenu(menu.label)"
          >
            <div class="menu-item-title">
              <font-awesome-icon :icon="menu.icon" />
              <span
                v-if="!isCollapsed"
                :style="{
                  fontFamily:
                    languageStore.selectedLanguage === 'en'
                      ? 'var(--jakarta-font)'
                      : 'var(--cairo-font)',
                }"
              >
                {{ $t(menu.label) }}
              </span>
            </div>
            <span v-if="menu.submenus && !isCollapsed" class="arrow">
              <font-awesome-icon
                :icon="
                  isExpanded(menu.label)
                    ? ['fas', 'chevron-up']
                    : ['fas', 'chevron-down']
                "
              ></font-awesome-icon>
            </span>
            <span v-if="menu.badge && !isCollapsed" class="badge">{{
              menu.badge
            }}</span>
            <span v-if="menu.textBadge && !isCollapsed" class="text-badge">{{
              menu.textBadge
            }}</span>
          </div>
        </router-link>

        <!-- Submenu -->
        <div
          v-if="menu.submenus && isExpanded(menu.label) && !isCollapsed"
          class="submenu"
        >
          <div
            v-for="(submenu, subIndex) in menu.submenus"
            :key="subIndex"
            class="submenu-item"
            :class="{ active: activeSubmenu === submenu.label }"
            @click.stop="setActiveSubmenu(submenu.label)"
          >
            <router-link
              :to="submenu.path || '#'"
              class="submenu-link"
              :style="{
                fontFamily:
                  languageStore.selectedLanguage === 'en'
                    ? 'var(--jakarta-font)'
                    : 'var(--cairo-font)',
              }"
            >
              {{ $t(submenu.label) }}
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- User Profile -->
    <div class="sidebar-footer" v-if="!isCollapsed">
      <div class="user-card">
        <div class="user-info">
          <img
            src="@/assets/Images/assets-35.png"
            alt="User"
            class="user-avatar"
          />
          <div class="user-details">
            <p class="user-name">Waeel</p>
            <p class="user-role">Developer</p>
          </div>
        </div>
        <i class="logout-icon" @click="Logout"
          ><font-awesome-icon :icon="['fas', 'power-off']"
        /></i>
      </div>
    </div>
  </div>
</template>
  
  <script>
  import { useLanguageStore } from "@/Stores/LanguageStore";
import { useI18n } from "vue-i18n";
export default {
  setup() {
    const { t, locale } = useI18n();

    return {
      t,
      locale,
    };
  },
  name: "SidebarComponent",
  props: {
    isCollapsed: Boolean,
  },
  data() {
    return {
      languageStore: useLanguageStore(),
      activeMenu: null,
      activeSubmenu: null,
      menus: [
        {
          label: "home",
          path: "/",
          icon: ["fas", "house"],
          textBadge: "New",
        },
        {
          label: "pharmacy",
          path: "/pharmacy/pharmacy-list",
          icon: ["fas", "hospital"],
          submenus: [
            { label: "pharmacy-list", path: "/pharmacy/pharmacy-list" },
            { label: "create-pharmacy", path: "/pharmacy/create-group" },
          ],
        },
        { label: "Front Pages", path: "/map", icon: "📄" },
        { label: "Contact", path: "/contact", icon: "📦", badge: "2" },
        {
          label: "Blog",
          icon: "🕒",
          submenus: [
            { label: "posts", path: "/blog/posts" },
            { label: "Detail", path: "/blog/detail" },
          ],
        },
      ],
    };
  },
  methods: {
    toggleMenu(menuLabel) {
      this.activeMenu = this.activeMenu === menuLabel ? null : menuLabel;
      this.activeSubmenu = null;
    },
    isExpanded(menuLabel) {
      return this.activeMenu === menuLabel;
    },
    setActiveSubmenu(submenuLabel) {
      this.activeSubmenu = submenuLabel;
    },
    Logout() {
      localStorage.removeItem("Administration");
      this.$router.push({ name: "login" });
    },
  },
};
</script>
  
  <style scoped>
@import url("https://fonts.googleapis.com/css2?family=Signika+Negative:wght@300..700&display=swap");
.sidebar {
  width: 265px;
  background: #f9f9f9;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  height: 100vh;
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease;
  z-index: 1;
  font-family: "Signika Negative", serif;
  font-weight: 600;
}

.sidebar.collapsed {
  width: 70px;
}

.sidebar-header {
  padding: 20px;
  text-align: center;
  font-size: 1.2em;
  font-weight: bold;
  transition: all 0.3s ease;
}

.logo {
  white-space: nowrap;
  overflow: hidden;
}

.sidebar-menu {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex: 1;
  overflow-y: auto;
  padding: 10px;
}

.menu-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 8px 12px;
  color: #555;
  cursor: pointer;
  border-radius: 5px;
  margin-bottom: 5px;
  transition: all 0.3s ease;
}

.menu-item-title {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
}

.menu-item:hover {
  color: var(--primary-color);
}
.menu-item.active {
  background-color: var(--primary-color);
  color: #fff;
}

.menu-link {
  color: inherit;
  text-decoration: none;
}

.arrow {
  font-size: 12px;
}

.badge {
  background-color: #007bff;
  color: white;
  font-size: 12px;
  border-radius: 50%;
  padding: 2px 6px;
}

.text-badge {
  background-color: #007bff;
  color: white;
  font-size: 12px;
  border-radius: 15px;
  padding: 2px 6px;
}

.submenu {
  padding-left: 20px;
}

.submenu-item {
  cursor: pointer;
  border-radius: 3px;
}

.submenu-link {
  color: #555;
  text-decoration: none;
  display: block;
  width: 100%;
  height: 100%;
  padding: 6px 10px;
  margin-bottom: 2px;
}

.submenu-item:hover,
.submenu-item.active {
  background-color: #e0e0e0;
  color: #333;
}

.sidebar-footer {
  padding: 15px;
  border-top: 1px solid #ddd;
}

.user-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.user-name {
  font-weight: bold;
}

.user-role {
  font-size: 12px;
  color: #666;
}

.logout-icon {
  font-size: 20px;
  cursor: pointer;
}
.logout-icon:hover svg {
  color: red;
}

@media (max-width: 768px) {
  .sidebar.collapsed {
    width: 40px;
  }

  .sidebar-header {
    padding: 20px 5px;
  }

  .menu-item {
    padding: 12px 5px;
  }

  .sidebar-menu {
    padding: 10px 5px;
  }
}
</style>
  