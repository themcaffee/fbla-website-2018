import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import PrivacyPolicy from '@/components/PrivacyPolicy'
import PageNotFound from '@/components/PageNotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/privacy-policy',
      name: 'PrivacyPolicy',
      component: PrivacyPolicy
    },
    {
      path: '/404',
      name: 'PageNotFound',
      component: PageNotFound
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
