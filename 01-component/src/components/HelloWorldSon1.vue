<template>
  <div class="helloWorld">
    i am hello son 1 
    <button @click="callMom()">call mom</button>
    <button @click="callBro()">call bro</button>
  </div>
</template>
<script>
export default {
  name: 'hello-world',
  props: {
    //
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
    this.$bus.$on('get-msg-from-bro2',(msg)=>{
      console.log('222 say to 111 ', msg)
    })
  },
  methods: {
    callMom(){
      this.$parent.$emit('call-mom', 'son1-call')
    },
    callBro(){
      this.$bus.$emit('get-msg-from-bro1', 'wtf111111111')
    }
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