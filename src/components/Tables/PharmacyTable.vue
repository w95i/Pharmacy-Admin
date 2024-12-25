<template>
  <div class="editable-table">
    <div class="header">
      <h2>Pharmacies Table</h2>
      <button @click="addContact" class="add-button">
        <i class="fas fa-user-plus"></i> Add Pharmacy
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
        <tr v-for="(contact, index) in Pharmacies" :key="contact.id">
          <td>{{ index+1 }}</td>
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
export default {
  props:{
    Pharmacies:{
      type:Array,
      default:() => []
    }
  },
  data() {
    return {
      searchQuery: "",
      contacts: [
        {
          id: 123,
          avatar: "https://via.placeholder.com/40",
          name: "Hanna Gover",
          email: "hgover@gmail.com",
          phone: "+123 456 789",
          joiningDate: "12-10-2014",
          role: "Designer",
          roleClass: "designer",
        },
        {
          id: 123,
          avatar: "https://via.placeholder.com/40",
          name: "waeel Gover",
          email: "hgover@gmail.com",
          phone: "+123 456 789",
          joiningDate: "12-10-2014",
          role: "Designer",
          roleClass: "designer",
        }
        // Add more contact data here
      ],
    };
  },
  computed: {
    filteredContacts() {
      return this.contacts.filter(
        (contact) =>
          contact.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          contact.email.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    addContact() {
      alert("Add contact functionality here.");
    },
    editContact(id) {
      alert(`Edit contact with ID: ${id}`);
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
}
.action-buttons{
  display: flex;
  align-items: center;
  gap: 15px;
  height: 65px;
}
tr{
    height: 65px;
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
  