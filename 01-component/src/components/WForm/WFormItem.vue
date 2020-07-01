<template>
  <div class="wFormItem">
    <label v-if="label">{{label}}</label>
    <slot></slot>
    <div v-if="error" class="error">{{error}}</div>
  </div>
</template>
<script>
export default {
  name: 'w-label',
  props: {
    label: {
      default: ''
    }
  },
  components: {
    //
  },
  data() {
    return {
      error: 'some error'
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
.wFormItem {
  display: flex;
  justify-content: center;
}
.wFormItem .error {
  color: red;
}
</style>