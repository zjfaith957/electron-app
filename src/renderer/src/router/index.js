import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@views/Home.vue'

const router = createRouter({
  history: createWebHashHistory(), //hash模式
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/login',
      component: () => import('@views/login/Login.vue')
    }
  ]
})

// router.beforeEach((to) => {
//   console.log('beforeEach')
//   if (to.path === '/login') return
//   if (!sessionStorage.getItem('token')) {
//     return '/login'
//   }
// })

// router.afterEach(() => {
//   console.log('afterEach')
// })

export default router
