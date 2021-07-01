import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import('../views/Contacts.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/blog/list.vue'),
    /* children:[{
      path:'/:id',
      name:'BlogDetail',
      component:()=> import('../views/blog/detail.vue')
    }] */
  },
  {
    path:'/blog/:id',
    name: 'BlogDetail',
    component: () => import('../views/blog/detail.vue')
  }
]

const router = new VueRouter({
  base:'/',
  routes
})

export default router
