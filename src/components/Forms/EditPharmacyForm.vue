<template>
  <h2 style="text-align: center; margin: 10px">Edit Pharmacy</h2>
  <form @submit.prevent="UpdatePharmacy">
    <div class="form-group">
      <f-input
        :label="$t('pharmacy-name')"
        v-model="pharmacyData.pharmacyName"
      />
      <fieldset class="location-section">
        <legend>{{ $t("location") }}</legend>
        <f-input :label="$t('address')" v-model="pharmacyData.address" />
        <div class="form-row">
          <f-input
            :label="$t('latitude')"
            v-model="pharmacyData.lat"
            type="number"
            step="any"
          />
          <f-input
            :label="$t('longitude')"
            v-model="pharmacyData.lng"
            type="number"
            step="any"
          />
        </div>
      </fieldset>
      <div class="form-row">
        <f-input
          :label="$t('price')"
          v-model="pharmacyData.price"
          type="number"
          step="any"
        />
        <f-input
          :label="$t('discount')"
          v-model="pharmacyData.discount"
          type="number"
          step="any"
        />
      </div>
      <f-input
        :label="$t('expire-date')"
        v-model="pharmacyData.expiryDate"
        type="date"
      />
    </div>
    <button type="submit" class="btn-submit">
      {{ $t("update") }}
    </button>
  </form>
</template>
  
<script>
import axiosData from "@/Axios";
import { usePharmacyListStore } from "@/Stores/PharmacyList";

export default {
  props: {
    pharmacyId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      pharmacyStore: usePharmacyListStore(),
      pharmacyData: {
        pharmacyName: "",
        location: {
          lat: null,
          lng: null,
          address: "",
        },
        price: null,
        discount: null,
        expiryDate: "",
      },
    };
  },
  created() {
    this.loadPharmacyData();
    this.pharmacyStore.PharmacyItem;
  },
  watch: {
    "pharmacyStore.PharmacyItem": {
      handler(newItem) {
        if (newItem) {
          this.pharmacyData = {
            pharmacyName: newItem.name || "",
            location: {
              lat: newItem.lat || null,
              lng: newItem.lng || null,
              address: newItem.adress || "",
            },
            price: newItem.price || null,
            discount: newItem.discount || null,
            expiryDate: newItem.expiryDate || "",
          };
        }
      },
      immediate: true,
    },
  },
  methods: {
    async loadPharmacyData() {
      try {
        await this.pharmacyStore.PharmacyData(this.pharmacyId);
      } catch (error) {
        console.error("Failed to load pharmacy data:", error);
      }
    },
    async postPharmacy() {
      try {
        const formattedExpiryDate = this.pharmacyData.expiryDate
          ? new Date(this.pharmacyData.expiryDate).toISOString()
          : null;

        const payload = {
          name: this.pharmacyData.pharmacyName,
          lat: this.pharmacyData.lat,
          lng: this.pharmacyData.lng,
          address: this.pharmacyData.address,
          price: this.pharmacyData.price,
          discount: this.pharmacyData.discount,
          expiryDate: formattedExpiryDate,
        };

        const response = await axiosData.put(
          "/Pharmacy/update-pharmacy",
          payload
        );

        console.log("Pharmacy updated successfully:", response.data);

        await this.pharmacyStore.PharmacyGroup(this.pharmacyId);

        this.resetForm();
      } catch (error) {
        console.error("Failed to update pharmacy:", error);
      }
    },
    async UpdatePharmacy() {
      try {
        const response = await axiosData.put(
          `/Pharmacy/update-pharmacy/${this.pharmacyId}`,
          this.pharmacyData
        );

        console.log(response.statusCode);
        this.pharmacyStore.fetchPharmacy();
      } catch (error) {
        console.error("Failed to update pharmacy:", error);
      }
    },
    resetForm() {
      this.pharmacyData = {
        pharmacyName: "",
        lat: null,
        lng: null,
        address: "",
        price: null,
        discount: null,
        expiryDate: "",
      };
    },
  },
};
</script>
    
  
  <style scoped>
.location-section {
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  width: 90%;
}

.form-row {
  display: flex;
  margin-top: 10px;
}

.form-row .input_group {
  display: flex;
  width: 45%;
}

.btn-submit {
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 20px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.btn-submit:hover {
  background-color: #0056b3;
}
</style>