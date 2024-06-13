import { createMemoryHistory, createRouter } from 'vue-router'

import WallView from './views/WallView.vue'
import AboutView from './views/AboutView.vue'


const routes = [
  { path: '/', component: WallView },
  { path: '/about', component: AboutView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})


export default router;