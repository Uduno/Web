<template>
  <div id="App">
    <h1>Pokemon Card</h1>
    <div class="main_content">
      <div class="filter_container">
        <Filter :filterPokemon="filterPokemon"/>
      </div>
    
      <div class="card_container">
        <ul v-for="pokemon in filterPokemonData" :key="pokemon" >
          <li><Card :dataPokemon="pokemon" :dataTypes="dataTypes"/></li>
        </ul>
      </div>
    </div>
    <button @click="scrollToTop" class="scroll_top">&#8593;</button>
  </div>
</template>

<script>
import axios from 'axios';
import Card from './components/Card.vue';
import Filter from './components/Filter.vue';
export default {
  name: 'App',
  components: {
    Card:Card,
    Filter:Filter
  },
  data(){
    return {
      dataPokemon: [],
      dataTypes: [],
      filterPokemonData: []
    }
  },
  async mounted(){
    let resultPokemon = await axios.get('https://pokebuildapi.fr/api/v1/pokemon');
    let resultTypes = await axios.get('https://pokebuildapi.fr/api/v1/types');
    this.dataPokemon = resultPokemon.data;
    this.dataTypes = resultTypes.data;
    this.filterPokemonData = resultPokemon.data;
  },
  methods:{
    filterPokemon(name, type) {
      let updatedFilterData = [];

      if (name && type === "") {
        updatedFilterData = this.dataPokemon.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(name.toLowerCase())
        );
      } else if (type !== "" && name.trim() === "") {
        updatedFilterData = this.dataPokemon.filter((pokemon) =>
          pokemon.apiTypes.some((apiType) => apiType.name === type)
        );
      } else if (name && type) {
        updatedFilterData = this.dataPokemon.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(name.toLowerCase()) && pokemon.apiTypes.some((apiType) => apiType.name === type)
        );
      } else {
        updatedFilterData = this.dataPokemon;
      }
      if (updatedFilterData.length === 0) {
        alert("No data found");
      }
      this.filterPokemonData = updatedFilterData
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    }

  }
}



</script>

<style scoped>

  .main_content{
    display: flex;
  }
  .card_container{
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  }

  .card_container > ul{
    list-style: none;
  }

  .scroll_top{
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: white;
    border: none;
    color: black;
    font-size: 30px;
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    z-index: 100;
  }

  @media screen and (max-width: 600px) {
    .main_content{
      flex-direction: column;
      align-items: center;
    }
  }
</style>
