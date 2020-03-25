import Vue from 'vue'
import VueRouter from 'vue-router'


import Home from '../src/views/home/Home.vue'
import News from '../src/views/news/News.vue'
import Hero from '../src/views/hero/Hero.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {

    path: '/news/:id',
    name: 'News',
    component: News,
    props: true
  },
  {

    path: '/hero/:id',
    name: 'Hero',
    component: Hero,
    props: true
  }


]



const router = new VueRouter({
  routes
})

export default router