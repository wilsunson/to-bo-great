<template>
  <div class="wFormItem">
    <label v-if="label">{{label}}</label>
    <slot></slot>
    <div v-if="error" class="error">{{error}}</div>
  </div>
</template>
<script>
import Schema from 'async-validator'
export default {
  name: 'w-formItem',
  props: {
    label: { // 标签名称
      default: ''
    },
    prop: {  // 字段名
      default: ''
    }
  },
  inject: ['form'],
  components: {
    //
  },
  data() {
    return {
      error: 'some error' // 校验 错误提示
    }
  },
  computed: {
    //
  },
  watch: {
    //
  },
  mounted() {
    this.$on('validate', () => this.validate())
  },
  methods: {
    validate() {
      const rule = this.form.rules[this.prop] // 规则
      const value = this.form.model[this.prop] || ''// 值
      const discriptor = { [this.prop]: rule } // 校验描述对象，key值就是this.prop的值
      const schema = new Schema(discriptor) // 创建校验器     
      return schema.validate({ [this.prop]: value }, errors => { // 返回promise
        console.log('errrrr', errors)
        this.error = errors ? errors[0].message : ''
      })
    }
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