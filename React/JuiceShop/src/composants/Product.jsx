import { useState } from "react";
import "../styles/Product.css"
import Card from "./Card";
import {data} from "../data.js"

export default function Product({setCart}){

    const addToCart = (product) => {
        setCart(prevCart => {
          const existingProduct = prevCart.find(item => item.id === product.id);
          if (existingProduct) {
            return prevCart.map(item => 
              item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
          }
          return [...prevCart, { ...product, quantity: 1 }];
        });
      };
      
    return(
        <div className="main">
            <h1>Fruit Juice</h1>
            <div className="juice_list">
                {data.map( item => (
                    <Card key= {item.id} data= {item} addToCart={addToCart} />
                )
                )}
            </div>
        </div>
    )
}