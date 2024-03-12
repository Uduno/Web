import { useState, useEffect } from 'react'
import axios from 'axios'
import {MonsterCard, FullCard} from './components/MonsterCard'
import './App.css'

function App() {

  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("")
  const [monstersData, setMonstersData] = useState([])
  const [selectedMonster, setSelectedMonster] = useState(null);
  // const [materialsData, setMaterialsData] = useState([])
  const URL_API = "https://botw-compendium.herokuapp.com/api/v3/compendium/all"

  
  useEffect(() => {
    axios.get(URL_API)
      .then(response => {
        const monsters = response.data.data.filter(item => item.category === "monsters");
        // const materials = response.data.data.filter(item => item.category === "materials");
        setMonstersData(monsters);
        // setMaterialsData(materials);
      })
      .catch(error => {
        // Gérer les erreurs
      });
  }, []); 

  const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#800080', '#FFA500'];

  const getColorForIndex = (index) => {
    const colorIndex = index % colors.length;
    return colors[colorIndex];
  };

  const filterSearch = () => {
    setFilter(search)
  }
  
  const filterData = () => {
    if (filter == "") return monstersData
    return monstersData.filter((monster) => {
      return monster.name.toLowerCase().includes(filter.toLowerCase())
    })
  }

  const handleSeeMoreClick = (monster) => {
    setSelectedMonster(monster);
  };

  const handleCloseFullCard = () => {
    setSelectedMonster(null);
  };


  const monsters = filterData()
  return (
    <div className="App">
      <header>
        <h1 className='title'>Zelda Ennemy Search</h1>
        <div className="searchbar_area">
          <input type="text" onChange={(e) => setSearch(e.target.value)} />
          <button onClick={filterSearch}>Search</button>
        </div>
      </header>
      <div className='container'>
        <ul className='cards'>
          {monsters.map((monster) => {
            return <li className='card'> <MonsterCard key={monster.id} data={monster} color={getColorForIndex(monstersData.indexOf(monster))}
            onClick={handleSeeMoreClick}/> </li>
          })}
        </ul>
      </div>
      {selectedMonster && (
        <div className="fullscreen">
          <FullCard
            data={selectedMonster}
            color={getColorForIndex(monstersData.indexOf(selectedMonster))}
            onClick={handleCloseFullCard}
          />
        </div>
      )}
    </div>
  )
}

export default App
