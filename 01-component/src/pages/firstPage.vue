<template>
  <div class="firstPage">
    <H3>first page</H3>
    <hello-world></hello-world>
    <WForm :model="formData" :rules="rules" ref="wform">
      <WFormItem label="姓名" prop="name">
        <WInput v-model="formData.name" />
      </WFormItem>
    </WForm>
    <button @click="submit()">提交</button>
  </div>
</template>
<script>
import HelloWorld from '_c/HelloWorld'
import WInput from '_c/WForm/WInput'
import WFormItem from '_c/WForm/WFormItem'
import WForm from '_c/WForm/WForm'
export default {
  name: 'first-page',
  components: {
    HelloWorld,
    WInput,
    WFormItem,
    WForm
  },

  data() {
    return {
      formData: {
        name: ''
      },
      rules: {
        name: [{ required: true, message: '请输入名称' }]
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
    submit() {
      this.$refs['wform'].validate(valid => {
        if (valid) {
          alert('nice')
        } else {
          alert('error!')
        }
      })
    }
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