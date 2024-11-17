import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@views/Home.vue'
export default createRouter({
  history: createWebHashHistory(), //hash模式
  routes: [
    {
      path: '/',
      component: Home
    }
  ]
})
