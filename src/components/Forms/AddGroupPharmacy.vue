<template>
  <div class="add_group_container">
    <form class="add-group-form" @submit.prevent="postGroup">
      <div>
        <f-input label="Group Name" v-model="groupData.name" />
      </div>
      <div>
        <h2>Owner Data</h2>
        <div v-if="!newUser" class="choice-user-section">
          <f-autoComplete
            label="Full Name"
            note="(if the user is existing)"
            :options="users"
            v-model="selectedUser"
          />
          <div class="icon-wrapper" @click="toggleNewUser">
            <p>
              {{ $t("new-user") }}
              <font-awesome-icon
                :icon="['fas', 'user-plus']"
                title="New User"
              />
            </p>
          </div>
        </div>
        <div v-else class="new-user-section">
          <f-input label="Full Name" v-model="groupData.ownerData.fullName" />
          <div class="input-row">
            <f-input
              label="Email Address"
              type="email"
              v-model="groupData.ownerData.email"
            />
            <f-input
              label="Phone Number"
              type="tel"
              v-model="groupData.ownerData.phone"
            />
          </div>
          <div class="password-wrapper">
            <label class="control-label"> Password </label>
            <input
              :type="showPasswords ? 'text' : 'password'"
              v-model="groupData.ownerData.password"
            />
            <font-awesome-icon
              :icon="showPasswords ? ['fas', 'eye-slash'] : ['fas', 'eye']"
              @click="toggleShowPasswords"
            />
          </div>
          <div class="icon-wrapper" @click="toggleNewUser">
            <p>
              {{ $t("choice-user") }}
              <font-awesome-icon
                :icon="['fas', 'user-check']"
                title="Choice User"
              />
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2>Pharmacy Data</h2>
        <div class="pharmacy-section">
          <f-input label="Name" v-model="pharmacyData.name" />
          <fieldset>
            <legend>Location</legend>
            <MapPicker
              @location-selected="onLocationSelected"
              :initial-center="{ lat: 33.3152, lng: 44.3661 }"
              :initial-zoom="12"
              class="map-picker"
            />
            <f-input
              :label="$t('address')"
              v-model="pharmacyData.location.address"
            />
            <div class="input-row">
              <f-input
                :label="$t('latitude')"
                type="number"
                v-model="pharmacyData.location.lat"
              />
              <f-input
                :label="$t('longitude')"
                type="number"
                v-model="pharmacyData.location.lng"
              />
            </div>
          </fieldset>
          <div class="input-row">
            <f-input
              :label="$t('price')"
              type="number"
              v-model="pharmacyData.price"
            />
            <f-input
              :label="$t('discount')"
              type="number"
              v-model="pharmacyData.discount"
            />
          </div>
          <f-input
            :label="$t('expire-date')"
            type="date"
            v-model="pharmacyData.expiryDate"
          />
        </div>
      </div>
      <div>
        <button type="button" class="btn-submit" @click="pushPharmacy">
          {{ $t("new-pharmacy") }}
        </button>
      </div>
      <div class="editable-table">
        <div class="header">
          <h2>Pharmacies Table</h2>
        </div>
        <table>
          <thead>
            <tr>
              <th>#NO.</th>
              <th>Pharmacy Name</th>
              <th>Price</th>
              <th>Expire Date</th>
              <th>Discount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(contact, index) in groupData.pharmacies" :key="index">
              <td>{{ index + 1 }}</td>
              <td>
                <div class="user-info">
                  <div>
                    <p>{{ contact.pharmacyName }}</p>
                  </div>
                </div>
              </td>
              <td>{{ contact.price }}</td>
              <td>{{ contact.expiryDate }}</td>
              <td>
                <span>
                  {{ contact.discount }}
                </span>
              </td>
              <td class="action-buttons">
                <button @click="editPharmacy(index)" class="edit-button">
                  <font-awesome-icon :icon="['fas', 'pen-to-square']" />
                </button>
                <button @click="DeletePharmacy(index)" class="delete-button">
                  <font-awesome-icon :icon="['fas', 'trash']" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button type="submit" class="btn-submit">
        {{ $t("submit") }}
      </button>
    </form>
  </div>
</template>


