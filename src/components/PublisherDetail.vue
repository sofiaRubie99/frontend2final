<template>
    <div v-if="publisher" class="publisher-details">
      <h1 class="title">{{ publisher.publisher }}</h1>
      <p><strong>Country:</strong> {{ publisher.country }}</p>
      <p><strong>Founded:</strong> {{ publisher.founded }}</p>
      <p><strong>Genre:</strong> {{ publisher.genere }}</p>
      
      <h2>Books Published:</h2>
      <ul class="books-list">
        <li v-for="book in publisher.books" :key="book.book_id" class="book-item">
          {{ book.title }}
        </li>
      </ul>
  
      <router-link to="/publishers" class="back-button">Back</router-link>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        publisher: null
      };
    },
    mounted() {
      const publisherId = this.$route.params.id;
      axios.get(`https://backend-sr2.onrender.com/publishers/${publisherId}`)
        .then(response => {
          this.publisher = response.data;
        })
        .catch(error => {
          console.error('Error fetching publisher details:', error);
        });
    }
  };
  </script>
  
  <style scoped>
  .publisher-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 10px;
    max-width: 600px;
    margin: 0 auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .title {
    font-size: 2.5rem;
    color: #28a745; 
    margin-bottom: 20px;
    text-align: center;
  }
  
  p {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
  
  strong {
    color: #007bff; 
  }
  
  .books-list {
    list-style-type: none;
    padding: 0;
    width: 100%;
    max-width: 100%;
  }
  
  .book-item {
    background-color: #ffffff;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    transition: transform 0.3s ease;
  }
  
  .book-item:hover {
    transform: scale(1.02);
  }
  
  .back-button {
    margin-top: 20px;
    display: inline-block;
    padding: 10px 20px;
    background-color: #007bff; /* Azul */
    color: white;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s ease;
  }
  
  .back-button:hover {
    background-color: #0056b3; /* Azul más oscuro */
  }
  </style>
  