import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

// Import CSS files for Bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
})
