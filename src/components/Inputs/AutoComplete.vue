<template>
  <div class="autocomplete_group">
    <slot name="label">
      <label for="comboBox">{{ label }} <span class="note_section" v-if="note">{{ note }}</span></label>
    </slot>
    <div class="input-wrapper">
      <input
        id="comboBox"
        type="text"
        v-bind="$attrs"
        v-model="searchQuery"
        @input="onInput"
        @focus="onFocus"
        @blur="onBlur"
        placeholder="Select..."
        class="autocomplete-input"
      />
      <span v-if="!searchQuery && !isFocused" class="dropdown-arrow"
        ><font-awesome-icon :icon="['fas', 'caret-down']"
      /></span>
      <ul v-if="filteredOptions.length && isFocused" class="autocomplete-list">
        <li
          v-for="(option, index) in filteredOptions"
          :key="index"
          @click="onSelect(option)"
          class="autocomplete-item"
        >
          {{ option }}
        </li>
      </ul>
    </div>
  </div>
</template>
  
<script>
export default {
  props: {
    label: String,
    note: String,
    value: [String, Number],
    options: Array,
  },
  data() {
    return {
      searchQuery: this.value || "",
      option: this.options || ["-- No List --"],
      filteredOptions: [],
      isFocused: false,
    };
  },
  methods: {
    onInput() {
      this.updateValue(this.searchQuery);
      if (this.searchQuery.trim() === "") {
        this.filteredOptions = this.option;
      } else {
        this.filteredOptions = this.option.filter((option) =>
          option.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
    },
    onSelect(option) {
      this.searchQuery = option;
      this.filteredOptions = [];
      this.isFocused = false;
      this.updateValue(option);
    },
    onFocus() {
      this.isFocused = true;
      this.filteredOptions =
        this.searchQuery.trim() === "" ? this.option : this.filteredOptions;
    },
    onBlur() {
      setTimeout(() => {
        this.isFocused = false;
        if (!this.searchQuery) {
          this.filteredOptions = [];
        }
      }, 150);
    },
    updateValue(value) {
      this.$emit("input", value); // Emit the 'input' event to the parent
    },
  },
  watch: {
    value(newVal) {
      this.searchQuery = newVal; // Sync changes when parent updates value
    },
  },
};
</script>

  <style scoped>
.autocomplete_group {
  display: flex;
  grid-area: field;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
  gap: 7px;
  padding: 5px 10px;
  width: 100%;
}
.input-wrapper {
  position: relative;
  width: 90%;
}
.autocomplete-input {
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

.autocomplete-input:focus {
  outline: 2px solid rgb(93, 135, 255);
}

.dropdown-arrow {
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 18px;
  color: #ccc;
  pointer-events: none;
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
.autocomplete-item:hover {
  background-color: #f1f1f1;
}

.note_section{
  margin: 0 5px;
  font-size: 11px;
  color: red;
  font-weight: 600;
}
</style>
  