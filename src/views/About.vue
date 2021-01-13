<template>
  <div class="about">
    <div class="d-flex flex-row justify-content-center mb-3">
      <img class="logo" src="../assets/logo-full-white.svg">
    </div>
    <b-container class="px-sm-5" fluid="lg">
      <b-row>
        <b-col></b-col>
        <b-col md="8">
          <p class="project-description">{{text.p1}}</p>
          <img class="img-desc mb-2" src="../assets/glogowa27.jpg">
          <p class="project-description">{{text.p2}}</p>

          <img class="img-desc mb-2" src="../assets/Saperzy_1945.jpg">
          <p class="project-description">{{text.p3}}</p>
          
          <p class="project-description">{{text.p4}}</p>
          
          <p class="project-description">{{text.p5}}</p>
          <p class="project-description">{{text.p6}}</p>
        </b-col>
        <b-col>
        </b-col>
      </b-row>
    </b-container>
    
  </div>
</template>

<script>
import {text} from './about.content';

// system link do appleMaps / gMaps
// center on geolocation

export default {
  name: "About",
  data() {
    return {
      text,
    }
  }
}
</script>

<style>



@media (max-width: 768px) {
  
  .logo {
    width: 75%;
  }
  
}

@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {
  .logo {
    width: 50%;
  }
}

@media (min-width: 1024px) {
  
  .logo {
    width: 25%;
  }
  
}

.project-description {
  color: #fff;
}

.img-desc {
  width: 100%;
}

</style>