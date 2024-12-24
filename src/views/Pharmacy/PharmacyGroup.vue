<template>
    <PageHeader :title="$t('pharmacy-group')" path="Pharmacy • Pharmacy List • Pharmacy Group"/>
    <div class="group-container">
        <div class="image_section">
            <img src="@/assets/Images/assets-35.png" alt="">
        </div>
        <div class="owner_section">
            <h2>Owner Data</h2>
            <hr style="width:20%; margin:3px;">
            <div class="owner_data">
                <div class="data_wrapper">
                    <div class="data_labels">
                        <p class="title">Full Name</p>
                        <p class="value">Waeel Mohammed</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PageHeader from '@/components/Cards/PageHeader.vue';
export default {
    components: {
        PageHeader,
    }
}
</script>

<style scoped>
    .group-container{
        width: 100%;
        background-color: #e6e6e6;
        padding: 20px;
        margin: 100px 0;
        border-radius: 10px;
        position: relative;
    }

    .group-container .image_section{
        position: absolute;
        top: -75px;
        left: 40px;
        border-radius: 50%;
        border: 4px solid #FFFFFF;
        overflow: hidden;
        width: 140px;
        height: 140px;
    }

    .image_section img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .group-container .owner_section{
        padding: 60px 10px 20px;
        font-family: var(--jakarta-font);
        font-weight: 600 ;
    }

    .owner_section .owner_data{
        padding: 15px 5px;
    }
    .owner_data .data_wrapper{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 15px;
        width: 100%;
    }

    .data_wrapper .data_labels{
        display: flex;
        flex-direction: column;
        gap: 3px;
        justify-content: start;
        align-items: flex-start;
        width: 50%;
    }

    .data_labels .title{
        font-size: 14px;
        color: #2933fab7;
    }
    .data_labels .value{
        font-size: 18px;
    }
</style>