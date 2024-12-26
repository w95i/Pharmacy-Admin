<template>
  <AddPharmacy v-if="ShowAddPharmacy" @close-popup="toggleContact" :groupId="groupId" />
  <EditPharmacy v-if="ShowEditPharmacy" @close-popup="editContact" :pharmacyId="pharmacyId" />
  <div class="editable-table">
    <div class="header">
      <h2>Pharmacies Table</h2>
      <button @click="toggleContact" class="add-button">
        <font-awesome-icon :icon="['fas', 'plus']" /> Add Pharmacy
      </button>
    </div>
    <input
      type="text"
      placeholder="Search Contacts"
      v-model="searchQuery"
      class="search-input"
    />
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
        <tr v-for="(contact, index) in filteredContacts" :key="contact.id">
          <td>{{ index + 1 }}</td>
          <td>
            <div class="user-info">
              <div>
                <p>{{ contact.name }}</p>
              </div>
            </div>
          </td>
          <td>{{ contact.price }}</td>
          <td>{{ contact.expiryDate }}</td>
          <td>
            <span :class="['role', contact.roleClass]">
              {{ contact.discount }}
            </span>
          </td>
          <td class="action-buttons">
            <button @click="editContact(contact.id)" class="edit-button">
              <font-awesome-icon :icon="['fas', 'pen-to-square']" />
            </button>
            <button @click="deleteContact(contact.id)" class="delete-button">
              <font-awesome-icon :icon="['fas', 'trash']" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
  
  <script>
import AddPharmacy from "@/components/PopUp/AddPharmacy.vue";
import EditPharmacy from "@/components/PopUp/EditPharmcy.vue";
export default {
  props: {
    Pharmacies: {
      type: Array,
      default: () => [],
    },
    groupId:{
      type: String,
      default: null
    }
  },
  components:{
    AddPharmacy,
    EditPharmacy
  },
  data() {
    return {
      searchQuery: "",
      ShowAddPharmacy: false,
      ShowEditPharmacy: false,
      pharmacyId:''
    };
  },
  computed: {
    filteredContacts() {
      return this.Pharmacies.filter(
        (contact) =>
          contact.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
    },
  },
  methods: {
    toggleContact() {
      this.ShowAddPharmacy = !this.ShowAddPharmacy;
    },
    editContact(id) {
      this.ShowEditPharmacy = !this.ShowEditPharmacy;
      this.pharmacyId = id
    },
    deleteContact(id) {
      const confirmDelete = confirm(
        `Are you sure you want to delete contact with ID: ${id}?`
      );
      if (confirmDelete) {
        this.contacts = this.contacts.filter((contact) => contact.id !== id);
      }
    },
  },
};
</script>
  
  <style scoped>
.editable-table {
  max-width: 100%;
  margin: 20px auto;
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
.user-info {
  display: flex;
  align-items: center;
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
</style>
  