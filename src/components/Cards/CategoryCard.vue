<template>
  <div class="card_group">
    <div class="image_section">
      <img :src="resolvedCategoryImage" alt="category image" />
    </div>
    <div class="content_section">
      <div class="card_content">
        <h2>{{ category.name }}</h2>
        <p>{{ category.count }}</p>
      </div>
      <div class="card_action">
        <button aria-label="Edit category" @click="editCategory">
          <font-awesome-icon :icon="['fas', 'pen-to-square']" />
        </button>
        <button class="delete-icon" aria-label="Delete category" @click="deleteCategory">
          <font-awesome-icon :icon="['fas', 'trash']" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
  computed: {
    resolvedCategoryImage() {
      try {
        return this.category.image.startsWith("@")
          ? require(this.category.image)
          : this.category.image;
      } catch {
        return require("@/assets/Images/assets-35.png");
      }
    },
  },
  methods: {
    editCategory() {
      this.$emit("edit-category", this.category);
    },
    deleteCategory() {
      this.$emit("delete-category", this.category.id);
    },
  },
};
</script>

<style scoped>
.card_group {
  display: flex;
  align-items: start;
  background-color: #eeeeee;
  border-radius: 10px;
  gap: 10px;
  width: 25%;
  overflow: hidden;
}

.card_group .image_section {
  width: 30%;
  height: 100%;
  overflow: hidden;
  display: flex;
}

.image_section img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content_section {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px;
}

.card_content p {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #666666;
  margin-top: 5px;
}

.content_section .card_action{
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.card_action button {
  color: var(--icon-color);
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.card_action button:hover {
  color: var(--primary-color);
}

.delete-icon {
  color: red !important;
}

.delete-icon:hover {
  color: #a50000 !important;
}
</style>
