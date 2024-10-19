<template>
    <div class="showcase">
      <h2>Portfolio Showcase</h2>
      <div class="projects">
        <div class="project-card" v-for="project in projects" :key="project.id">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        projects: [
          { id: 1, title: 'Project 1', description: 'Description of Project 1' },
          { id: 2, title: 'Project 2', description: 'Description of Project 2' },
          // Add more projects
        ]
      };
    }
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
    padding: 10px;
    margin: 10px;
    display: inline-block;
    width: 200px;
  }
  </style>
  