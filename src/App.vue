<template>
  <div id="app">
    <Navigation />
    <router-view />
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';

export default {
  components: {
    Navigation
  }
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  background-color: #e9ecef; /* Light background color */
  color: #333; /* Dark text color */
  margin: 0;
  padding: 0;
}

#app {
  padding: 20px; /* Padding around the app */
}

nav {
  display: flex;
  justify-content: space-around; /* Space between navigation links */
  background-color: #007BFF; /* Blue background for the navigation */
  padding: 10px; /* Padding inside the navigation */
}

nav a {
  color: white; /* White text color for links */
  text-decoration: none; /* Remove underline from links */
}

nav a:hover {
  text-decoration: underline; /* Underline on hover */
}

.profile, .showcase, .contact, .creative {
  text-align: center; /* Center align text for pages */
  padding: 20px; /* Padding for pages */
  background-color: #f0f0f0; /* Light gray background for pages */
  border-radius: 8px; /* Rounded corners */
}

.profile img {
  border-radius: 50%; /* Circular profile image */
  width: 150px; /* Width of the profile image */
  height: 150px; /* Height of the profile image */
}

.project-card {
  border: 1px solid #ddd; /* Light gray border for project cards */
  border-radius: 8px; /* Rounded corners */
  padding: 10px; /* Padding inside project cards */
  margin: 10px; /* Margin between project cards */
  display: inline-block; /* Inline block for project cards */
  width: 200px; /* Width of project cards */
}
</style>
