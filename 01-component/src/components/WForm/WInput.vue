<template>
  <div class="wInput">
    <input type="text" :value="value" @input="changeInput" />
  </div>
</template>
<script>
export default {
  name: 'w-input',
  props: {
    value: {
      default: ''
    }
  },
  components: {
    //
  },
  data() {
    return {
      //
    }
  },
  computed: {
    //
  },
  watch: {
    //
  },
  mounted() {
    //
  },
  methods: {
    changeInput(e){
      this.$emit('input', e.target.value)
    }
  },
}
</script>
<style scoped>
.wInput {
}
</style>