import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Menu from '../pages/Menu.vue'
import Histoire from '../pages/Histoire.vue'
import Contact from '../pages/Contact.vue'

const routes = [
  { path: '/', component: Home, meta: { title: 'Autant Goûter — Café-resto bio, local et fait maison à Sainte-Adèle' } },
  { path: '/menu', component: Menu, meta: { title: 'Menu — Autant Goûter' } },
  { path: '/notre-histoire', component: Histoire, meta: { title: 'Notre histoire — Autant Goûter' } },
  { path: '/contact', component: Contact, meta: { title: 'Contact & Traiteur — Autant Goûter' } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() { return { top: 0 } }
})

router.afterEach((to) => {
  document.title = to.meta.title || 'Autant Goûter'
})

export default router
