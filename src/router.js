import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dev',
      component: Home
    },
    {
      path: '/work',
      name: 'work',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/work-detail.vue')
    },
    {
      path: '/pm',
      name: 'pm',
      component: () => import(/* webpackChunkName: "about" */ './views/PM.vue')
    },
    {
      path: '/pm/mafengwo',
      name: 'pm/mafengwo',
      component: () => import(/* webpackChunkName: "about" */ './views/PM.vue')
    }
  ]
})
