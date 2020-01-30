/* eslint-disable no-unused-vars */
import Vue from 'vue'
import deepCopy from './deepCopy'
let eventBus = new Vue()
export function install(Vue) {
    Vue.prototype.$eventBus = eventBus
    Vue.prototype.$deepCopy = deepCopy
    Vue.prototype.$bigSize = 600
}

export default {
    deepCopy
}