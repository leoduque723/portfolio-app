<template>
  <div class="login">
    <img src="../assets/Tokyo.png" alt="Tokyo Logo" class="login-logo" />
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div>
        <label for="username">Username:</label>
        <input type="text" v-model="username" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
    <p v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      errorMessage: '',
    };
  },
  methods: {
    login() {
      const hardcodedUsername = 'leoduque723';
      const hardcodedPassword = 'leo723';

      if (this.username === hardcodedUsername && this.password === hardcodedPassword) {
        localStorage.setItem('isLoggedIn', 'true');
        this.$router.push('/portfolio/profile');
      } else {
        this.errorMessage = 'Invalid username or password.';
      }
    },
  },
};
</script>

<style scoped>
.login {
  text-align: center;
  padding: 20px;
}

.login-logo {
  width: 150px;
  margin-bottom: 20px;
}
</style>
