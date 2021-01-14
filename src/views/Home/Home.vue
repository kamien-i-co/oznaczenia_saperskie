<template>

<div style="height: 90vh; width: 100%">
    <div style="height: 200px overflow: auto;">
    </div>
    <l-map
      ref="map"
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
            <p>Adres: <a :href="`${isIOS ? 'maps' : 'https'}://www.google.com/maps/search/?api=1&query=${marker.latLng.lat},${marker.latLng.lng}`" target="_blank">{{marker.name}}</a></p>
            <p>Stan: <strong>{{state[marker.state]}}</strong> </p>
            <p v-if="marker.description">{{marker.description}}</p>
            
        </l-popup>
      </l-marker>
      <l-marker v-bind:key="'gps'"  v-if="gps"  :lat-lng="gps" :icon=icons.gps > 
      </l-marker>
    </l-map>
     <vue-modaltor :visible="open" @hide="hideModal" animationParent="none">
          
          <div class="d-flex flex-row justify-content-center">
            <img class="logo--modal" src="../../assets/logo-full.svg">
          </div>
      <p class="mx-5 mt-5">{{content.popupTitle}}</p>    
      <p class="mx-5">
        {{content.popupP1}}
      </p>
    </vue-modaltor>
<div class="geobtn-container">
  <geolocation @click.native="geolocate()" />
</div>

<!-- <button @click="open=true">modal-basic</button> -->
  </div>

</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LPopup } from "vue2-leaflet";
import { markers, state, content} from './data';
import L from 'leaflet';
import Geolocation from '../../components/GeolocatioBtn';

// system link do appleMaps / gMaps
// center on geolocation

export default {
  name: "Home",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    Geolocation
  },
  data() {
    return {
      center: latLng(52.2169, 21.0210),
      content,
      gps: null,
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
      open: true,
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
    }),
    gps: new L.Icon({
        iconUrl: require('../../assets/gps-marker.svg'),
        iconRetinaUrl: require('../../assets/gps-marker.svg'),
        iconSize: new L.Point(30, 40),
        className: 'leaflet-div-icon'
    }),
    
      },
      zoom: 14.5,
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
    hideModal() {
      this.open = false;
      localStorage.closed = true;
    },
    geolocate() {
      const { lat, lng } = this.gps;
      this.$refs.map.mapObject.flyTo([lat, lng ])
    },
    trackPosition() {
      if (navigator.geolocation) {
        navigator.geolocation.watchPosition(this.successPosition, this.failurePosition, {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        })
      }
    },
    successPosition: function(position) {
      this.gps = latLng(position.coords.latitude, position.coords.longitude);
    },
    failurePosition: function(err) {
      console.log('Error Code: ' + err.code + ' Error Message: ' + err.message)
    },
  },
  mounted() {
    this.trackPosition()
  },
  computed: {
    isIOS: () => {
      if( (navigator.platform.indexOf("iPhone") !== -1) 
        || (navigator.platform.indexOf("iPod") !== -1)
        || (navigator.platform.indexOf("iPad") !== -1)) {
          return true;
        }
      return;
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

 .modal-vue-wrapper {
   z-index: 10000 !important;
 }

 .modal-vue-overlay {
   background-color: rgba(124,124, 124 , 0.8) !important;
 }

 .modal-vue-panel.modal-fade.modal-vue-show {
   background-color: rgba(255, 255, 255, 1) !important;
   width: 50% !important;
 }

@media (max-width: 1024px) {
  
  .modal-vue-panel.modal-fade.modal-vue-show {
    width: 80% !important;
  }
  
}

.logo--modal {
  width: 50%;
  height: 100% !important;
}

.vue2leaflet-map {
  height: 100% !important;
}

.geobtn-container {
  position: absolute;
  z-index: 10001;
  bottom: 10px;
  right: 10px;
}


</style>
