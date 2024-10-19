<template>
  <div class="showcase">
    <h2>Portfolio Showcase</h2>
    <div class="projects">
      <div class="project-card">
        <img src="@/assets/resort.png" alt="Resort Project" class="project-image" />
        <h3>Online Resort Booking System</h3>
        <p>
          We created a website that allows users to easily book a specific resort online, providing a seamless and efficient booking experience.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowcasePage"
};
</script>

<style scoped>
.showcase {
  text-align: center;
  padding: 20px;
}

.project-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin: 20px auto;
  width: 300px;
  text-align: center;
}

.project-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 15px;
}
</style>
