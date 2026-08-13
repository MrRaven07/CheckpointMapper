import { createRouter, createWebHistory } from 'vue-router'
import HomePageView from '../views/HomePageView.vue'
import MapView from '../views/MapView.vue'
import PageHeaderView from '../views/PageHeaderView.vue'

const router = createRouter ({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePageView
        },
        {
            path: '/map',
            name: 'map',
            component: MapView
        }
    ]
})

export default router
