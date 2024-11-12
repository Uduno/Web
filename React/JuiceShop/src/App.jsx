import { useState } from 'react'
import Navbar from './composants/Navbar'
import Banniere from './composants/Banniere'
import Product from './composants/Product'
import Panier from './composants/Panier'
import './App.css'

function App() {
  
  const [cart, setCart] = useState([])
  const [basketOn, setBasketOn] = useState(false)
 

  
  return (
    <div style={{background: "#ffe3ae"}}>
      <Navbar cart={cart} setBasketOn={setBasketOn} />
      <Banniere />
      <Product  setCart={setCart}/>
      <Panier cart={cart} basketOn={basketOn} 
      setBasketOn={setBasketOn} setCart={setCart} />
    </div>
  )
}

export default App
