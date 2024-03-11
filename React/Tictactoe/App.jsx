import { useState } from 'react'
import './App.css'
import Case from './components/Case'


function App() {
  const [value, setValue] = useState(Array(9).fill(null))
  const [isX, setIsX] = useState(true)
  
  function handleClick(i){
    if(value[i] !== null || Win() != null){
      return
    }
    const copyValue = [...value]
    copyValue[i] = isX ? "X" : "O"
    setValue(copyValue)
    setIsX(!isX)
  }

  function Win(){
    const winConditions = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]

    for(let i = 0; i < winConditions.length; i++){
      const [a,b,c] = winConditions[i]
      if(value[a] && value[a] === value[b] && value[a] === value[c]){
        return value[a]
      }
    }
    return null
  }

  function Message(){
    const winner = Win()
    if(winner){
      return "Winner: " + winner
    }else if(!value.includes(null)){
      return "Draw"
    }else{
      return "Player: " + (isX ? "X" : "O")
    }
  }

  function Reset(){
    setValue(Array(9).fill(null))
  }
  return (
    
    <div className="App" >
      <h1>Tic Tac Toe</h1>
      <div className="tab_game">
        <div className='tab_message'>{Message()}</div>
        <div className='row' >
          <Case value={value[0]} onClick={() => handleClick(0)} />
          <Case value={value[1]} onClick={() => handleClick(1)} />
          <Case value={value[2]} onClick={() => handleClick(2)} />
        </div>
        <div className='row' >
          <Case value={value[3]} onClick={() => handleClick(3)} />
          <Case value={value[4]} onClick={() => handleClick(4)} />
          <Case value={value[5]} onClick={() => handleClick(5)} />
        </div>
        <div className='row' >
          <Case value={value[6]} onClick={() => handleClick(6)} />
          <Case value={value[7]} onClick={() => handleClick(7)} />
          <Case value={value[8]} onClick={() => handleClick(8)} />
        </div>

        <button onClick={Reset}>Reset</button>
      </div>
      
    </div>
  )
}

export default App
