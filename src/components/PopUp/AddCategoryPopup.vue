<template>
  <div class="popup-container">
    <div class="popup-wrapper">
      <div class="popup-header">
        <font-awesome-icon
          :icon="['fas', 'x']"
          class="close-icon"
          @click="$emit('close-popup')"
        />
      </div>
      <div class="popup-contact">
        <AddCategoryForm :groupId="groupId" @close-popup="$emit('close-popup')" @refresh-categories="$emit('refresh-categories')" />
      </div>
    </div>
  </div>
</template>
  
  <script>
import AddCategoryForm from "../Forms/AddCategoryForm.vue";
export default {
  emits: ["close-popup" , "refresh-categories"],
  components: {
    AddCategoryForm,
  },
};
</script>
  
  <style scoped>
.popup-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  font-family: var(--jakarta-font);
  overflow-y: auto;
}

.popup-container .popup-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -45%);
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  min-width: 700px;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.popup-header {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

.popup-contact {
  width: 100%;
  padding: 20px 10px 0;
}

.close-icon {
  cursor: pointer;
  font-size: 1.2rem;
  color: #333;
}

.close-icon:hover {
  color: red;
}
</style>