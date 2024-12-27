<template>
  <div class="page_container" v-if="!isGroupView">
    <PageHeader :title="$t('pharmacy-list')" path="DashBoard • Pharmacy • Pharmacy Groups"/>
    <div class="groups_wrapper">
        <GroupPharmacy :pharmacyList="pharmacyList" :loading="loading" :error="error"/>
    </div>
  </div>
  <div class="page_container" v-else>
    <router-view />
  </div>
</template>

<script>
import { usePharmacyListStore } from '@/Stores/PharmacyList';
import GroupPharmacy from '@/components/Cards/GroupPharmacy.vue';
import PageHeader from '@/components/Cards/PageHeader.vue';

export default {
  components: {
    PageHeader,
    GroupPharmacy,
  },
  data() {
    return {
      pharmacyListStore: usePharmacyListStore(),
    };
  },
  created() {
    this.pharmacyListStore.fetchPharmacy();
  },
  computed: {
    pharmacyList() {
      return this.pharmacyListStore.PharmacyList;
    },
    loading() {
      return this.pharmacyListStore.loading;
    },
    error() {
      return this.pharmacyListStore.error;
    },
    isGroupView() {
      return this.$route.name === 'pharmacy-group';
    },
  },
};
</script>



<style scoped>
    .groups_wrapper{
        padding: 45px 15px;
    }
</style>