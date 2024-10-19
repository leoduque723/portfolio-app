<template>
    <nav>
      <ul>
        <li><router-link to="/">Login</router-link></li>
        <li><router-link to="/portfolio/profile">Profile</router-link></li>
        <li><router-link to="/portfolio/showcase">Showcase</router-link></li>
        <li><router-link to="/portfolio/contact">Contact</router-link></li>
        <li><router-link to="/portfolio/creative">Creative</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: "NavigationMenu", // Multi-word component name
  };
  </script>
  
  <style scoped>
  nav {
    background-color: #007BFF;
    padding: 10px;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    gap: 15px;
  }
  
  li {
    display: inline;
  }
  
  a {
    color: white;
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
  </style>
  