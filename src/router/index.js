import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/register.vue')
  },{
    path: '/questions',
    name: 'questions',
    component: () => import('../views/questions.vue')
  },{
    path: '/header',
    name: 'header',
    component: () => import('../components/header.vue')
  },{
    path: '/core',
    name: 'core',
    component: () => import('../views/core.vue')
  },{
    path: '/Examinee',
    name: 'Examinee',
    component: () => import('../views/Examinee.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
