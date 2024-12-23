import { defineStore } from 'pinia';
import axiosData from '@/Axios';

export const usePharmacyListStore = defineStore('pharmacy-list', {
  state: () => ({
    PharmacyList: [],
    loading: false,
    error: null,
  }),
  actions: {
    async fetchPharmacy() {
      this.loading = true;
      this.error = null;

      const loadingTimer = new Promise((resolve) => {
        setTimeout(resolve, 5000); // Ensure loading lasts at least 5 seconds
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
  },
});
