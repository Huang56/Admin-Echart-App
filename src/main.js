import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import './assets/style/index.scss'
import router from './router/index'
import store from './store/index' // vuex
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
