import { RiShoppingBasketFill, RiShoppingBasketLine } from "react-icons/ri";
import "../styles/Navbar.css"

export default function Navbar({cart}) {
    return (
        <nav className="navbar">
            <div className="title">
                <h1>Juice Shop</h1>
            </div>
            <div className="basket">
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