import Vue from 'vue'
import Router from 'vue-router'
import Bs from './views/Bs.vue'
// 左右联动
import LeftToRight from './views/LeftToRight.vue'
// 横向滑动
import ScrollInX from './views/ScrollX.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:LeftToRight
    },
    {
      path:'/bs',
      component:Bs
    },
    {
      path:'/scrollinx',
      component:ScrollInX
    }
  ]
})
