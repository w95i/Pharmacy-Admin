<template>
    <div class="page_container">
        <PageHeader :title="$t('create-pharmacy')" path="DashBoard • Pharmacy • New Group" />
        <div class="add_group_wrapper">
            <AddGroupPharmacy />
        </div>
    </div>
</template>

<script>
import PageHeader from '@/components/Cards/PageHeader.vue';
import AddGroupPharmacy from '@/components/Forms/AddGroupPharmacy.vue';
export default {
components:{
    PageHeader,
    AddGroupPharmacy
}
}
</script>

<style scoped>
    .add_group_wrapper{
        margin-top: 50px;
        border-radius: 15px;
        padding:75px 35px;
        box-shadow: 0 0 5px #ccc;
    }
</style>