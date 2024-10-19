<template>
    <div class="profile">
      <h2>Profile: Leo Jennyl M. Duque</h2>
      <img src="../assets/profile pic.jpg" alt="Profile Photo" />
      <p>
        Bio: I love to watch movies and anime. I enjoy playing music on my guitar and my hobbies include playing video games and sleeping.
      </p>
      <h3>Social Media Links</h3>
      <ul>
        <li><a href="https://www.facebook.com/leoduque723" target="_blank">Facebook</a></li>
        <li><a href="https://www.instagram.com/leo_duqs/" target="_blank">Instagram</a></li>
        <li><a href="mailto:leo723jennyl723@gmail.com">Email Me</a></li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    // Logic for profile page can go here if needed
  };
  </script>
  
  <style scoped>
  .profile {
    text-align: center;
    padding: 20px;
    background-color: #f0f0f0;
    border-radius: 8px;
  }
  .profile img {
    border-radius: 50%;
    width: 150px;
    height: 150px;
  }
  .profile h2 {
    color: #333;
  }
  .profile a {
    color: #007BFF;
    text-decoration: none;
  }
  .profile a:hover {
    text-decoration: underline;
  }
  </style>
  