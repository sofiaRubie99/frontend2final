<template>
    <div class="publisher-list">
      <h1 class="title">Publishers</h1>
      <ul class="publisher-ul">
        <li v-for="publisher in publishers" :key="publisher.id" class="publisher-item">
          <router-link :to="`/publishers/${publisher.id}`" class="publisher-link">
            {{ publisher.publisher }}
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
        publishers: []
      };
    },
    mounted() {
      axios.get('https://backend-sr2.onrender.com/publishers')
        .then(response => {
          this.publishers = response.data;
        })
        .catch(error => {
          console.error('Error fetching publishers:', error);
        });
    }
  };
  </script>
  
  <style scoped>
  .publisher-list {
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
  
  .publisher-ul {
    list-style-type: none;
    padding: 0;
    width: 100%;
    max-width: 600px;
  }
  
  .publisher-item {
    margin-bottom: 15px;
    background-color: #ffffff;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  
  .publisher-item:hover {
    transform: scale(1.02);
  }
  
  .publisher-link {
    display: block;
    padding: 15px;
    color: #007bff; 
    font-size: 1.2rem;
    text-decoration: none;
  }
  
  .publisher-link:hover {
    color: #0056b3;
  }
  </style>
  
  