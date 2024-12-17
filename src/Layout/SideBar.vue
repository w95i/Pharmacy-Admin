<template>
    <div class="sidebar">
      <!-- Logo -->
      <div class="sidebar-header">
        <h2 class="logo">Modernize</h2>
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
            <span>{{ menu.label }}</span>
            <span v-if="menu.submenus" class="arrow">{{ isExpanded(menu.label) ? '▼' : '▶' }}</span>
            <span v-if="menu.badge" class="badge">{{ menu.badge }}</span>
          </div>
  
          <!-- Submenu -->
          <div
            v-if="menu.submenus && isExpanded(menu.label)"
            class="submenu"
          >
            <div
              v-for="(submenu, subIndex) in menu.submenus"
              :key="subIndex"
              class="submenu-item"
              :class="{ active: activeSubmenu === submenu.label }"
              @click.stop="setActiveSubmenu(submenu.label)"
            >
              {{ submenu.label }}
            </div>
          </div>
        </div>
      </div>
  
      <!-- User Profile -->
      <div class="sidebar-footer">
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
    data() {
      return {
        activeMenu: null,
        activeSubmenu: null,
        menus: [
          { label: "Modern", icon: "🌐", badge: "New" },
          { label: "eCommerce", icon: "🛒" },
          { label: "Front Pages", icon: "📄" },
          { label: "Contact", icon: "📦", badge: "2" },
          {
            label: "Blog",
            icon: "🕒",
            submenus: [
              { label: "Posts" },
              { label: "Detail" },
            ],
          },
          {
            label: "E-Commerce",
            icon: "🏬",
            submenus: [
              { label: "Products" },
              { label: "Orders" },
            ],
          },
          { label: "Chats", icon: "💬" },
          {
            label: "Users Profile",
            icon: "👤",
            submenus: [
              { label: "Settings" },
              { label: "Activity" },
            ],
          },
          { label: "Invoice", icon: "📑" },
          { label: "Notes", icon: "📝" },
          { label: "Calendar", icon: "📅" },
          { label: "Email", icon: "📧" },
        ],
      };
    },
    methods: {
      toggleMenu(menuLabel) {
        this.activeMenu = this.activeMenu === menuLabel ? null : menuLabel;
        this.activeSubmenu = null; // Reset submenu when toggling
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
  }
  
  .sidebar-header {
    padding: 20px;
    text-align: center;
    font-size: 1.2em;
    font-weight: bold;
  }
  
  .sidebar-menu {
    flex: 1;
    overflow-y: auto;
    padding: 10px;
  }
  
  .menu-item {
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #555;
    cursor: pointer;
    border-radius: 5px;
    margin-bottom: 5px;
  }
  
  .menu-item:hover,
  .menu-item.active {
    background-color: #007bff;
    color: #fff;
  }
  
  .menu-item .badge {
    background-color: #007bff;
    color: #fff;
    border-radius: 50%;
    font-size: 12px;
    padding: 2px 6px;
  }
  
  .arrow {
    font-size: 12px;
  }
  
  .submenu {
    padding-left: 20px;
  }
  
  .submenu-item {
    padding: 8px 10px;
    color: #666;
    cursor: pointer;
    border-radius: 3px;
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
  
  .user-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  
  .user-details {
    flex: 1;
    margin-left: 10px;
  }
  
  .user-name {
    font-weight: bold;
    margin: 0;
  }
  
  .user-role {
    font-size: 12px;
    color: #666;
    margin: 0;
  }
  
  .logout-icon {
    cursor: pointer;
    font-size: 20px;
  }
  </style>
  