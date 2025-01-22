<template>
  <h2 style="text-align: center; margin: 10px">{{ $t("add-category") }}</h2>
  <form @submit.prevent="AddCategory">
    <div class="form-group">
      <f-input :label="$t('category-name')" v-model="name" />
    </div>
    <div class="form-group">
      <textarea type="textarea" v-model="details" rows="5" cols="75"></textarea>
    </div>
    <button type="submit" class="btn-submit">
      {{ $t("submit") }}
    </button>
  </form>
</template>
  
  <script>
import axiosData from "@/Axios";

export default {
  props: {},
  data() {
    return {
      name: "",
      details: "",
    };
  },
  created() {},
  methods: {
    async AddCategory() {
      try {
        const response = await axiosData.post("/Category", {
          name: this.name,
          details: this.details,
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
          },
        });
        if (response.status === 200) {
          this.$emit("close-popup");
          this.$emit("refresh-categories");
          this.name = "";
          this.details = "";
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
  
  <style scoped>
.btn-submit {
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 20px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.btn-submit:hover {
  background-color: #0056b3;
}
</style>
  