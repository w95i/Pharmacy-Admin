<template>
    <h2 style="text-align: center; margin: 10px">{{ $t('add-category') }}</h2>
    <form @submit.prevent="AddCategory">
      <div class="form-group">
        <f-input
          :label="$t('category-name')"
        />
      </div>
      <button type="submit" class="btn-submit">
        {{ $t("update") }}
      </button>
    </form>
  </template>
  
  <script>
//   import axiosData from "@/Axios";
  
  export default {
    props: {
    },
    data() {
      return {
      };
    },
    created() {
    },
    methods: {
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
  