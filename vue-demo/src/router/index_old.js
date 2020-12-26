/** 
 * 手动配置路由 
 * */
import Vue from 'vue'
import Router from 'vue-router'
import lifecycle from '@/components/pages/lifecycle/index'
import index from '@/components/index'
import props from '@/components/pages/props/parent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '/',
      component: index
    },  {
      path: '/props',
      name: 'props',
      component: props
    },
    {
      path: '/lifecycle',
      name: 'lifecycle',
      component: lifecycle
    },
  ]
})
