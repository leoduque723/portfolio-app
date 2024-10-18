import Vue from 'vue';
import Router from 'vue-router';
import LoginPage from '../components/LoginPage.vue';
import ProfilePage from '../components/ProfilePage.vue';
import ShowcasePage from '../components/ShowcasePage.vue';
import ContactPage from '../components/ContactPage.vue';
import CreativePage from '../components/CreativePage.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: LoginPage },
    { path: '/portfolio/profile', component: ProfilePage },
    { path: '/portfolio/showcase', component: ShowcasePage },
    { path: '/portfolio/contact', component: ContactPage },
    { path: '/portfolio/creative', component: CreativePage }
  ]
});
