<template>
  <div class="card_group_container">
    <div class="card_image">
        <img src="@/assets/Images/assets-35.png" alt="image">
        <img src="https://modernize-vuejs.adminmart.com/assets/user-1-CznVQ9Sv.jpg" class="user_image" alt="user Image">
    </div>
    <div class="card_content">
        <h3>{{ fullName }}</h3>
        <p>{{ email }}</p>
    </div>
    <div class="card_timing">
        <p>{{ expireDate }}</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .card_group_container{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 350px;
        height: 450px;
        border-radius: 10px;
        background-color: #ccc;
        overflow: hidden;
    }

    .card_group_container .card_image{
        width: 100%;
        height: 250px;
        position: relative;
    }

    .card_group_container .card_image img:first-child{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .card_image .user_image{
        width: 48px;
        border-radius: 50%;
        position: absolute;
        bottom: -20px;
        left: 30px;
        overflow: hidden;
    }
</style>