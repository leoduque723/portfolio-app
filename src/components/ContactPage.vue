<template>
    <div class="contact">
      <h2>Contact Me</h2>
      <form @submit.prevent="sendMessage">
        <input type="text" v-model="name" placeholder="Name" required />
        <input type="email" v-model="email" placeholder="Email" required />
        <textarea v-model="message" placeholder="Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        message: ''
      };
    },
    methods: {
      sendMessage() {
        alert(`Message sent from ${this.name}`);
        // You can add more logic here for actual message sending
      }
    }
  };
  </script>
  
  <style scoped>
  .contact {
    padding: 20px;
  }
  .contact input,
  .contact textarea {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
  }
  .contact button {
    padding: 10px 15px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .contact button:hover {
    background-color: #0056b3;
  }
  </style>
  