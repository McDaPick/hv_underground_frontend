import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Hello from './views/Hello.vue'
import Bands from './views/Bands.vue'
import Contact from './views/Contact.vue'
import Detail from './views/Detail.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/hello',
      name: 'hello',
      component: Hello
    },
    {
      path: '/bands',
      name: 'bands',
      component: Bands
    },
    {
      path: '/bands/:name',
      name: 'bands',
      component: Detail
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    // {
    //   path: '/detail/:id',
    //   name: 'detail',
    //   component: Detail
    // },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})
