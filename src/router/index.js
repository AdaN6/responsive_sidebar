import { createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Team from '../views/Team.vue'
import Contact from '../views/Contact.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/team',
            component: Team
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact
        }
    ]
})

export default router