import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'
import NewsList from '@/views/News/NewsList.vue'
import NewsDetail from '@/views/News/NewsDetail.vue'
import Store from '@/views/Store'
import Partner from '@/views/Partner'
import Job from '@/views/Job'
import AppDownload from '@/views/AppDownload'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/newslist',
    name: 'NewsList',
    component: NewsList
  },
  {
    path: '/newsdetail',
    name: 'NewsDetail',
    component: NewsDetail
  },
  {
    path: '/store',
    name: 'Store',
    component: Store
  },
  {
    path: '/partner',
    name: 'Partner',
    component: Partner
  },
  {
    path: '/Job',
    name: 'Job',
    component: Job
  },
  {
    path: '/AppDownload',
    name: 'appDownload',
    component: AppDownload
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
