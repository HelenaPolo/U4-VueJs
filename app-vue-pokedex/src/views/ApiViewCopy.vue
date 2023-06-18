<script setup>

  import {ref, onMounted, computed } from 'vue'
  import PhotoCard from '../components/PhotoCard.vue'
  import myAPI from '../services/services.js'

  const cards = ref([])
  const search = ref("")

  onMounted(async () => {
    const getRandomId = (min, max) =>{
          return Math.floor(Math.random() * (max - min + 1) + min);
      };

    const randomize =async () =>{
      let randomId = Array.from({length: 12},() => getRandomId(1, 248));
      
      const responses = await Promise.all(randomId.map(id => myAPI.getPokemon(id)));
      cards.value = responses.map(({ data }) => data);
    }  

    randomize();
  });
      
  const filteredCards = computed(() => {
    if (!Array.isArray(cards.value)) {
      return [];
    }
    return cards.value.filter((card) => {
      return card.name.toLowerCase().startsWith(search.value.toLowerCase());
    });
  });

</script>

<template>
  <div class="pokemonView">
    <input v-model="search" type="search" id="searchInput" placeholder="Busca...">{{search}}
    <section class="cards" id="pokemons-container">
      <PhotoCard v-for="card in filteredCards" :key="card.id" :info="card" />
    </section>
</div>
</template>

<style>
#pokemons-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 90%;
  height: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  background-color: whitesmoke;
  border-radius: 5px;
}
#search{
  width:fit-content;
  justify-items: start;
}
</style>
