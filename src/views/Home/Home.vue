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
      <l-marker v-bind:key="marker.name" v-for="marker in markers" :lat-lng="marker.latLng" :icon=icons[marker.state] >
        <l-popup>
            <p>Adres: {{marker.name}}</p>
            <p>Stan: <strong>{{state[marker.state]}}</strong> </p>
            
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
import { LMap, LTileLayer, LMarker, LPopup } from "vue2-leaflet";
import { markers, state} from './data';
import L from 'leaflet';

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
      state,
      icons: {
        unknown: new L.Icon({
          iconUrl: require('../../assets/icon-unknown.svg'),
          iconRetinaUrl: require('../../assets/icon-unknown.svg'),
          iconSize: new L.Point(50, 60),
          className: 'leaflet-div-icon'
      }),
      veryGood: new L.Icon({
          iconUrl: require('../../assets/icon-veryGood.svg'),
          iconRetinaUrl: require('../../assets/icon-veryGood.svg'),
          iconSize: new L.Point(50, 60),
          className: 'leaflet-div-icon'
      }),
    veryBad: new L.Icon({
        iconUrl: require('../../assets/icon-veryBad.svg'),
        iconRetinaUrl: require('../../assets/icon-veryBad.svg'),
        iconSize: new L.Point(50, 60),
        className: 'leaflet-div-icon'
    }),
    destroyed: new L.Icon({
        iconUrl: require('../../assets/icon-destroyed.svg'),
        iconRetinaUrl: require('../../assets/icon-destroyed.svg'),
        iconSize: new L.Point(50, 60),
        className: 'leaflet-div-icon'
    })
      }
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
