<template>
    <div v-if="loading" class="loading-container">
      <img
        src="@/assets/Images/Logo-36-300.png"
        alt="Loading"
        class="loading-logo"
      />
    </div>
    <div
      v-else
      class="card_group_container"
      v-for="pharmacy in pharmacyList"
      :key="pharmacy.id"
    >
      <!-- <EllipsisAction class="ellipsis_action" /> -->
      <div class="card_image">
        <img src="@/assets/Images/Logo-35-350.png" alt="image" />
        <img
          src="https://modernize-vuejs.adminmart.com/assets/user-1-CznVQ9Sv.jpg"
          class="user_image"
          alt="user Image"
        />
      </div>
      <div class="status_badge">
        <span :class="checkExpire ? 'expire' : 'active'"
          ><font-awesome-icon :icon="['fas', 'circle']"
        /></span>
        <p>{{ checkExpire ? "Expired" : "Active" }}</p>
      </div>
      <div class="card_content">
        <router-link :to="`/pharmacy/pharmacy-list/pharmacy-group/${pharmacy.id}`"><h3>{{ pharmacy.name }}</h3></router-link>
        <p>
          <span><font-awesome-icon :icon="['fas', 'circle-user']" /></span>
          {{ pharmacy.owner.fullName }}
        </p>
        <p>
          <span><font-awesome-icon :icon="['fas', 'envelope']" /></span>
          {{ pharmacy.owner.userName }}
        </p>
        <p>
          <span><font-awesome-icon :icon="['fas', 'phone']" /></span>
          +9647733842780
        </p>
      </div>
      <div class="card_timing">
        <p>
          <span><font-awesome-icon :icon="['fas', 'clock']" /></span>
          {{ expireDate }}
        </p>
      </div>
    </div>
</template>

<script>
// import EllipsisAction from "../EllipsisAction.vue";
export default {
  name: "card-group",
  props: {
    pharmacyList: {
      type: Array,
      required: true,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
      default: "",
    },
  },
  // components: {
  //   EllipsisAction,
  // },
  data() {
    return {
      expireDate: "21/12/2024, 11:55:36",
      currentDate: "",
    };
  },
  created() {
    this.validateExpireDate();
    this.updateCurrentDate();
  },
  computed: {
    checkExpire() {
      const current = new Date();
      const expire = new Date(this.formattedExpireDate);
      return current > expire;
    },
  },
  methods: {
    validateExpireDate() {
      try {
        const [day, month, yearAndTime] = this.expireDate.split("/");
        const [year, time] = yearAndTime.split(", ");
        const expire = new Date(`${year}-${month}-${day}T${time}`);

        if (isNaN(expire.getTime())) {
          throw new Error("Invalid date format");
        }

        this.formattedExpireDate = expire.toISOString();
        console.log(this.formattedExpireDate);
        console.log(this.expireDate);
      } catch (error) {
        console.error("Invalid expireDate, setting default:", error.message);
        const defaultExpire = new Date();
        defaultExpire.setFullYear(defaultExpire.getFullYear() + 1);
        this.formattedExpireDate = defaultExpire.toISOString();
      }
    },
    updateCurrentDate() {
      this.currentDate = new Date().toISOString();
      console.log("Current Date:", this.currentDate);
    },
  },
};
</script>

<style scoped>
.card_group_container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 450px;
  border-radius: 10px;
  background-color: #eeeeee;
  transition: transform 0.3s ease;
}

.card_group_container:hover {
  transform: scale(1.05);
}

.card_group_container:hover .card_content a{
  color: var(--primary-color);
}

.card_group_container .card_image {
  width: 100%;
  height: 250px;
  position: relative;
}

.card_group_container .card_image img:first-child {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
}

.card_image .user_image {
  width: 48px;
  border-radius: 50%;
  position: absolute;
  bottom: -20px;
  left: 30px;
  border: 4px solid #eeeeee;
}

.card_content {
  padding: 30px 20px 5px;
  width: 100%;
  font-family: var(--jakarta-font);
  text-align: start;
}

.card_content a{
  text-decoration: none;
  color: #000;
  cursor: pointer;
}

.card_content h3 {
  font-size: 20px;
  font-weight: 600;
}

.card_content p {
  font-size: 13px;
  color: #666666;
  padding: 5px 10px;
}

.card_group_container .card_timing {
  width: 100%;
  padding: 0 20px;
  text-align: end;
  position: absolute;
  bottom: 10px;
}

.card_timing p {
  font-size: 12px;
  font-family: var(--jakarta-font);
  color: #666666;
}

.ellipsis_action {
  position: absolute;
  top: 15px;
  right: 15px;
  padding: 5px;
  border-radius: 15px;
  font-size: 18px;
  font-family: var(--jakarta-font);
  font-weight: 600;
  z-index: 5;
}

.status_badge {
  position: absolute;
  top: 15px;
  left: 15px;
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: #c0c0c097;
  padding: 5px;
  border-radius: 15px;
  font-size: 12px;
  font-family: var(--jakarta-font);
  font-weight: 600;
}

.status_badge p {
  color: white;
}

.status_badge .active {
  color: rgb(22, 255, 22);
}

.status_badge .expire {
  color: red;
}

.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
}

.loading-logo {
  width: 100px;
  animation: rotateLogo 2s linear infinite;
}

@keyframes rotateLogo {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>