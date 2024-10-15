<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li><router-link to="/books">Books</router-link></li>
          <li><router-link to="/authors">Authors</router-link></li>
          <li><router-link to="/publishers">Publishers</router-link></li>
        </ul>
      </nav>
    </header>
    
 
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

header {
  background-color: #f3f3f3;
  padding: 20px;
}

nav ul {
  list-style-type: none;
  padding: 0;
}

nav ul li {
  display: inline;
  margin-right: 15px;
}

nav ul li a {
  text-decoration: none;
  color: #42b983;
}
</style>
