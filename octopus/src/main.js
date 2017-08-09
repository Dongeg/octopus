// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import util from './assets/js/util'
import data from './assets/js/data'
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.use(util)
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
