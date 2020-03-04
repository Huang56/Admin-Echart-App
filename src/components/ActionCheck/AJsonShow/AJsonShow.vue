<template>
  <div class="a-json-container">
    <span class="a-cursor" @click="click(showText)">复制</span>
    <pre style="user-select: auto;">{{ showText }}</pre>
  </div>
</template>
<script>
export default {
  name: 'AJsonShow',
  props: {
    text: {
      type: [Object, String],
      default: () => {
        return {
          __seq_id: 0,
          server_time: 1582692539,
          event_type: 'origin',
          __log_type: 'pb_event',
          event_name: '',
          __rnd: 'pb0000',
          header: {
            _event_version: 'v3',
            os_name: 'ios',
            app_name: 'tea_app_demo_tob',
            device_model: 'iphone 7 plus',
            _caller: 'demotea',
            _trace_id: '',
            __os: 'ios',
            app_channel: 'toutiao_channel',
            network_type: 'mobile',
            access: 'mobile',
            os_version: '4.2.1',
            __app_version: 'unknown',
            aid: 151653,
            app_version: 'unknown',
            os: 'ios',
            product_name: 'default_to_b',
            channel: 'toutiao_channel',
            product_id: 0
          },
          params: {
            code_id: 101231,
            ad_type: '激励视频',
            scene_lev: 0,
            lev: 96,
            scene_id: 1000,
            user: '1018642914'
          },
          user: {
            user_unique_id: '1018642914',
            user_is_auth: 1,
            uid: 0,
            user_is_login: 1
          },
          time: 1582692539,
          __key:
            '{mario_event:151653:1018642914}1582692539:151653:tea_app_demo_tob:gt_ad_request::pb0000:json+3',
          event: 'gt_ad_request',
          local_time_ms: 1582692539000
        }
      }
    }
  },
  computed: {
    showText: {
      get() {
        return JSON.parse(JSON.stringify(this.text))
      }
    }
  },
  methods: {
    click(data) {
      this.copyToClipboard(data)
      this.$emit('copyText', 'sucess')
    },
    copyToClipboard(data) {
      let text = JSON.stringify(data)
      if (text.indexOf('-') !== -1) {
        const arr = text.split('-')
        text = arr[0] + arr[1]
      }
      var textArea = document.createElement('textarea')
      textArea.style.position = 'fixed'
      textArea.style.top = '0'
      textArea.style.left = '0'
      textArea.style.width = '2em'
      textArea.style.height = '2em'
      textArea.style.padding = '0'
      textArea.style.border = 'none'
      textArea.style.outline = 'none'
      textArea.style.boxShadow = 'none'
      textArea.style.background = 'transparent'
      textArea.value = text
      document.body.appendChild(textArea)
      textArea.select()
      let result
      try {
        result = document.execCommand('copy')
      } catch (err) {
        result = err
      }

      document.body.removeChild(textArea)
      return result
    }
  }
}
</script>
<style lang="scss" scoped>
.a-json-container {
  position: relative;
  display: flex;
  .a-cursor {
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
    font-size: inherit;
  }
}
pre {
  margin-top: 0;
  margin-bottom: 1em;
  overflow: auto;
  text-align: left;
}
</style>
