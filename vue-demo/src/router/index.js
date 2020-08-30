import Vue from 'vue'
import Router from 'vue-router'
import lifecycle from '@/components/pages/lifecycle/index'
import dataBind from '@/components/pages/data-bind/index'
import keepAlive2 from '@/components/pages/keep-Alive/B'
import keepAlive3 from '@/components/pages/keep-Alive/C'
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
    {
      path: '/dataBind',
      name: 'dataBind',
      component: dataBind
    },
    {
      path: '/C',
      name: 'C',
      component: keepAlive3
    }
  ]
})
