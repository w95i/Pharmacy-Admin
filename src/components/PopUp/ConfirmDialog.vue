<template>
    <div v-if="isVisible" class="modal-overlay">
      <div class="modal-content">
        <h3>{{ title }}</h3>
        <p>{{ message }}</p>
        <div class="modal-actions">
          <button @click="confirm" class="confirm-button">Yes</button>
          <button @click="cancel" class="cancel-button">No</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        default: "Are you sure?",
      },
      message: {
        type: String,
        default: "This action cannot be undone.",
      },
      isVisible: {
        type: Boolean,
        required: true,
      },
    },
    methods: {
      confirm() {
        this.$emit("confirm");
      },
      cancel() {
        this.$emit("cancel");
      },
    },
  };
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    max-width: 400px;
    width: 90%;
  }
  .modal-actions {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
  }
  .confirm-button {
    background-color: #3085d6;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
  .cancel-button {
    background-color: #d33;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>
  