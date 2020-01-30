/* eslint-disable no-console */
import Vue from 'vue'

import comp from './comp'
import directives from './directives'
import * as helper from './directives'
// 注册函数：
function _forEachObjecj(obj, projection){
    try {
        Object.keys(obj).forEach( key => {
            projection && projection(obj[key], key)
        })
    } catch (e) {
        console.log(e, '指令或组件注册失败')
    }
}

// 组件
_forEachObjecj(comp, (item) => {
    Vue.component(item.name, item)
})

// 指令
_forEachObjecj(directives, (item) => {
    Vue.directive(item.name, item)
})

// 属性和方法：
Vue.use(helper)

export default {
    directives
}