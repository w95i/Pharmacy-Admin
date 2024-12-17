<template>
  <div class="multi_select_group">
    <label for="multiSelect">Select Options</label>
    <div class="input-wrapper" @click="openDropdown">
      <div class="input-with-tags">
        <input
          id="multiSelect"
          type="text"
          v-model="searchQuery"
          @input="onInput"
          @focus="openDropdown"
          placeholder="Select..."
          class="autocomplete-input"
        />
        <div style="width: 100%; display: flex; flex-wrap: wrap;">
          <span
            v-for="(item, index) in selectedOptions"
            :key="index"
            class="selected-tag"
          >
            {{ item }}
          </span>
        </div>
      </div>
      <span v-if="!searchQuery" class="dropdown-arrow">
        <font-awesome-icon :icon="['fas', 'caret-down']" />
      </span>
      <ul v-if="isDropdownOpen" class="autocomplete-list">
        <li
          v-for="(option, index) in filteredOptions"
          :key="index"
          class="autocomplete-item"
        >
          <label>
            <!-- Stop click propagation here -->
            <input
              type="checkbox"
              :value="option"
              v-model="selectedOptions"
              @click.stop
            />
            {{ option }}
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
      options: [
        "Programming",
        "Design",
        "Vue",
        "Vuetify",
        "JavaScript",
        "CSS",
        "HTML",
      ],
      filteredOptions: [],
      isDropdownOpen: false,
      selectedOptions: [],
    };
  },
  methods: {
    // Open dropdown and show all options
    openDropdown() {
      this.isDropdownOpen = true;
      this.filteredOptions = this.options;
    },
    // Filter options based on search query
    onInput() {
      this.filteredOptions = this.options.filter((option) =>
        option.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
      this.isDropdownOpen = true;
    },
    // Close dropdown when clicking outside
    closeDropdown(event) {
      if (!this.$el.contains(event.target)) {
        this.isDropdownOpen = false;
      }
    },
  },
  mounted() {
    document.addEventListener("click", this.closeDropdown);
  },
  unmounted() {
    document.removeEventListener("click", this.closeDropdown);
  },
};
</script>

<style scoped>
.multi_select_group {
  display: flex;
  flex-direction: column;
  gap: 7px;
  padding: 5px 10px;
  position: relative;
}
.input-wrapper {
  position: relative;
  width: 90%;
}
.input-with-tags {
  background-color: transparent;
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid #e7e7e7;
  transition: 0.15s opacity cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 0.875rem;
  display: flex;
  flex-wrap: wrap;
  letter-spacing: 0.009375em;
}
.autocomplete-input {
  flex-grow: 1;
  border: none;
  outline: none;
  font-size: 14px;
}
.selected-tag {
  background-color: #e0e0e0;
  padding: 4px 8px;
  border-radius: 12px;
  margin: 4px;
  display: flex;
  align-items: center;
}
.dropdown-arrow {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 16px;
  color: #ccc;
}
.autocomplete-list {
  list-style: none;
  margin-top: 4px;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 8px;
  max-height: 200px;
  overflow-y: auto;
  position: absolute;
  width: 100%;
  background-color: white;
  z-index: 10;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.autocomplete-list::-webkit-scrollbar {
  width: 3px;
  padding: 10px 0;
}

.autocomplete-list::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgb(255, 255, 255);
  border-radius: 10px;
}

.autocomplete-list::-webkit-scrollbar-thumb {
  background: rgba(93, 136, 255, 0.49);
  border-radius: 10px;
  padding: 10px 0;
}

.autocomplete-list::-webkit-scrollbar-thumb:hover {
  background: rgba(155, 182, 255, 0.49);
  border-radius: 10px;
}

.autocomplete-item {
  padding: 8px;
  cursor: pointer;
}
.autocomplete-item label {
  display: flex;
  align-items: center;
}
.autocomplete-item input[type="checkbox"] {
  margin-right: 10px;
}
.autocomplete-item:hover {
  background-color: #f1f1f1;
}
</style>
