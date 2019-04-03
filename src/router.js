import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import VTooltip from 'v-tooltip';

Vue.use(Router)
Vue.use(VTooltip)

export default new Router({
  // mode: 'history',
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
    },
    {
      path: '/pm/aiqiyi',
      name: 'pm/aiqiyi',
      component: () => import(/* webpackChunkName: "about" */ './views/PM.vue')
    },
    {
      path: '/pm/byteDance',
      name: 'pm/byteDance',
      component: () => import(/* webpackChunkName: "about" */ './views/PM.vue')
    },
    {
      path: '/pm/bilibili',
      name: 'pm/bilibili',
      component: () => import(/* webpackChunkName: "about" */ './views/PM.vue')
    },
    {
      path: '/pm/chaoyouai',
      name: 'pm/chaoyouai',
      component: () => import(/* webpackChunkName: "about" */ './views/PM.vue')
    },
    {
      path: '/design',
      name: 'design',
      component: () => import(/* webpackChunkName: "about" */ './views/Design.vue')
    },
    {
      path: '*',
      name: 'not-found',
      component: () => import(/* webpackChunkName: "about" */ './views/notFound.vue')
    }
  ],
  scrollBehavior(to,from,saveTop){
    if(saveTop){
      return saveTop;
    }else{
      return {x:0,y:0}
    }
  },
})