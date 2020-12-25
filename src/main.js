import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import 'leaflet/dist/leaflet.css';
import './plugins/bootstrap-vue'
import './plugins/modulator'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
