<template>
  <div class="page_container">
    <PageHeader title="Pharmacy List" path="DashBoard • Pharmacy • Pharmacy List"/>
    <div class="groups_wrapper">
        <GroupPharmacy />
    </div>
  </div>
</template>

<script>
import GroupPharmacy from '@/components/Cards/GroupPharmacy.vue';
import PageHeader from '@/components/Cards/PageHeader.vue';

export default {
components:{
    PageHeader,
    GroupPharmacy,
}
}
</script>

<style scoped>
    .groups_wrapper{
        padding: 45px 15px;
    }
</style>