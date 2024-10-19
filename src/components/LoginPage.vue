<template>
  <div class="login-page">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username" />

      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" />

      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      const hardcodedUsername = 'leoduque723';
      const hardcodedPassword = 'leo723';

      if (this.username === hardcodedUsername && this.password === hardcodedPassword) {
        // Notify parent component about successful login
        this.$emit('login', true);
        this.$router.push('/portfolio/profile'); // Redirect to profile page
      } else {
        alert('Invalid credentials. Please try again.');
      }
    },
  },
};
</script>

<style scoped>
/* Login page styling */
</style>
