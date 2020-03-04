<template>
  <div class="a-wrap">
    <ASearch />
    <!-- <AJsonShow /> -->
    <AJsonList />
    <ACollapseItem />
  </div>
</template>
<script>
// import AJsonShow from './AJsonShow/AJsonShow'
import AJsonList from './AJsonList/AJsonList'
import ACollapseItem from './ACollapseItem/ACollapseItem'
import ASearch from './ASearch/ASearch'
export default {
  name: 'ActionCheck',
  components: {
    // AJsonShow,
    AJsonList,
    ASearch,
    ACollapseItem
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
.a-container {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  // input-button-start
  .a-input-button {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;

    width: 400px;
    height: 200px;
    .a-tooltip {
      margin: 0 12px;
    }
  }
  // input-button-end
}
</style>
