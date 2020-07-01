<template>
  <div class="helloWorld">
    i am hello
    <p>{{ message || 'wait call' }}</p>
    <Son1 />
    <Son2 />
  </div>
</template>
<script>
import Son1 from '_c/HelloWorldSon1'
import Son2 from '_c/HelloWorldSon2'
export default {
  name: 'hello-world',
  props: {
    //
  },
  components: {
    Son1,
    Son2
  },
  data() {
    return {
      message: ''
    }
  },
  computed: {
    //
  },
  watch: {
    //
  },
  mounted() {
    this.$on('call-mom',(val)=>{
      this.message = 'who tmd call me: ' + val
    })
  },
  methods: {
    //
  },
}
</script>
<style scoped>
.helloWorld {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #ececec;
}
</style>