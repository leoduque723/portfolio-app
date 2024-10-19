<template>
  <div class="creative-page">
    <h2>My Creative Page</h2>
    
    <div class="category">
      <h3>One Piece</h3>
      <img src="../assets/onepiece.png" alt="One Piece" />
    </div>
    
    <div class="category">
      <h3>Marvel Universe</h3>
      <img src="../assets/marvel.jpg" alt="Marvel Universe" />
    </div>
    
    <div class="category">
      <h3>Dark Souls</h3>
      <img src="../assets/darksouls.jpg" alt="Dark Souls" />
    </div>
  </div>
</template>

<script>
export default {
  // Any additional logic for the creative page can go here if needed
};
</script>

<style scoped>
.creative-page {
  text-align: center;
  padding: 20px;
  background-color: #f9f9f9;
}

h2 {
  margin-bottom: 30px;
  font-size: 2rem;
  color: #333;
}

.category {
  margin-bottom: 40px;
}

.category h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #555;
}

.category img {
  width: 300px; /* Adjust as needed */
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
