<template>
  <div class="a-list-container">
    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick">
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>{{ node.label }}</span>
        <span>
          {{ data.text }}
        </span>
      </span>
    </el-tree>
  </div>
</template>

<script>
export default {
  props: {
    jsonObj: {
      type: [Object],
      default: () => {
        return {
          __seq_id: 0,
          server_time: 1583361189,
          event_type: 'origin',
          __log_type: 'pb_event',
          event_name: '',
          __rnd: 'pb0000',
          header: {
            _event_version: 'v3',
            os_name: 'ios',
            app_name: 'tea_app_demo_tob',
            device_model: 'iphone 6s',
            _caller: 'demotea',
            _trace_id: '',
            __os: 'ios',
            app_channel: 'xiaomi_channel',
            network_type: '3g',
            access: '3g',
            os_version: '10.0.0',
            __app_version: 'unknown',
            aid: 151653,
            app_version: 'unknown',
            os: 'ios',
            product_name: 'default_to_b',
            channel: 'xiaomi_channel',
            product_id: 0
          },
          params: {
            happened_hour: 6,
            user: '1018638019'
          },
          user: {
            user_unique_id: '1018638019',
            user_is_auth: 1,
            uid: 0,
            user_is_login: 1
          },
          time: 1583361189,
          __key:
            '{mario_event:151653:1018638019}1583361189:151653:tea_app_demo_tob:any_event::pb0000:json+0',
          event: 'any_event',
          local_time_ms: [
            {
              user_unique_id: '1018638019',
              user_is_auth: 1,
              uid: 0,
              user_is_login: 1
            },
            {
              user_unique_id: '1018638019',
              user_is_auth: 1,
              uid: 0,
              user_is_login: 1
            },
            {
              user_unique_id: '1018638019',
              user_is_auth: 1,
              uid: 0,
              user_is_login: 1
            }
          ]
        }
      }
    }
  },
  data() {
    return {
      data: [
        {
          label: '一级 1',
          text: '1231232'
        },
        {
          label: '一级 2',
          text: '1231232',
          children: [
            {
              label: '二级 2-1',
              text: '1231232',
              children: [
                {
                  label: '三级 2-1-1',
                  text: '1231232'
                }
              ]
            },
            {
              label: '二级 2-2',
              text: '1231232',
              children: [
                {
                  label: '三级 2-2-1',
                  text: '1231232'
                }
              ]
            }
          ]
        },
        {
          label: '一级 3',
          children: [
            {
              label: '二级 3-1',
              children: [
                {
                  label: '三级 3-1-1'
                }
              ]
            },
            {
              label: '二级 3-2',
              children: [
                {
                  label: '三级 3-2-1'
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    handleNodeClick(data) {
      console.log(data)
    },
    handleData(data) {
      const arr = []
      for (const key in data) {
        const isTrue =
          typeof data[key] === 'string' ||
          typeof data[key] === 'number' ||
          Array.isArray(data[key])
        const obj = {
          label: key
        }
        if (isTrue) {
          // arr.push(obj)
          obj.text = data[key]
        } else {
          const result = this.handleData(data[key])
          obj.children = result
        }
        arr.push(obj)
      }
      return arr
    }
  },
  mounted() {
    const data = this.handleData(this.jsonObj)
    this.data = data
    console.log('this.data', data, typeof data)
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
