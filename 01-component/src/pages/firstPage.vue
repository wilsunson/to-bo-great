<template>
  <div class="firstPage">
    <H3>first page</H3>
    <hello-world></hello-world>
  </div>
</template>
<script>
import HelloWorld from '_c/HelloWorld'
export default {
  name: 'first-page',
  components: {
    HelloWorld
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
.firstPage {
  position: relative;
  widows: 100%;
  height: 100%;
}
</style>  