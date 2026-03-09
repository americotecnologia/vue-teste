import { createRouter, createWebHistory } from 'vue-router'
import HomeInstitucional from '../views/HomeInstitucional.vue'
import HomeLogada from '../views/HomeLogada.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeInstitucional
        },
        {
            path: '/app',
            name: 'app',
            component: HomeLogada
        }
    ]
})

export default router
