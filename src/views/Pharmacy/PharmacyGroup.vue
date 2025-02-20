<template>
  <PageHeader
    :title="$t('pharmacy-group')"
    path="Pharmacy • Pharmacy List • Pharmacy Group"
  />
  <div v-if="loading" class="loading-container">
    <img
      src="@/assets/Images/assets-36.png"
      alt="Loading"
      class="loading-logo"
    />
  </div>
  <div v-else>
    <div class="group-container">
      <div class="image_section">
        <img :src="imagePath" alt="User Image" />
      </div>
      <div class="owner_section">
        <h2>Owner Data</h2>
        <hr
          style="
            border-color: #ccc;
            opacity: 1;
            border-style: solid;
            border-width: thin 0 0 0;
            height: 0px;
            width: 30%;
            margin: 5px 3px;
          "
        />
        <div class="owner_data">
          <div class="data_wrapper">
            <div class="data_labels">
              <p class="title">Full Name</p>
              <p class="value">{{ pharmacyGroup.owner.fullName }}</p>
            </div>
            <div class="data_labels">
              <p class="title">Email Address</p>
              <p class="value">{{ pharmacyGroup.owner.userName }}</p>
            </div>
          </div>
          <div class="data_wrapper">
            <div class="data_labels">
              <p class="title">Phone Number</p>
              <p class="value">
                {{
                  pharmacyGroup.owner.phoneNumber === null
                    ? $t("nothing")
                    : pharmacyGroup.owner.phoneNumber
                }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pharmacies_section">
      <PharmacyTable :Pharmacies="pharmacyGroup.pharmacies" :groupId="pharmacyGroup.id" />
    </div>
  </div>
</template>

<script>
import { usePharmacyListStore } from "@/Stores/PharmacyList";
import PageHeader from "@/components/Cards/PageHeader.vue";
import PharmacyTable from "@/components/Tables/PharmacyTable.vue";
export default {
  components: {
    PageHeader,
    PharmacyTable,
  },
  data() {
    return {
      pharmacyListStore: usePharmacyListStore(),
    };
  },
  created() {
    const pharmacyId = this.$route.params.id;
    if (pharmacyId) {
      this.pharmacyListStore.PharmacyGroup(pharmacyId);
    } else {
      console.error("Pharmacy ID not found in route params");
    }
  },
  computed: {
    pharmacyGroup() {
      return this.pharmacyListStore.PharmacyGroupItem;
    },
    loading() {
      return this.pharmacyListStore.loading;
    },
    error() {
      return this.pharmacyListStore.error;
    },
    imagePath() {
      const ownerImage = this.pharmacyGroup.owner?.image;
      return ownerImage
        ? `https://api.jayak.net/${ownerImage}`
        : require("@/assets/Images/Logo-35-350.png");
    },
  },
};
</script>

<style scoped>
.group-container {
  width: 100%;
  background-color: #f5f5f5;
  padding: 20px;
  margin: 100px 0 30px;
  border-radius: 10px;
  position: relative;
}

.group-container .image_section {
  position: absolute;
  top: -75px;
  left: 40px;
  border-radius: 50%;
  border: 4px solid #ffffff;
  overflow: hidden;
  width: 140px;
  height: 140px;
}

.image_section img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.group-container .owner_section {
  padding: 60px 10px 20px;
  font-family: var(--jakarta-font);
  font-weight: 600;
}

.owner_section .owner_data {
  padding: 15px 5px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.owner_data .data_wrapper {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  width: 100%;
}

.data_wrapper .data_labels {
  display: flex;
  flex-direction: column;
  gap: 3px;
  justify-content: start;
  align-items: flex-start;
  width: 50%;
}

.data_labels .title {
  font-size: 14px;
  color: #2933fab7;
}
.data_labels .value {
  font-size: 18px;
}

.pharmacies_section {
  box-shadow: #919eab4d 0 0 2px, #919eab1f 0 12px 24px -4px !important;
  padding: 20px;
  border-radius: 10px;
}

.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
}

.loading-logo {
  width: 150px;
  animation: rotateLogo 2s linear infinite;
}

@keyframes rotateLogo {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>