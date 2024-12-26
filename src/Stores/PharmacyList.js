import { defineStore } from 'pinia';
import axiosData from '@/Axios';

export const usePharmacyListStore = defineStore('pharmacy-list', {
  state: () => ({
    PharmacyList: [],
    PharmacyGroupItem:{},
    PharmacyItem:{},
    loading: false,
    error: null,
  }),
  actions: {
    async fetchPharmacy() {
      this.loading = true;
      this.error = null;

      const loadingTimer = new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });

      try {
        const response = await axiosData.get('/Pharmacy/get-groups');
        this.PharmacyList = response.data.data;

        // Wait for the timer and API call to finish
        await loadingTimer;
      } catch (error) {
        console.error('Error fetching categories:', error);
        this.error = 'Failed to fetch categories';

        // Ensure loading timer is still respected even on error
        await loadingTimer;
      } finally {
        this.loading = false;
      }
    },
    async PharmacyGroup(id){
      this.loading = true;
      this.error = null;

      const loadingTimer = new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });

      try{
        const response = await axiosData.get(`/Pharmacy/get-group/${id}`);
        this.PharmacyGroupItem = response.data;

        await loadingTimer;
      } catch(error) {
        console.error('Error fetching categories:', error);
        this.error = 'Failed to fetch categories';

        await loadingTimer;
      } finally{
        this.loading = false;
      }
    },
    async PharmacyData(id){
      try{
        const response = await axiosData.get(`/Pharmacy/get-pharmacy/${id}`);
        this.PharmacyItem = response.data;
        console.log(this.PharmacyItem);
      } catch(error) {
        console.error('Error fetching categories:', error);
        this.error = 'Failed to fetch categories';

      } finally{
        this.loading = false;
      }
    }
  },
});
