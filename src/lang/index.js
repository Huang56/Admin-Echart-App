import Vue from 'vue'
import VueI18n from 'vue-i18n'
// import ElementUI from 'element-ui'
import elementEn from 'element-ui/lib/locale/lang/en'
import elementZh from 'element-ui/lib/locale/lang/en'
import enCode from './en'
import zhCode from './zh'

// Vue.use(ElementUI, { locale })
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: '中文', // 语言标识
  // this.$i18n.locale // 通过切换 locale 的值来实现语言切换
  messages: {
    // js 方式
    中文: {
      ...zhCode,
      ...elementZh
    }, // 中文语言包
    English: {
      ...enCode,
      ...elementEn
    } // 英文语言包
  }
})

export default i18n
