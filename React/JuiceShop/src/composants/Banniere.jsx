import { useState } from "react"
import Canette from "../assets/canette.png"
import Lemon from "../assets/fruits/lemon.png"
import Orange from "../assets/fruits/orange.png"
import pLemon from "../assets/packs/lemon.png"
import pOrange from "../assets/packs/orange.png"
import "../styles/Banniere.css"

export default function Banniere() {

    const [index, setIndex] = useState(0)

    return (
        <div className="banniere">

            
            <div className="background" style={{transform: `translateX(-${index * 100}%)`}}>
                <img src={Orange} alt="orange" />
            </div>
            <div className="background" style={{transform: `translateX(-${(index) * 100}%)`}}>
                <img src={Lemon} alt="citron" />
            </div>

            <div className="radiobuttons">
                <input type="radio" name="radio" value={0} id="0" defaultChecked onChange={() => setIndex(0)}/>
                <input type="radio"  name="radio" value={1} id="1"  onChange={() => setIndex(1)}/>
            </div>

            <div className="canette">
                <div className="pack" style={{'--url':`url(${pOrange})`, '--left':`${index * 100 +5}%`, opacity: index === 0 ? 1 : 0} }></div>
                <div className="pack" style={{'--url':`url(${pLemon})`, '--left':`${index * 195}%`, opacity: index === 1 ? 1 : 0} }></div>
            </div>
        </div>
    )
}