<script setup>
  import {ref, onMounted, defineProps} from 'vue' 
  import myAPI from '../services/services.js'

  const props = defineProps(['pokemonId'])
  const detail = ref({});
  const name = ref("")
  const spriteFront = ref("")
  const spriteBack = ref("")
  const atac = ref("")
  const defensa = ref("")
  let tipus = ref([])

  onMounted(() => {
    myAPI.getPokemon( props.pokemonId ).then( (response) => {
      detail.value = response.data; 
      name.value = detail.value.name
      spriteFront.value = detail.value.sprites.front_default
      spriteBack.value = detail.value.sprites.back_default
      atac.value = detail.value.stats[1].base_stat
      defensa.value = detail.value.stats[2].base_stat
      tipus.value = detail.value.types.map((data) => {
          return data.type.name
        }).join(', ');
    })
  })

</script>

<template>
  <div class="pokemons-card">
    <h1 id="pokemon-name">{{name}}</h1>
    <img :src="spriteFront">
    <img :src="spriteBack">
    <div class="detalls"> 
      <ul>
          <li>Atac: {{atac}}</li>
          <li>Defensa: {{defensa}}</li>
          <li>Tipus: {{tipus}}</li>
      </ul>  
    </div>  
  </div>
</template>

<style>
h1 {
    color: whitesmoke;
    background-color: rgb(47, 47, 57);
    border: 3px solid whitesmoke;
    border-radius: 10px;
    padding: 10px 0 10px 0;
    text-transform: uppercase;
    width: 100%;
}
img{
  height: 15rem;
  width: 15rem;
  background-color: rgb(234, 230, 233);
  border-radius: 10px;
  position: relative;
  margin: 1rem;
  margin-bottom: 3rem;
  box-shadow: 0 3px 8px rgb(47, 47, 57);
}
ul{
  margin: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
li{
  margin: 1.5rem;
  list-style-type: none;
  font-size: 25px;
  color: rgb(47, 47, 57);
  color: whitesmoke;
}
.detalls{
  background-color: rgb(107, 153, 167);
  color: red;
  height: 30%;
  display: flex;
  align-content: center;
  justify-content: center;
  border-radius: 10px;
  border: 3px solid #eeee;
  box-shadow: 0 3px 8px rgb(47, 47, 57);
}
@media only screen and (max-width: 900px) {
  h1{
    width: 80%;
    margin-left: 10%;
  }
  .detalls{
    width: 60%;
    right: auto;
    left: auto;
    position: absolute;
  }
  li{
    margin-left: 1rem;
  }
}
</style>
