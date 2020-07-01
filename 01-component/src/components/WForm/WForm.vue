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
    //
  },
}
</script>
<style scoped>
.wFrom {
}
</style>