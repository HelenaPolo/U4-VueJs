<script setup>

  const props = defineProps(['info'])
  console.log(props.info.sprites.front_default)

</script>

<template >
  <div class="card pokemon-block card-container pokemon_card">
    <img :src=" props.info.sprites.other['official-artwork'].front_default" alt="{{ props.info.name }}">
    <label for="name" class="name">{{ props.info.name }}</label>
    <button  class="btn" @click="$router.push({ name: 'pokemon', params: {pokemonId: props.info.id } })">Detall</button>
  </div>
</template>

<style scoped>
.card-container {
  position: relative;
  text-align: center;
  height: 90%;
  width: 90%;
  padding: 10px;
  display: flex;
  flex-direction:column;
}
.name{
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.8rem;
  bottom: 0px;
  margin: 10px;
  width: 50%;
}
img{
  height: 85%;
  width: 60%;
  border-radius: 10px;
  box-shadow: 0 3px 5px rgb(47, 47, 57);
}
img:hover{
  animation:img_mov .5s linear;
}
@keyframes img_mov{
  0% {top:-5px}
  25% {top:0px}
  50%{top:3px}
  100%{top:0px}
}
.btn{
  border: 1px solid whitesmoke;
  border-radius: 5px;
  padding: 5px 20px 5px 10px;
  margin: 10px;
  border: 3px solid whitesmoke;
  font-weight: bold;
  width: 25%;
  margin-left: 3.5rem;
  text-align: center;
}
</style>