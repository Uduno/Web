<template>
    <div id="filters">
        <h2>Filter</h2>
        <div class="filter_item">
            <label for="">Pokemon Name</label>
            <input v-model="name" class="input" type="text" placeholder="Search">
        </div>
        <div class="filter_item">
            <label for="type">Pokemon Type</label>
            <select  v-model="type" class="input" name="type">
                <option value="">Tous</option>
                <option value="Acier">Acier</option>
                <option value="Combat">Combat</option>
                <option value="Dragon">Dragon</option>
                <option value="Eau">Eau</option>
                <option value="Électrik">Électrik</option>
                <option value="Fée">Fée</option>
                <option value="Feu">Feu</option>
                <option value="Glace">Glace</option>
                <option value="Insecte">Insecte</option>
                <option value="Normal">Normal</option>
                <option value="Plante">Plante</option>
                <option value="Poison">Poison</option>
                <option value="Psy">Psy</option>
                <option value="Roche">Roche</option>
                <option value="Spectre">Spectre</option>
                <option value="Sol">Sol</option>
                <option value="Ténèbres">Ténèbres</option>
                <option value="Vol">Vol</option>
            </select>
        </div>
        <button class="search_button" @click="filterPokemon(name, type)">Search</button>
    </div>
</template>

<script>
export default {
    name: 'filters',

    props:{
        filterPokemon: Function
    },
    data(){
        return {
            name: '',
            type: ''
        }
    }
}
</script>

<style scoped>
    #filter{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 300px;
        border-radius: 10px;
        box-sizing: border-box;
        padding: 5px;
        position: relative;
    }
    .filter_item{
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
    }
    .input{
        padding: 5px;
        border-radius: 5px;
        box-sizing: border-box;
        margin-top: 5px;
        width: 250px;
        height: 30px;
    }

    .search_button{
        padding: 5px;
        border-radius: 5px;
        box-sizing: border-box;
        margin-top: 5px;
        width: 250px;
        height: 30px;
        background: #e8e8e8;
        border: none;
        color: black;
        font-size: large;
        cursor: pointer;
        font-weight: 700;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-seri
    }
    .search_button:hover{
        background: #a9a9a9;
        color: white
    }
</style>