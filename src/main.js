import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import './assets/style/index.scss'
import router from './router/index'
import store from './store/index' // vuex
import ElementUI from 'element-ui'

import './common' // 加载一次即可

import locale from 'element-ui/lib/locale/lang/en'

Vue.use(ElementUI, { locale })

import './mock' // 加载一次即可
Vue.config.productionTip = false
// eslint-disable-next-line no-console

// console.log(process);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
