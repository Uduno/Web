import { useState } from 'react'
import Navbar from './composants/Navbar'
import Banniere from './composants/Banniere'
import Product from './composants/Product'
import './App.css'

function App() {
  
  const [cart, setCart] = useState([])

 

  
  return (
    <div style={{background: "#ffe3ae"}}>
      <Navbar cart={cart} />
      <Banniere />
      <Product  setCart={setCart}/>
    </div>
  )
}

export default App
