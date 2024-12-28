<template>
    <div>
      <h1>Pick a Location</h1>
      <MapPicker @location-selected="onLocationSelected" />
      <div v-if="selectedLocation" class="selected-location">
        <p>Selected Latitude: {{ selectedLocation.lat }}</p>
        <p>Selected Longitude: {{ selectedLocation.lng }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import MapPicker from "@/components/Maps/MapPicker.vue";
  
  export default {
    components: {
      MapPicker,
    },
    data() {
      return {
        selectedLocation: null,
      };
    },
    methods: {
      onLocationSelected(location) {
        this.selectedLocation = location;
        console.log("Selected Location:", location);
      },
    },
  };
  </script>
  
  <style scoped>
  .selected-location {
    margin-top: 20px;
    font-size: 16px;
  }
  </style>
  