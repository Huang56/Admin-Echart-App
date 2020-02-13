<template>
  <div class="modify-edit-container">
    <template v-for="(item, index) in modifyLabels">
      <ModifyClick
        :item="item"
        :index="index"
        :key="index"
        @editInput="emitBtn"
      />
    </template>
  </div>
</template>
<script>
import ModifyClick from '../ModifyClick/ModifyClick'
export default {
  name: 'ModifyEdit',
  components: {
    ModifyClick
  },
  props: {
    icon: {
      type: String,
      default: () => 'el-icon-edit'
    },
    modifyLabels: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      input: 'line',
      show: false,
      width: 158
    }
  },
  methods: {
    emitBtn(val) {
      console.log('emitBtn', val)
      this.$emit('editInput', val)
      this.show = !this.show
    }
  },
  mounted() {}
}
</script>

<style lang="scss" scoped>
.modify-edit-container {
  display: flex;
  justify-content: space-around;
}
</style>
