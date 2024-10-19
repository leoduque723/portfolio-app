<template>
  <div class="creative-page">
    <h2>My Creative Page</h2>
    
    <div class="category-container">
      <div class="category">
        <h3>Favorite Anime: One Piece</h3>
        <img src="../assets/onepiece.png" alt="One Piece" />
      </div>
      <div class="category">
        <h3>Favorite Movie: Marvel Universe</h3>
        <img src="../assets/marvel.jpg" alt="Marvel Universe" />
      </div>
      <div class="category">
        <h3>Favorite Game: Dark Souls</h3>
        <img src="../assets/darksouls.jpg" alt="Dark Souls" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // Additional logic for the creative page can go here if needed
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

.category-container {
  display: flex;
  justify-content: center;
  gap: 40px; /* Adjust gap between categories as needed */
  margin-top: 20px;
}

.category {
  text-align: center; /* Center the text and images */
}

.category h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #555;
}

.category img {
  width: 300px; /* Adjust image size for better visibility */
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
