<template>
  <button class="geolocation-btn">
    <img src="../assets/gps.svg">
  </button>
</template>

<script>
export default {
  name: 'GeolocationBtn',
  props: {
    onClick: Function
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.geolocation-btn {
    width: 50pt;
    height: 50pt;
    border-radius: 50%;
    border: 0px;
    box-shadow: 1px 2px #AAA;
    background: #FFF;
}

.geolocation-btn img {
    width: 50%;
    height: 50%;
}
</style>
