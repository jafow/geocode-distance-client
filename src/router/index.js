import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import GeoCode from '@/components/GeoCode'
import Reverse from '@/components/Reverse'
import Coords from '@/components/Coords'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/geocode',
      name: 'GeoCode',
      component: GeoCode
    },
    {
      path: '/reverse',
      name: 'Reverse',
      component: Reverse
    },
    {
      path: '/coords',
      name: 'Coords',
      component: Coords
    }
  ]
})
