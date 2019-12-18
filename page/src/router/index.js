import Vue from 'vue'
import Router from 'vue-router'
import Student from '../components/content/Student'
import Department from '../components/content/Department'
import Fix from '../components/content/Fix'
import Administrator from '../components/content/Administrator'
import Visitors from '../components/content/Visitors'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/student_search'
    },
    {
      path: '/student_search',
      name: 'Student',
      component: Student
    },
    {
      path: '/department_search',
      name: 'Department',
      component: Department
    },
    {
      path: '/fix_search',
      name: 'Fix',
      component: Fix
    },
    {
      path: '/administrator_search',
      name: 'Administrator',
      component: Administrator
    },
    {
      path: '/visitor_search',
      name: 'Visitors',
      component: Visitors
    }
  ]
})
