<template>
  <div class="dashboard_card_container" :style="CardStyle">
    <div class="card_content">
        <slot name="card_logo">
            <img :src="logoImg" alt="">
        </slot>
        <div class="titles_card">
            <p>{{ title }}</p>
            <p>{{ description }}</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
props:{
    logoImg:{
        type: String ,
        default: "",
    },
    title:{
        type: String ,
        default: "",
    },
    description:{
        type: String ,
        default: "",
    },
    bgColor:{
        type: String ,
        default: "#ECF2FF",
    },
    fontColor:{
        type: String ,
        default: "#5E87FF",
    }
},
computed:{
    CardStyle(){
        return `background-color: ${this.bgColor}; color: ${this.fontColor};`
    }
}
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');
    .dashboard_card_container{
        display: flex;
        justify-content: center;
        width: 165px;
        height: 160px;
        border-radius: 10px;
        text-align: center;
        padding: 24px;
    }
    .dashboard_card_container .card_content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
    }
    .card_content img{
        width: 48px;
        height: 48px;
    }
    .card_content .titles_card{
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
    .card_content .titles_card p{
        font-family: "Plus Jakarta Sans", sans-serif;
        font-size: 16px;
        line-height: 18px;
        font-weight: 700;
    }
    .card_content .titles_card p:nth-child(2){
        font-size: 22px;
    }
</style>