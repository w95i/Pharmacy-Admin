<template>
    <div class="sidebar" :class="{ collapsed: isCollapsed }">
      <!-- Logo -->
      <div class="sidebar-header">
        <h2 v-if="!isCollapsed" class="logo">Modernize</h2>
        <h2 v-else class="logo">M</h2>
      </div>
  
      <!-- Menu Items -->
      <div class="sidebar-menu">
        <div v-for="(menu, index) in menus" :key="index">
          <!-- Main Item -->
          <div
            class="menu-item"
            :class="{ active: activeMenu === menu.label }"
            @click="toggleMenu(menu.label)"
          >
            <i :class="menu.icon"></i>
            <span v-if="!isCollapsed">
              <router-link :to="menu.path || '#'" class="menu-link">
                {{ menu.label }}
              </router-link>
            </span>
            <span v-if="menu.submenus && !isCollapsed" class="arrow">
              {{ isExpanded(menu.label) ? '▼' : '▶' }}
            </span>
            <span v-if="menu.badge && !isCollapsed" class="badge">{{ menu.badge }}</span>
          </div>
  
          <!-- Submenu -->
          <div v-if="menu.submenus && isExpanded(menu.label) && !isCollapsed" class="submenu">
            <div
              v-for="(submenu, subIndex) in menu.submenus"
              :key="subIndex"
              class="submenu-item"
              :class="{ active: activeSubmenu === submenu.label }"
              @click.stop="setActiveSubmenu(submenu.label)"
            >
              <router-link :to="submenu.path || '#'" class="submenu-link">
                {{ submenu.label }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
  
      <!-- User Profile -->
      <div class="sidebar-footer" v-if="!isCollapsed">
        <div class="user-card">
          <img src="https://via.placeholder.com/40" alt="User" class="user-avatar" />
          <div class="user-details">
            <p class="user-name">Mathew</p>
            <p class="user-role">Designer</p>
          </div>
          <i class="logout-icon">⏻</i>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "SidebarComponent",
    props: {
      isCollapsed: Boolean, // Controlled by parent component
    },
    data() {
      return {
        activeMenu: null,
        activeSubmenu: null,
        menus: [
          { label: "Modern", path: "/", icon: "🌐", badge: "New" },
          { label: "eCommerce", path: "/dashboard", icon: "🛒" },
          { label: "Front Pages", path: "/front-pages", icon: "📄" },
          { label: "Contact", path: "/contact", icon: "📦", badge: "2" },
          {
            label: "Blog",
            icon: "🕒",
            submenus: [
              { label: "Posts", path: "/blog/posts" },
              { label: "Detail", path: "/blog/detail" },
            ],
          },
          { label: "Notes", path: "/notes", icon: "📝" },
          { label: "Calendar", path: "/calendar", icon: "📅" },
          { label: "Email", path: "/email", icon: "📧" },
        ],
      };
    },
    methods: {
      toggleMenu(menuLabel) {
        this.activeMenu = this.activeMenu === menuLabel ? null : menuLabel;
        this.activeSubmenu = null; // Reset submenu selection
      },
      isExpanded(menuLabel) {
        return this.activeMenu === menuLabel;
      },
      setActiveSubmenu(submenuLabel) {
        this.activeSubmenu = submenuLabel;
      },
    },
  };
  </script>
  
  <style scoped>
  .sidebar {
    width: 240px;
    background: #f9f9f9;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
    height: 100vh;
    display: flex;
    flex-direction: column;
    font-family: Arial, sans-serif;
    transition: width 0.3s ease;
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
    flex: 1;
    overflow-y: auto;
    padding: 10px;
  }
  
  .menu-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    color: #555;
    cursor: pointer;
    border-radius: 5px;
    margin-bottom: 5px;
    transition: all 0.3s ease;
  }
  
  .menu-item:hover,
  .menu-item.active {
    background-color: #007bff;
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
  
  .submenu {
    padding-left: 20px;
  }
  
  .submenu-item {
    padding: 8px 10px;
    cursor: pointer;
    border-radius: 3px;
  }
  
  .submenu-link {
    color: #555;
    text-decoration: none;
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
  </style>
  