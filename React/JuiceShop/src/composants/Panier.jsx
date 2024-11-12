import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { MdAddBox, MdIndeterminateCheckBox } from "react-icons/md";
import {data} from "../data.js"
import "../styles/Panier.css"

export default function Panier({cart, setCart, basketOn, setBasketOn}) {

    const addToCartbyId = (id) => {
        setCart(prevCart => {
          const existingProduct = prevCart.find(item => item.id === id);
          if (existingProduct) {
            return prevCart.map(item => 
              item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            );
          }
          return [...prevCart, { ...data.find(item => item.id === id), quantity: 1 }];
        });
      };
    
      const removeFromCartbyId = (id) => {
        setCart(prevCart => {
            const updatedCart = prevCart.map(item => 
                item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            );
            
            return updatedCart.filter(item => item.quantity > 0);
        });
    };
    



    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + 1.50 * item.quantity, 0);

    const imgFromid = (id) => {
        return data.find(item => item.id === id).fruit
    }

    const handleBasket = () => {
        setBasketOn(false)
    }

    const handleValidation = () => {
       alert("Thank you for your order!")
    }
    return (
        <div className="basket_area" style={{ display: basketOn ? "flex" : "none"}}>
            <div className="basket">
                <div className="top_basket">
                    <h1>Basket</h1>
                    <IoMdCloseCircle onClick={handleBasket}/>
                </div>
                <div className="list_buy">
                    {cart.filter(item => item.quantity > 0).map(item => (
                    <div className="item_buy" key={item.id}>
                        <img src={imgFromid(item.id)} alt={item.name} />
                        <div className="info">
                            <p>{item.name}</p>
                            <p>{item.quantity}</p>
                            <p>${(item.quantity * 1.5).toFixed(2)}</p>
                        </div>
                        <div className="buttons">
                            <MdIndeterminateCheckBox onClick={() => removeFromCartbyId(item.id)} />
                            <MdAddBox onClick={() => addToCartbyId(item.id)} />
                        </div>
                    </div>
                    ))}
                </div>

                <div className="bottom_basket" onClick={handleValidation}>
                    <p>Total: {totalItems}</p>
                    <p>${(totalPrice).toFixed(2)}</p>
                </div>
            </div>
            
        </div>
    );
}