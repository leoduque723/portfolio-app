<template>
  <div class="profile">
    <h2>Profile: Leo Jennyl M. Duque</h2>
    <img src="../assets/profile pic.jpg" alt="Profile Photo" />
    <p>
      Bio: I love to watch movies and anime. I enjoy playing music on my guitar and my hobbies include playing video games and sleeping.
    </p>
    <h3>Social Media Links</h3>
    <ul class="social-links">
      <li>
        <a href="https://www.facebook.com/leoduque723" target="_blank">
          <img src="../assets/Facebook.png" alt="Facebook" />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/leo_duqs/" target="_blank">
          <img src="../assets/instagram.jpg" alt="Instagram" />
        </a>
      </li>
      <li>
        <a href="mailto:leo723jennyl723@gmail.com">
          <img src="../assets/email.png" alt="Email" />
        </a>
      </li>
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
  width: 200px; /* Increased size of profile photo */
  height: 200px; /* Increased size of profile photo */
}

.profile h2 {
  color: #333;
}

.profile p {
  margin-bottom: 20px;
}

.social-links {
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
}

.social-links li {
  margin: 0 15px; /* Adjust margin to increase/decrease space between links */
}

.social-links img {
  width: 50px; /* Increased size of icons */
  height: auto;
}
</style>
