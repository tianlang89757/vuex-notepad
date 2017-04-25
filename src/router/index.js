import Vue from 'vue'
import Router from 'vue-router'
import Notepad from '../components/Notepad'
import Editor from '../components/Editor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'notepad',
      component: Notepad
    },
    {
      path: '/editor',
      name: 'editor',
      component: Editor
    }
  ]
})
