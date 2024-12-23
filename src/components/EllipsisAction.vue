<template>
  <div class="card_action" @click="toggleEllipsis">
    <font-awesome-icon :icon="['fas', 'ellipsis-vertical']" />
    <div v-if="ShowEllipsis" class="ellipsis-dropdown">
      <ul>
        <li @click="navigateTo('edit-group')">
          <p>Edit Group</p>
        </li>
        <li @click="deleteGroup()">
          <p>Delete Group</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ShowEllipsis: false,
    };
  },
  methods: {
    toggleEllipsis() {
      this.ShowEllipsis = !this.ShowEllipsis;
    },
    navigateTo(page) {
      this.$router.push({ name: page });
    },
  },
};
</script>

<style scoped>
.card_action{
    position: relative;
}
.card_action svg{
    color: white;
}
.ellipsis-dropdown {
  position: absolute;
  top: 30px;
  left: 0;
  background: #fff;
  border: 1px solid #ddd;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 160px;
  z-index: 10;
  overflow: hidden;
}

.ellipsis-dropdown ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .ellipsis-dropdown li {
    padding: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 12px;
  }
  
  .ellipsis-dropdown li:hover {
    background-color: #f5f5f5;
  }
</style>