<script setup>
import { ref } from 'vue'

const theme = ref('light')

const changeTheme = (e) => {
  document.body.className = e.target.value 
}

</script>

<template>
  <body class="themed" id="body" :class="theme">
    <header class="topbar">
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Home</RouterLink>
        </nav>
      </div>
      <div class="settings controls">
        <label for="dark">Dark</label>
        <input type="radio" name="theme" id="dark" value="dark" v-model="theme" @change="changeTheme">
        <label for="light">Light</label>
        <input type="radio" name="theme" id="light" value="light" v-model="theme" @change="changeTheme" checked>
      </div>
    </header>
    <h1 class="title">Pokedex</h1>
      <div class="container">
          <RouterView />
      </div>
  </body>
</template>

<style scoped>

body {
  margin: 0;
  padding: 0;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-family: "Oswald", sans-serif;
  display:grid;
}
h1 {
  color: whitesmoke;
  background-color: rgb(47, 47, 57);
  border: 3px solid whitesmoke;
  padding: 10px 0 10px 0;
  box-shadow: 0 3px 15px rgb(47, 47, 57);
}
header{
  display: flex;
  justify-content:space-around;
  padding: .2rem 1rem .2rem 1rem;
  color: #eeee;
  background-color: rgb(47, 47, 57);
}
nav{
  text-align: center;
}
a{
  text-decoration: none;
  color: #eeee;
  border: 2px solid #eeee;
  border-radius: 3px;
  margin: .1rem;
  padding: 0 .4rem 0 .4rem;
  box-shadow: 0 3px 15px rgb(47, 47, 57);
}
a:hover, a.router-link-active{
  background-color: whitesmoke;
  color: rgb(47, 47, 57);
  border: 2px solid rgb(47, 47, 57);
  box-shadow: 0 3px 15px #eee;
}
.container{
  background-color: whitesmoke;
  margin-left: 3rem;
  margin-right: 3rem;
  display: flex;
  flex-wrap:wrap;
  justify-items: center;
  border-radius: 5px;
  justify-content: center;
}
#searchInput{
  border-radius: 5px;
}
input[type=search]:focus{
  outline: none;
} 
/* clears the ‘X’ from Internet Explorer */
input[type=search]::-ms-clear { display: none; width : 0; height: 0; }
input[type=search]::-ms-reveal { display: none; width : 0; height: 0; }
/* clears the ‘X’ from Chrome */
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration { display: none; }

@media only screen and (max-width: 900px) {
  #pokemons-container{
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@media only screen and (max-width: 600px) {
  #pokemons-container{
    grid-template-columns: 1fr 1fr;
  }
}
</style>