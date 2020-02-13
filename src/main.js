import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import './assets/style/index.scss'
import router from './router/index'
import store from './store/index' // vuex
import i18n from './lang/index' // vuex
import ElementUI from 'element-ui'
import Bus from './common/libs/bus'
Vue.use(Bus)
import './common' // 加载一次即可

import './mock' // 加载一次即可
Vue.config.productionTip = false
Vue.use(ElementUI, {
  i18n: (key, value) => {
    i18n.t(key, value)
  }
})
// console.log(process);

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
