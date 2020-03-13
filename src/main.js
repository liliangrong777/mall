import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import VueLazyLoad from 'vue-lazyload'
import FastClick from 'fastclick'

Vue.use(VueLazyLoad)

Vue.prototype.$bus = new Vue()
Vue.config.productionTip = false

FastClick.attach(document.body)
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
