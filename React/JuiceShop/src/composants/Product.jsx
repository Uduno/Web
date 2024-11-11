import { useState } from "react";
import "../styles/Product.css"
import Card from "./Card";
import {data} from "../data.js"

export default function Product(){
    console.log(data)
    return(
        <div className="main">
            <h1>Fruit Juice</h1>
            <div className="juice_list">
                {data.map( item => (
                    <Card key= {item.id} data= {item} />
                )
                )}
            </div>
        </div>
    )
}