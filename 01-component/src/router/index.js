import Vue from 'vue'
import Router from 'vue-router'
import firstPage from '@/pages/firstPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'firstPage',
      component: firstPage
    }
  ]
})
