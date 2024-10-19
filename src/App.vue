<template>
  <div id="app">
    <!-- Conditionally render navigation only when the user is logged in -->
    <Navigation v-if="isLoggedIn" />

    <!-- Router View will display the current route's component -->
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';

export default {
  name: 'App',
  components: {
    Navigation,
  },
  data() {
    return {
      isLoggedIn: false, // Flag to track login status
    };
  },
  methods: {
    checkLoginStatus() {
      this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    },
  },
  mounted() {
    // Check login status when the app is mounted
    this.checkLoginStatus();

    // Listen for route changes and update login status
    this.$router.beforeEach((to, from, next) => {
      this.checkLoginStatus();
      if (to.path !== '/login' && !this.isLoggedIn) {
        next('/login'); // Redirect to login if not authenticated
      } else {
        next(); // Allow the navigation
      }
    });
  },
};
</script>
