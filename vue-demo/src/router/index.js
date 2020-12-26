/** 根据文件目录生成路由 */
import Vue from 'vue'
import Router from 'vue-router'
import routerRoutes from "./router";

Vue.use(Router)
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routerRoutes,//使用
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        x: 0,
        y: 0
      };
    }
  },
});
export default router
