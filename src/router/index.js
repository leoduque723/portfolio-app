import { createRouter, createWebHistory } from 'vue-router';
import ProfilePage from '../components/ProfilePage.vue';
import ShowcasePage from '../components/ShowcasePage.vue';
import ContactPage from '../components/ContactPage.vue';
import CreativePage from '../components/CreativePage.vue';
import LoginPage from '../components/LoginPage.vue';

const routes = [
  { path: '/', component: LoginPage },
  { path: '/portfolio/profile', component: ProfilePage },
  { path: '/portfolio/showcase', component: ShowcasePage },
  { path: '/portfolio/contact', component: ContactPage },
  { path: '/portfolio/creative', component: CreativePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
