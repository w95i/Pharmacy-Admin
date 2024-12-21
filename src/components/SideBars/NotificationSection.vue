<template>
  <div class="notification-container" @click.stop="toggleNotifications">
    <span class="icon_wrapper">
      <font-awesome-icon :icon="['fas', 'bell']" />
      <span class="icon_badge" v-if="notificationsList.length>0"></span>
    </span>
    <div v-if="languageStore.showNotification" class="notification-dropdown">
      <div class="notification_information">
        <p>Notifications</p>
        <span class="badge">{{ notificationsList.length }} New</span>
      </div>
      <div class="notification_list">
        <ul>
          <li v-for="notification in notificationsList" :key="notification.id">
            <div class="item_container">
              <div class="user_img">
                <img :src="notification.imageUrl" alt="User Notification" />
              </div>
              <div class="item_links">
                <p class="clicked_link">{{ notification.title }}</p>
                <p class="item_description">{{ notification.description }}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="btn">
        <p class="btn_text" @click="logout">See All Notifications</p>
      </div>
    </div>
  </div>
</template>


<script>
import { useLanguageStore } from "@/Stores/LanguageStore";
export default {
  data() {
    return {
      notificationsList: [
      {
          id: 1,
          title: "New Message",
          description: "You have received a new message",
          imageUrl:
            "https://modernize-vuejs.adminmart.com/assets/user-1-CznVQ9Sv.jpg",
        },
        {
          id: 2,
          title: "System Update",
          description: "System update completed successfully.",
          imageUrl:
            "https://modernize-vuejs.adminmart.com/assets/user-2-idGLMY7R.jpg",
        },
        {
          id: 3,
          title: "Payment Received",
          description: "You have received a payment of $150.",
          imageUrl:
            "https://modernize-vuejs.adminmart.com/assets/user-3-HJ3opN5n.jpg",
        },
        {
          id: 4,
          title: "Appointment Reminder",
          description: "Your appointment is scheduled ",
          imageUrl:
            "https://modernize-vuejs.adminmart.com/assets/user-4-C1-xBLNW.jpg",
        },
        {
          id: 5,
          title: "New Comment",
          description: "Anna commented on your post.",
          imageUrl:
            "https://modernize-vuejs.adminmart.com/assets/user-5-TcGtWTp3.jpg",
        },
        {
          id: 6,
          title: "Task Due",
          description: "Your task 'Complete Report'",
          imageUrl:
            "https://modernize-vuejs.adminmart.com/assets/user-1-CznVQ9Sv.jpg",
        },
        {
          id: 7,
          title: "Friend Request",
          description: "You have a new friend request ",
          imageUrl:
            "https://modernize-vuejs.adminmart.com/assets/user-2-idGLMY7R.jpg",
        },
      ],
    };
  },
  setup(){
    const languageStore = useLanguageStore();

    const toggleNotifications = () => {
      languageStore.toggleNotification();
    }

    return {
      languageStore,
      toggleNotifications,
    }
  }
};
</script>

<style scoped>
.notification-container {
  position: relative;
}
.icon_wrapper {
  position: relative;
  padding: 10px 12px;
  background-color: #dfdfdf;
  border-radius: 50%;
  cursor: pointer;
}

.icon_wrapper:hover {
    background-color: #cacaca;
}

.icon_badge {
  position: absolute;
  top: 0;
  right: 0;
  background-color: red;
  color: #fff;
  font-size: 10px;
  font-weight: 600;
  border-radius: 50%;
  width: 8px;
  height: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.icon_wrapper svg{
  color: var(--icon-color);
}
.notification-dropdown {
  position: absolute;
  top: 25px;
  right: 0;
  background: #fff;
  border: 1px solid #ddd;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 360px;
  z-index: 10;
}
.notification_information {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 32px;
}
.notification_information p {
  font-size: 18px;
  font-weight: 600;
  font-family: var(--jakarta-font);
}
.notification_information .badge {
  background-color: var(--primary-color);
  color: #fff;
  padding: 5px 10px;
  font-size: 12px;
  font-weight: 600;
  border-radius: 10px;
  font-family: var(--jakarta-font);
}

.notification_list {
  height: 400px;
  overflow-y: auto;
}

.notification_list::-webkit-scrollbar {
  width: 3px;
  padding: 10px 0;
}

.notification_list::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgb(255, 255, 255);
  border-radius: 10px;
}

.notification_list::-webkit-scrollbar-thumb {
  background: rgba(93, 136, 255, 0.49);
  border-radius: 10px;
  padding: 10px 0;
}

.notification_list::-webkit-scrollbar-thumb:hover {
  background: rgba(155, 182, 255, 0.49);
  border-radius: 10px;
}

.notification-dropdown ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.notification-dropdown li {
  cursor: pointer;
  transition: background-color 0.2s ease;
}
.notification-dropdown li:hover {
  background-color: #f5f5f5;
  color: #054ff0;
}

.item_container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding: 16px 32px;
}

.item_container .user_img {
  width: 48px;
  height: 48px;
  background-color: #ecf2ff;
  border-radius: 50%;
  margin-inline-end: 12px;
  overflow: hidden;
}

.user_img img {
  width: 100%;
}

.item_container .item_links {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
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
  cursor: pointer;
}

.btn_text:hover {
  background-color: #f1f1f1;
  color: var(--primary-color);
}
</style>