import { RiShoppingBasketFill, RiShoppingBasketLine } from "react-icons/ri";
import "../styles/Navbar.css"

export default function Navbar({cart, setBasketOn}) {

    const handleBasket = () => {
        setBasketOn(true)
    }
    return (
        <nav className="navbar">
            <div className="title">
                <h1>Juice Shop</h1>
            </div>
            <div className="basket_icon" onClick={handleBasket}>
                {cart.length > 0 ? (
                    <>
                    <RiShoppingBasketFill />
                    <span>{cart.length}</span>
                    </>
                ) : (
                    <RiShoppingBasketLine />
                )}
            </div>
        </nav>
    )
}