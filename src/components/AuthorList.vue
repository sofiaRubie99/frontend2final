<template>
    <div class="author-list">
      <h1 class="title">Authors</h1>
      <ul class="author-ul">
        <li v-for="author in authors" :key="author.id" class="author-item">
          <router-link :to="`/authors/${author.id}`" class="author-link">
            {{ author.author }}
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
        authors: []
      };
    },
    mounted() {
      axios.get('https://backend-sr2.onrender.com/authors')
        .then(response => {
          this.authors = response.data;
        })
        .catch(error => {
          console.error('Error fetching authors:', error);
        });
    }
  };
  </script>
  
  <style scoped>
  .author-list {
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
  
  .author-ul {
    list-style-type: none;
    padding: 0;
    width: 100%;
    max-width: 600px;
  }
  
  .author-item {
    margin-bottom: 15px;
    background-color: #ffffff;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  
  .author-item:hover {
    transform: scale(1.02);
  }
  
  .author-link {
    display: block;
    padding: 15px;
    color: #007bff; 
    font-size: 1.2rem;
    text-decoration: none;
  }
  
  .author-link:hover {
    color: #0056b3; 
  }
  </style>
  