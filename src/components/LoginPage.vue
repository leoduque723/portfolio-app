<template>
  <div class="login-page">
    <!-- Add the image here -->
    <img src="@/assets/Tokyo.png" alt="Tokyo Logo" class="login-image" />

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
        localStorage.setItem('isLoggedIn', 'true');
        this.$router.push('/portfolio/profile');
      } else {
        alert('Invalid credentials. Please try again.');
      }
    },
  },
  mounted() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      this.$router.push('/portfolio/profile');
    }
  },
};
</script>

<style scoped>
/* Login page styling */
.login-page {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.login-page img.login-image {
  width: 150px; /* Set the width of the image to make it bigger */
  margin-bottom: 20px; /* Add some space between the image and the heading */
}

.login-page h1 {
  margin-bottom: 20px;
}

.login-page form {
  display: flex;
  flex-direction: column;
}

.login-page label {
  margin-bottom: 5px;
}

.login-page input {
  margin-bottom: 15px;
  padding: 10px;
  font-size: 16px;
}

.login-page button {
  padding: 10px;
  background-color: #007BFF;
  color: white;
  border: none;
  cursor: pointer;
}

.login-page button:hover {
  background-color: #0056b3;
}
</style>
