import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import DashboardIndex from '../views/Dashboard/Index.vue'
import Dashboard from '../views/Dashboard/Dashboard.vue'
import NotFound from '../views/NotFound.vue'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Dashboard',
    component: DashboardIndex,
    meta: { layout: 'dashboard-layout' }
  },

  {
    path: '/',
    name: 'Dashboard',
    component: DashboardIndex,
    meta: { layout: 'dashboard-layout' },
// redirect:'/dashboard/stats/',
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: Dashboard,
      },
      {
        path: 'contatos',
        name: 'Contatos',
        component: DashboardIndex,
        redirect: '/dashboard/contatos/index',
        children: [
          {
            path: "/dashboard/contatos/index",
            name: "ListaContatos",
            component: () => import('../views/Dashboard/Contatos/Index.vue'),
          }
        ]
      },
    ]
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    meta: { layout: 'default-layout' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router