<script>
import axiosData from "@/Axios";
import MapPicker from "@/components/Maps/MapPicker.vue";
import { useUserStore } from "@/Stores/UserStore";
export default {
  props: {
    users: {
      type: Array,
      default: () => [], // Avoid issues when `users` is empty
    },
  },
  components: {
    MapPicker,
  },
  data() {
    return {
      selectedUser: "",
      UserStore: useUserStore(),
      newUser: false,
      showPasswords: false,
      showConfirmPasswords: false,
      groupData: {
        name: "",
        ownerData: {
          email: "",
          password: "",
          fullName: "",
          image: "",
          phoneNumber: "",
        },
        ownerId: "",
        pharmacies: [],
      },
      pharmacyData: {
        name: "",
        location: {
          lat: null,
          lng: null,
          address: "",
        },
        price: null,
        discount: null,
        expiryDate: "",
      },
    };
  },
  watch: {
    "groupData.pharmacies": {
      handler(newPharmacies) {
        console.log("Updated Pharmacies:", newPharmacies);
      },
      deep: true,
      immediate: true,
    },
    users(newUsers) {
      console.log("Updated users in child component:", newUsers);
    },
  },
  methods: {
    onLocationSelected(location) {
      this.pharmacyData.location.lat = location.lat;
      this.pharmacyData.location.lng = location.lng;
    },
    toggleNewUser() {
      this.newUser = !this.newUser;
    },
    toggleShowPasswords() {
      this.showPasswords = !this.showPasswords;
    },
    toggleConfirmPassword() {
      this.showConfirmPasswords = !this.showConfirmPasswords;
    },
    handleSubmit() {
      console.log("Group Name:", this.groupName);
      console.log("Owner Data:", this.ownerData);
      console.log("Pharmacy Data:", this.pharmacyData);
    },
    pushPharmacy() {
      this.groupData.pharmacies = [
        ...this.groupData.pharmacies,
        this.pharmacyData,
      ];
      this.pharmacyData = {
        pharmacyName: "",
        location: {
          lat: null,
          lng: null,
          address: "",
        },
        price: null,
        discount: null,
        expiryDate: "",
      };
    },
    DeletePharmacy(index) {
      this.groupData.pharmacies.pull(index);
    },
    editPharmacy(index) {
      this.pharmacyData = this.groupData.pharmacies[index];
    },
    async postGroup() {
      const data = {
        name: this.groupData.name,
        ownerData: {
          email: this.groupData.ownerData.email,
          password: this.groupData.ownerData.password,
          fullName: this.groupData.ownerData.fullName,
          image: this.groupData.ownerData.image,
          phoneNumber: this.groupData.ownerData.phoneNumber,
        },
        pharmacies: this.groupData.pharmacies,
      };
      try {
        await axiosData.post("/Pharmacy/create-group", data);

        console.log("Payload:", data);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>


<style scoped>
.add_group_container {
  font-family: var(--jakarta-font);
}

.add-group-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.choice-user-section {
  display: flex;
  gap: 10px;
}

.icon-wrapper {
  display: flex;
  cursor: pointer;
  background-color: #4e8ff7;
  color: white;
  margin-top: 36px;
  font-size: 16px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 35px;
  padding: 10px 5px;
}

.icon-wrapper p {
  display: flex;
  gap: 10px;
  align-items: center;
}

.icon-wrapper p svg {
  font-size: 14px;
}

.new-user-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: start;
}

.input-row {
  width: 100%;
  display: flex;
  gap: 5px;
  align-items: center;
}

.password-wrapper {
  display: flex;
  flex-direction: column;
  gap: 7px;
  padding: 5px 10px;
  width: 100%;
  position: relative;
}

.password-wrapper svg {
  position: absolute;
  top: 47px;
  right: 200px;
  cursor: pointer;
}

.password-wrapper input {
  width: 90%;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid #e7e7e7;
  transition: 0.15s opacity cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 0.875rem;
  display: flex;
  flex-wrap: wrap;
  letter-spacing: 0.009375em;
}

.password-wrapper input:focus {
  outline: 2px solid rgb(93, 135, 255);
}

.pharmacy-section {
  padding: 5px 10px;
}

.pharmacy-section fieldset {
  padding: 25px;
  border-radius: 10px;
  border: 1px solid #ccc;
}

.editable-table {
  max-width: 100%;
  margin: 20px;
  font-family: Arial, sans-serif;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.add-button {
  background-color: #4e8ff7;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.search-input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
table {
  width: 100%;
  border-collapse: collapse;
}
thead {
  background-color: #f4f4f4;
}
th,
td {
  padding: 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  text-align: center;
}
.action-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  height: 65px;
}
tr {
  height: 65px;
}
tr:hover {
  background-color: #f8f8f8;
}
.user-info img {
  border-radius: 50%;
  margin-right: 10px;
}
.role {
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
  text-align: center;
}
.designer {
  background-color: #c5e6f7;
  color: #31708e;
}
/* Add similar classes for other roles */
.edit-button,
.delete-button {
  background: none;
  border: none;
  cursor: pointer;
}
.edit-button svg {
  color: #4e8ff7;
}
.delete-button svg {
  color: #e57373;
}

.btn-submit {
  background-color: #4e8ff7;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 20px 10px;
  border-radius: 5px;
  cursor: pointer;
  width: 200px;
}

.btn-submit:hover {
  background-color: #0056b3;
}
</style>