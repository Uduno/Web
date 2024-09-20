<template>
  <div id="card" :style="{'background': `linear-gradient(to top left, ${getBackgroundColor(dataPokemon)[0]}, ${getBackgroundColor(dataPokemon)[1]})`} ">
    
    <div class="card_top">
      <div class="type_text">
        <p>{{joinTypes(dataPokemon.apiTypes)}}</p>
      </div>
      <div class="type_img" v-for="type in dataPokemon.apiTypes" :key="type.name">
        <img :src="getImageTypeInData(type.name)" :alt="type.name">
      </div>
    </div>
    <div class="card_container">
      <div class="pokemon_info">
        <span><strong>{{dataPokemon.name}}</strong></span>  
        <span>Pokedex <strong>#{{dataPokemon.pokedexId}}</strong></span>
      </div>
      <div class="pokemon_img" :style="{'background': ` linear-gradient(whitesmoke 0 0) padding-box,linear-gradient(to top left, ${getBackgroundColor(dataPokemon)[0]}, ${getBackgroundColor(dataPokemon)[1]})  border-box`}">
        <img :src="dataPokemon.sprite" alt="pokemon-image">
      </div>
      <div class="pokemon_evolve">
        <span :style="{'background': `linear-gradient(to top left, ${getBackgroundColor(dataPokemon)[0]}, ${getBackgroundColor(dataPokemon)[1]})`}" v-if="hasPreEvolution()" >Previous Evolution: <strong>{{dataPokemon.apiPreEvolution.name }}</strong></span>   
        <span :style="{'background': `linear-gradient(to top left, ${getBackgroundColor(dataPokemon)[1]}, ${getBackgroundColor(dataPokemon)[0]})`}" v-if="dataPokemon.apiEvolutions[0]">Next Evolution: <strong>{{dataPokemon.apiEvolutions[0].name }}</strong></span> 
      </div>
      <div class="pokemon_stat">
        <span><strong>Stats</strong></span>
        <div class="pokemon_stat_container">
          <div class="left_stat">
            <p>Hp: <strong>{{dataPokemon.stats.HP}}</strong></p>
        	  <p>Atk: <strong>{{dataPokemon.stats.attack}}</strong></p>
          	<p>Def: <strong>{{dataPokemon.stats.defense}}</strong></p>
          </div>
          <div class="right_stat">
            <p>Speed: <strong>{{dataPokemon.stats.speed}}</strong></p>
        	  <p>S.Atk: <strong>{{dataPokemon.stats.special_attack}}</strong></p>
          	<p>S.Def: <strong>{{dataPokemon.stats.special_defense}}</strong></p>
          </div>
        </div>
      </div>
      
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'card',
  props: ['dataPokemon', 'dataTypes'],

  methods:{
    getBackgroundColor(dataPokemon){
      const color = {
      'Normal': '#A8A77A',
      'Feu': '#EE8130',
      'Eau': '#6390F0',
      'Électrik': '#F7D02C',
      'Plante': '#7AC74C',
      'Glace': '#96D9D6',
      'Combat': '#C22E28',
      'Poison': '#A33EA1',
      'Sol': '#E2BF65',
      'Vol': '#A98FF3',
      'Psy': '#F95587',
      'Insecte': '#A6B91A',
      'Roche': '#B6A136',
      'Spectre': '#735797',
      'Dragon': '#6F35FC',
      'Ténèbres': '#705746',
      'Acier': '#B7B7CE',
      'Fée': '#D685AD'
      }
      
      const backgroundColor = Object.keys(dataPokemon.apiTypes).length === 1 ? [color[dataPokemon.apiTypes[0].name], color[dataPokemon.apiTypes[0].name]] : [color[dataPokemon.apiTypes[1].name], color[dataPokemon.apiTypes[0].name]];
      // console.log(backgroundColor)
      return backgroundColor
    },
    joinTypes(types){
      return types.map((type)=>{return type.name}).join(' / ');
    },
    getImageTypeInData(name){
      const type = this.dataTypes.find(type => type.name === name);
      return type ? type.image : '';
    },
    hasPreEvolution(){
      return this.dataPokemon.apiPreEvolution != "none"
    }
  }
}
</script>

<style scoped>
* {
  font-family: Gill Sans,Gill Sans MT,Calibri,sans-serif; 
  
}

#card{
  height: 520px;
  width: 300px;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 5px;
  padding-top: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
}

.card_top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
}

.type_text {
    display: flex;
    align-items: center;
    flex: 1;
    font-style: italic;
    font-weight: bold;
}

.type_img {
    position: relative;
}

.type_img > img {
    height: 20px;
    width: 20px;
    border: 1px solid white;
    border-radius: 50%;
    margin: 2px;
}

.card_container {
    background-color: whitesmoke;
    border-radius: 5px;
    color: rgba(27, 27, 27, 0.692);
}

.pokemon_info {
    display: flex;
    justify-content: space-between;
    margin: 2px;
    font-size: medium;
}

.pokemon_img {
  position: relative;
  display: flex;
  height: 150px;
  margin: 5px auto;
  border-radius: 50%;
  aspect-ratio: 1/1;
  border: 5px dotted whitesmoke;
  box-sizing: border-box;
  
}

.pokemon_img:hover{
  animation: ease-in 1.5s rotate;
}

.pokemon_img>img {
    object-fit: cover;
    width: 100%;
}

.pokemon_evolve {
  margin: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
}

.pokemon_evolve > span {
  padding: 5px;
  margin: 2px 0;
  color: whitesmoke;
}

.pokemon_evolve > span:nth-child(2) {
  border-bottom-right-radius: 25px;
}
.pokemon_evolve > span:nth-child(1) {
  border-top-left-radius: 25px;
}

.pokemon_stat {
  margin: 10px;
  display: flex;
  flex-direction: column;
  font-size: large;
}
.pokemon_stat > span::after{
  content: "";
  width: 100%;
  height: 2px;
  border-radius: 5px;
  background: rgba(27, 27, 27, 0.692);
  display: block;
}

.pokemon_stat_container{
  display: flex;
  justify-content: space-between;

}
@keyframes rotate {
  0% {
    transform: rotate(0);
  }100% {
    transform: rotate(360deg);
  }
}
</style>