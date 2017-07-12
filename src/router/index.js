import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: '/List'
    },
    {
      path: '/List',
      name: 'List',
      component: () => System.import('@/views/List')
    },
    {
      path: '/Item/:id(\\d+)?',
      name: 'Item',
      component: () => System.import('@/views/Item')
    }
  ]
})
