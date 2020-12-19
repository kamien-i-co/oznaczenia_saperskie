<template>

<div style="height: 100vh; width: 100%">
    <div style="height: 200px overflow: auto;">
    </div>
    <l-map
      v-if="showMap"
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
      style="height: 80%"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate"
    >
      <l-tile-layer
        :url="url"
        :attribution="attribution"
      />
      <l-marker v-bind:key="marker.name" v-for="marker in markers" :lat-lng="marker.latLng" :icon=icon >
        <l-popup>
            {{marker.name}}
        </l-popup>
      </l-marker>
    </l-map>
     <b-modal id="modal-1" title="Oznaczenia Saperskie" visible ok-only centered>
    <p class="my-4">Witaj na mapie oznaczeń saperskich</p>
  </b-modal>
  </div>

</template>

<script>
import { latLng } from "leaflet";
import L from 'leaflet';
import { LMap, LTileLayer, LMarker, LPopup } from "vue2-leaflet";

const markers = [
  {
    name: 'Skolimowska 3',
    latLng: latLng(52.21158,21.02177)
  },
  {
    name: 'Willowa 6',
    latLng: latLng(52.20749,21.02398)
  },
  {
    name: 'Wawelska 60',
    latLng: latLng(52.21651,20.98738)
  },
  {
    name: 'Białobrzeska 39',
    latLng: latLng(52.21705, 20.97651)
  },
  {
    name: 'Hołowki 3',
    latLng: latLng(52.20830, 21.04612)
  },
  {
    name: 'Grójecka 41',
    latLng: latLng(52.21706, 20.98273)
  },
  {
    name: 'Litewska 16',
    latLng: latLng(52.21701, 21.02028)
  },
]

export default {
  name: "Home",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup
  },
  data() {
    return {
      zoom: 14.5,
      center: latLng(52.20985, 21.00843),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      withPopup: latLng(52.230585, 21.020261),
      currentZoom: 15.5,
      currentCenter: latLng(47.41322, -1.219482),
      showParagraph: false,
      mapOptions: {
        zoomSnap: 0.5
      },
      showMap: true,
      markers,
      icon: new L.Icon({
          iconUrl: require('../assets/icon-unknown.svg'),
          iconRetinaUrl: require('../assets/icon-unknown.svg'),
          iconSize: new L.Point(50, 60),
          className: 'leaflet-div-icon'
      }),
    };
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    showLongText() {
      this.showParagraph = !this.showParagraph;
    },
    innerClick() {
      alert("Click!");
    }
  }
};
</script>

<style>

.leaflet-marker-icon {
     background: none;
     border: none;
     position: absolute;
 }

</style>
