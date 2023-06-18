import axios from 'axios'

const myAPI = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getCards() {
    return myAPI.get('pokemon?limit=10&offset=0');
  }, 
  getPokemon(id){
    return myAPI.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
  },
  getSingleCard( id ) {
    return myAPI.get(`/pokemon/${id}`);
  },
}