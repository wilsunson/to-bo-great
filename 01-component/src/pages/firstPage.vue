<template>
  <div class="firstPage">
    <H3>first page</H3>
    <hello-world></hello-world>
    <WFormItem label="姓名">
      <WInput v-model="formData.name" />
    </WFormItem>
  </div>
</template>
<script>
import HelloWorld from '_c/HelloWorld'
import WInput from '_c/WForm/WInput'
import WFormItem from '_c/WForm/WFormItem'
export default {
  name: 'first-page',
  components: {
    HelloWorld,
    WInput,
    WFormItem
  },
  data() {
    return {
      formData: {
        name
      }
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