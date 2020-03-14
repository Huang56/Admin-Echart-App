<template>
  <div>
    <EditText :text="text" @editText="onEditText" />
  </div>
</template>
<script>
import EditText from './EditText/EditText'
export default {
  name: 'CompTest',
  components: { EditText },
  data() {
    return {
      // EditText
      text: ''
    }
  },
  methods: {
    onEditText(text) {
      console.log('text', text)

      this.text = text
    }
  }
}
</script>
<style lang="scss" scoped></style>
