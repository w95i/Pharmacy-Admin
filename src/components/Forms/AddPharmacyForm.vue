<template>
  <form @submit.prevent="postPharmacy">
    <div class="form-group">
      <f-input
        :label="$t('pharmacy-name')"
        v-model="pharmacyData.pharmacyName"
      />
      <fieldset class="location-section">
        <legend>{{ $t("location") }}</legend>
        <f-input
          :label="$t('address')"
          v-model="pharmacyData.location.address"
        />
        <div class="form-row">
          <f-input
            :label="$t('latitude')"
            v-model="pharmacyData.location.lat"
            type="number"
            step="any"
          />
          <f-input
            :label="$t('longitude')"
            v-model="pharmacyData.location.lng"
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
      {{ $t("submit") }}
    </button>
  </form>
</template>
  

  <script>
import axiosData from "@/Axios";
import { usePharmacyListStore } from "@/Stores/PharmacyList";

export default {
  props: {
    groupId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      pharmacyStore: usePharmacyListStore(),
      pharmacyData: {
        groupId: this.groupId, // Use prop for initialization
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
  methods: {
    async postPharmacy() {
      const formattedExpiryDate = this.pharmacyData.expiryDate
        ? new Date(this.pharmacyData.expiryDate).toISOString()
        : null;
      try {
        const payload = {
          groupId: this.pharmacyData.groupId,
          name: this.pharmacyData.pharmacyName,
          location: {
            lat: this.pharmacyData.location.lat,
            lng: this.pharmacyData.location.lng,
            address: this.pharmacyData.location.address,
          },
          price: this.pharmacyData.price,
          discount: this.pharmacyData.discount,
          expiryDate: formattedExpiryDate,
        };

        const response = await axiosData.post(
          "/Pharmacy/create-pharmacy",
          payload
        );

        console.log("Response:", response.data);

        this.pharmacyStore.PharmacyGroup(this.pharmacyData.groupId)

        this.resetForm();
      } catch (error) {
        console.error(error);
      }
    },
    resetForm() {
      this.pharmacyData = {
        groupId: this.groupId,
        pharmacyName: "",
        location: {
          lat: null,
          lng: null,
          address: "",
        },
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