import Vue from 'vue'
import Router from 'vue-router'
import TeamTack from '@/components/TeamTack'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TeamTack',
      component: TeamTack
    }
  ]
})
