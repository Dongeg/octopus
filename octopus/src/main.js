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


router.beforeEach((to, from, next) => {
  store.dispatch("showAnimate",true);
  next()
})
router.afterEach((to, from) => {
  setTimeout(function () {
    store.dispatch("showAnimate",false);
  },300)

  document.body.scrollTop = document.documentElement.scrollTop = 0;
})



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
