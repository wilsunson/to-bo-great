<template>
  <div class="wInput">
    <input type="text" :value="value" @input="changeInput" v-bind="$attrs" />
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
      this.$parent.$emit('validate')
    }
  },
}
</script>
<style scoped>
.wInput {
}
</style>