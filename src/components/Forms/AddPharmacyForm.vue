<template>
  <h2 style="text-align: center; margin: 10px">Add Pharmacy</h2>
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
        <!-- MapPicker Component -->
        <MapPicker
          @location-selected="onLocationSelected"
          :initial-center="{ lat: 33.3152, lng: 44.3661 }"
          :initial-zoom="12"
          class="map-picker"
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
import MapPicker from "@/components/Maps/MapPicker.vue";

export default {
  props: {
    groupId: {
      type: String,
      required: true,
    },
  },
  components: {
    MapPicker,
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

        this.pharmacyStore.PharmacyGroup(this.pharmacyData.groupId);

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
    onLocationSelected(location) {
      this.pharmacyData.location.lat = location.lat;
      this.pharmacyData.location.lng = location.lng;
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