<template>
  <div class="popup_overlay">
    <div class="popup_content">
      <h2>{{ $t("edit-category") }}</h2>
      <form @submit.prevent="submitEdit">
        <!-- Name Input -->
        <div class="form_group">
          <label for="name">{{ $t("name") }}</label>
          <input
            id="name"
            type="text"
            v-model="categoryData.name"
            required
            placeholder="Enter category name"
          />
        </div>

        <!-- Description Input -->
        <div class="form_group">
          <label for="description">{{ $t("description") }}</label>
          <textarea
            id="description"
            rows="4"
            v-model="categoryData.details"
            required
            placeholder="Enter category description"
          ></textarea>
        </div>

        <!-- Buttons -->
        <div class="form_actions">
          <button type="submit" class="save_button">{{ $t("save") }}</button>
          <button
            type="button"
            class="cancel_button"
            @click="$emit('close-popup')"
          >
            {{ $t("cancel") }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axiosData from "@/Axios";

export default {
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      categoryData: '',
    };
  },
  created() {
    this.getCategoryData();
  },
  methods: {
    async getCategoryData() {
      try {
        const response = await axiosData.get(`/Category/${this.category.id}`);
        if (response.status === 200) {
          this.categoryData = response.data;
        }
      } catch (error) {
        console.log(error);
      }
    },
    submitEdit() {
      this.$emit("update-category", this.categoryData);
      this.$emit("close-popup");
    },
  },
};
</script>
    
<style scoped>
.popup_overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.popup_content {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.popup_content h2 {
  margin-bottom: 20px;
  font-size: 1.5rem;
  color: #333;
}

.form_group {
  margin-bottom: 15px;
}

.form_group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
}

.form_group input,
.form_group textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
}

.form_group textarea {
  resize: none;
}

.form_actions {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.save_button {
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.save_button:hover {
  background-color: #45a049;
}

.cancel_button {
  background-color: #f44336;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.cancel_button:hover {
  background-color: #d32f2f;
}
</style>
