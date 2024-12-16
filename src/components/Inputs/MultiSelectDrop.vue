<template>
    <div class="multi_select_group">
      <label for="multiSelect">Select Options</label>
      <div class="input-wrapper" @click="toggleDropdown">
        <div class="input-with-tags">
          <input 
            id="multiSelect"
            type="text" 
            v-model="searchQuery"
            @input="onInput"
            placeholder="Select..."
            class="autocomplete-input"
          />
          <span v-for="(item, index) in selectedOptions" :key="index" class="selected-tag">
            {{ item }}
          </span>
        </div>
        <span v-if="!searchQuery && !isFocused" class="dropdown-arrow"><font-awesome-icon :icon="['fas', 'caret-down']"
            /></span>
      
      <ul v-if="isFocused" class="autocomplete-list">
        <li 
          v-for="(option, index) in filteredOptions" 
          :key="index" 
          class="autocomplete-item"
        >
          <label>
            <input 
              type="checkbox" 
              :value="option" 
              v-model="selectedOptions" 
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
          "HTML"
        ],
        filteredOptions: [],
        isFocused: false,
        selectedOptions: []
      };
    },
    methods: {
      onInput() {
        this.filteredOptions = this.options.filter(option =>
          option.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      },
      toggleDropdown() {
        this.isFocused = !this.isFocused;
        if (this.isFocused) {
          this.filteredOptions = this.options;
        }
      },
      removeItem(item) {
        const index = this.selectedOptions.indexOf(item);
        if (index !== -1) {
          this.selectedOptions.splice(index, 1);
        }
      }
    },
    watch: {
      searchQuery(newQuery) {
        if (!newQuery) {
          this.filteredOptions = this.options;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .multi_select_group {
    display: flex;
    grid-area: field;
    position: relative;
    align-items: flex-start;
    flex-direction: column;
    gap: 7px;
    padding: 5px 10px;
  }
  .input-wrapper {
    position: relative;
  }
  .input-with-tags {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 8px;
  }
  .autocomplete-input {
    width: 100%;
    font-size: 16px;
    border: none;
    outline: none;
    flex-grow: 1;
  }
  .selected-tag {
    background-color: #e0e0e0;
    padding: 4px 10px;
    border-radius: 12px;
    margin-right: 5px;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
  }
  .remove-tag {
    margin-left: 5px;
    cursor: pointer;
    font-size: 14px;
    color: red;
  }
  .selected-tag:hover {
    background-color: #bdbdbd;
  }
  .autocomplete-list {
    list-style: none;
    padding: 0;
    margin: 0;
    border: 1px solid #ccc;
    border-top: none;
    max-height: 150px;
    overflow-y: auto;
    position: absolute;
    width: 100%;
    background-color: white;
    z-index: 10;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  .autocomplete-item {
    padding: 8px;
    cursor: pointer;
  }
  .dropdown-arrow {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 18px;
    color: #ccc;
    pointer-events: none;
  }
  .autocomplete-item label {
    display: flex;
    align-items: center;
  }
  .autocomplete-item input[type="checkbox"] {
    margin-right: 10px;
  }
  </style>
  