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
    name: "LoginPage",
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      login() {
        const hardcodedUsername = "leoduque723";
        const hardcodedPassword = "leo723";
  
        if (this.username === hardcodedUsername && this.password === hardcodedPassword) {
          this.$router.push("/portfolio/profile");
        } else {
          alert("Invalid credentials. Please try again.");
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .login-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    font-family: Arial, sans-serif;
  }
  
  h1 {
    margin-bottom: 20px;
  }
  
  form {
    display: flex;
    flex-direction: column;
    width: 300px;
  }
  
  label {
    margin-bottom: 5px;
  }
  
  input {
    margin-bottom: 15px;
    padding: 10px;
    font-size: 1rem;
  }
  
  button {
    padding: 10px;
    background-color: #007BFF;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 1rem;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  