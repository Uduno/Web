import { useState } from 'react'
import Navbar from './composants/Navbar'
import Banniere from './composants/Banniere'
import Product from './composants/Product'
import './App.css'

function App() {
  

  return (
    <div style={{background: "#ffe3ae"}}>
      <Navbar />
      <Banniere />
      <Product />
    </div>
  )
}

export default App
