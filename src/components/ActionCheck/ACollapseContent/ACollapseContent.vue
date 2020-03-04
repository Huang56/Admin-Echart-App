<template>
  <div class="a-list-container">
    <div class="a-collapse-header">
      <i :class="icon" />
      <div class="a-collapse-title">{{ title }}</div>
    </div>
    <template v-for="(topVal, key, index) in text">
      <div class="a-row" :key="key + index">
        <span class="a-row-item a-row-key">{{ key }}</span>
        <div class=" a-row-item a-row-value">{{ topVal }}</div>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  name: 'ACollapseContent',
  props: {
    activeNames: {
      type: [Array],
      default: () => []
    },
    icon: {
      type: [String, Number],
      default: () => 'el-collapse-item__arrow'
    },
    title: {
      type: [String, Number],
      default: () => 'title'
    },
    name: {
      type: [String, Number],
      default: () => 'title'
    },
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
  data() {
    return {}
  },
  methods: {
    handleChange(val) {
      console.log(val)
    }
  },
  mounted() {
    console.log('AJsonList')
  }
}
</script>
<style lang="scss" scoped>
.a-list-container {
  .a-row {
    display: flex;
    height: 48px;
    line-height: 48px;
    border-top: 1px solid #ebeef5;
    border-bottom: 1px solid #ebeef5;
    margin-bottom: -1px;
    .a-row-item {
      flex: 1;
      flex-basis: 50%;
      text-align: left;
      min-width: 50%;
    }
  }
}
/deep/.el-collapse-item__content {
  padding: 0;
}
/deep/.el-collapse-item__arrow {
  margin: 0 6px;
}
</style>
