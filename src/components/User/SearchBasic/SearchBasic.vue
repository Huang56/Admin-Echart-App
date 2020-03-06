<template>
  <div class="a-search">
    <span class="">
      <span>字数</span>
    </span>
    <div>
      <div></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AFilter',
  components: {},
  props: {
    data: {
      type: [Array],
      default: () => {
        return [
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
        ]
      }
    }
  },
  data() {
    return {
      input: ' '
    }
  },
  methods: {
    click() {
      this.$emit('input', this.input)
    }
  }
}
</script>
<style lang="scss" scoped>
.a-search {
  width: 100%;
}
</style>
