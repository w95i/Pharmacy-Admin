<template>
  <div class="page_container">
    <AddCategoryPopup
      v-if="showAddCategory"
      @close-popup="toggleAddCategory"
      @refresh-categories="GetCategory"
    />
    <EditCategoryPopup
      v-if="showEditCategory"
      :category="selectedCategory"
      @close-popup="toggleEditCategory"
      @update-category="editCategory"
    />
    <ConfirmDialog
      v-if="showConfirmDialog"
      :title="$t('delete-category')"
      :message="$t('description-delete-category')"
      :isVisible="showConfirmDialog"
      @confirm="confirmDelete"
      @cancel="cancelDelete"
    />

    <PageHeader :title="$t('categories')" path="DashBoard • Categories" />
    <div class="btn_section">
      <button @click="toggleAddCategory">{{ $t("add-category") }}</button>
    </div>
    <div class="category_list">
      <CategoryCard
        v-for="category in categories"
        :key="category.id"
        :category="category"
        @delete-category="confirmDeleteCategory"
        @edit-category="openEditCategory"
      />
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/Cards/PageHeader.vue";
import AddCategoryPopup from "@/components/PopUp/AddCategoryPopup.vue";
import CategoryCard from "@/components/Cards/CategoryCard.vue";
import ConfirmDialog from "@/components/PopUp/ConfirmDialog.vue";
import EditCategoryPopup from "@/components/PopUp/EditCategoryPopup.vue";
import axiosData from "@/Axios";

export default {
  components: {
    PageHeader,
    AddCategoryPopup,
    CategoryCard,
    ConfirmDialog,
    EditCategoryPopup,
  },
  data() {
    return {
      categories: [],
      selectedCategory: null,
      showAddCategory: false,
      showEditCategory: false,
      showConfirmDialog: false,
      categoryIdToDelete: null,
    };
  },
  created() {
    this.GetCategory();
  },
  methods: {
    toggleAddCategory() {
      this.showAddCategory = !this.showAddCategory;
    },
    openEditCategory(category) {
      this.selectedCategory = category;
      this.showEditCategory = true;
    },
    toggleEditCategory() {
      this.showEditCategory = !this.showEditCategory;
    },
    confirmDeleteCategory(categoryId) {
      this.categoryIdToDelete = categoryId;
      this.showConfirmDialog = true;
    },
    confirmDelete() {
      if (this.categoryIdToDelete) {
        this.deleteCategory(this.categoryIdToDelete);
        this.categoryIdToDelete = null;
      }
      this.showConfirmDialog = false;
    },
    cancelDelete() {
      this.categoryIdToDelete = null;
      this.showConfirmDialog = false;
    },
    async GetCategory() {
      try {
        const response = await axiosData.get("/Category/get-categories", {
          headers: {
            authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
          },
        });
        if (response.status === 200) {
          this.categories = response.data.data;
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    },
    async editCategory(updatedCategory) {
      try {
        const response = await axiosData.put(
          `/Category/${updatedCategory.id}`,
          updatedCategory,
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
            },
          }
        );
        if (response.status === 200) {
          this.GetCategory();
          this.showEditCategory = false;
        }
      } catch (error) {
        console.error("Error updating category:", error);
      }
    },
    async deleteCategory(id) {
      try {
        const response = await axiosData.delete(`/Category/${id}`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
          },
        });
        if (response.status === 200) {
          this.GetCategory();
        }
      } catch (error) {
        console.error("Error deleting category:", error);
      }
    },
  },
};
</script>


<style scoped>
.btn_section {
  display: flex;
  justify-content: flex-end;
  margin: 30px 0;
}

.btn_section button {
  background-color: #4e8ff7;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.category_list {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: flex-start;
  padding: 0 20px;
}
</style>