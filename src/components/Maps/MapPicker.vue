<template>
  <div class="map-picker">
    <GMapMap
      :center="center"
      :zoom="zoom"
      style="width: 100%; height: 250px;"
      @click="handleMapClick"
    >
      <GMapMarker v-if="markerPosition" :position="markerPosition" />
    </GMapMap>
  </div>
</template>

<script>
import { GMapMap, GMapMarker } from "@fawmi/vue-google-maps";

export default {
  name: "MapPicker",
  components: {
    GMapMap,
    GMapMarker,
  },
  props: {
    initialCenter: {
      type: Object,
      default: () => ({
        lat: 33.3152,
        lng: 44.3661,
      }),
    },
    initialZoom: {
      type: Number,
      default: 12,
    },
    markerPositionEditor: {
      type: Object,
      default: () => null,
    },
  },
  emits: ["location-selected"],
  data() {
    return {
      center: this.markerPositionEditor || this.initialCenter,
      zoom: this.initialZoom,
      markerPosition: this.markerPositionEditor || this.initialCenter,
    };
  },
  watch: {
    markerPositionEditor: {
      immediate: true,
      handler(newPosition) {
        if (newPosition) {
          this.center = newPosition;
          this.markerPosition = newPosition;
        }
      },
    },
  },
  methods: {
    handleMapClick(event) {
      const latLng = event.latLng;
      if (latLng) {
        const lat = latLng.lat();
        const lng = latLng.lng();
        this.markerPosition = { lat, lng };
        this.$emit("location-selected", this.markerPosition);
      }
    },
  },
};
</script>

<style scoped>
.map-picker {
  margin: 20px 0;
}

.coordinates {
  margin-top: 10px;
  font-size: 14px;
  color: #555;
}
</style>
