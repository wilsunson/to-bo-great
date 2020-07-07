<template>
  <div class="wFrom">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'w-from',
  props: {
    model: {
      type: Object,
      default: {},
      required: true
    },
    rules: {
      type: Object,
      default: {}
    }
  },
  provide() {
    return {
      form: this
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
    validate(fn) {
      Promise.all(this.$children.filter(i => i.prop).map(item => { return item.validate() }))
        .then(() => fn(true))
        .catch(() => fn(false))
    }
  },
}
</script>
<style scoped>
.wFrom {
}
</style>