<template>
    <div v-if="book" class="book-details">
      <h1 class="title">{{ book.title }}</h1>
      <p><strong>Author:</strong> {{ book.author }}</p>
      <p><strong>Publisher:</strong> {{ book.publisher }}</p>
      <p><strong>Edition:</strong> {{ book.edition }}</p>
      <p><strong>Copyright:</strong> {{ book.copyright }}</p>
      <p><strong>Language:</strong> {{ book.language }}</p>
      <p><strong>Pages:</strong> {{ book.pages }}</p>
      <router-link to="/books" class="back-button">Back</router-link>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        book: null
      };
    },
    mounted() {
      const bookId = this.$route.params.id;
      axios.get(`https://backend-sr2.onrender.com/books/${bookId}`)
        .then(response => {
          this.book = response.data;
        })
        .catch(error => {
          console.error('Error fetching book:', error);
        });
    }
  };
  </script>
  
  <style scoped>
  .book-details {
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
  
  p:nth-child(even) {
    background-color: #f1f1f1; 
    padding: 10px;
    border-radius: 5px;
    width: 100%;
  }
  
  .book-details p:last-child {
    margin-bottom: 0;
  }
  
  .back-button {
    margin-top: 20px;
    padding: 10px 20px;
    color: white;
    background-color: #007bff; /* Azul */
    border: none;
    border-radius: 5px;
    text-decoration: none;
    font-size: 1rem;
    transition: background-color 0.3s;
  }
  
  .back-button:hover {
    background-color: #0056b3; /* Azul más oscuro al pasar el cursor */
  }
  </style>
  