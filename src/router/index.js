import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../components/LoginPage.vue';
import ProfilePage from '../components/ProfilePage.vue';
import ShowcasePage from '../components/ShowcasePage.vue';
import ContactPage from '../components/ContactPage.vue';
import CreativePage from '../components/CreativePage.vue';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
  },
  {
    path: '/portfolio/profile',
    name: 'Profile',
    component: ProfilePage,
  },
  {
    path: '/portfolio/showcase',
    name: 'Showcase',
    component: ShowcasePage,
  },
  {
    path: '/portfolio/contact',
    name: 'Contact',
    component: ContactPage,
  },
  {
    path: '/portfolio/creative',
    name: 'Creative',
    component: CreativePage,
  },
  // Redirect any unmatched routes to the login page
  { path: '/:pathMatch(.*)*', redirect: '/login' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
