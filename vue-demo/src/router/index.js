import Vue from 'vue'
import Router from 'vue-router'
import A from '@/components/study-1/A'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'parent',
      component: A
    }
  ]
})
