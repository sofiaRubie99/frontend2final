<template>
    <div v-if="author" class="author-details">
      <h1 class="title">{{ author.author }}</h1>
      <p><strong>Nationality:</strong> {{ author.nationality }}</p>
      <p><strong>Birth Year:</strong> {{ author.birth_year }}</p>
      <p><strong>Fields:</strong> {{ author.fields }}</p>
  
      <h2>Books:</h2>
      <ul class="books-list">
        <li v-for="book in author.books" :key="book.book_id" class="book-item">
          {{ book.title }}
        </li>
      </ul>
  
      <button class="back-button" @click="goBack">Back</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        author: null
      };
    },
    mounted() {
      const authorId = this.$route.params.id;
      axios.get(`https://backend-sr2.onrender.com/authors/${authorId}`)
        .then(response => {
          this.author = response.data;
        })
        .catch(error => {
          console.error('Error fetching author details:', error);
        });
    },
    methods: {
      goBack() {
        this.$router.go(-1);
      }
    }
  };
  </script>
  
  <style scoped>
  .author-details {
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
    padding: 10px 15px;
    background-color: #007bff; 
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1.2rem;
    cursor: pointer;
  }
  
  .back-button:hover {
    background-color: #0056b3; 
  }
  </style>
  