<template>
    <div class="book-list">
      <h1 class="title">Books</h1>
      <ul class="book-ul">
        <li v-for="book in books" :key="book.id" class="book-item">
          <router-link :to="`/books/${book.id}`" class="book-link">
            {{ book.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        books: []
      };
    },
    mounted() {
      axios.get('https://backend-sr2.onrender.com/books')
        .then(response => {
          this.books = response.data;
        })
        .catch(error => {
          console.error('Error fetching books:', error);
        });
    }
  };
  </script>
  
  <style scoped>
  .book-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #f9f9f9;
  }
  
  .title {
    font-size: 2.5rem;
    color: #28a745; 
    margin-bottom: 20px;
    text-align: center;
  }
  
  .book-ul {
    list-style-type: none;
    padding: 0;
    width: 100%;
    max-width: 600px;
  }
  
  .book-item {
    margin-bottom: 15px;
    background-color: #ffffff;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  
  .book-item:hover {
    transform: scale(1.02);
  }
  
  .book-link {
    display: block;
    padding: 15px;
    color: #007bff;
    font-size: 1.2rem;
    text-decoration: none;
  }
  
  .book-link:hover {
    color: #0056b3;
  }
  </style>
  