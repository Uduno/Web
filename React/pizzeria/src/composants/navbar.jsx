import { RiShoppingBagLine, RiShoppingBagFill } from "react-icons/ri";

export default function Navbar(){
    return(
        /* couleur de fond de la navbar #C58160
           hauteur de la navbar = valeur * 4 (h-12 = 48px), change en fonction de la taille d'écran
           font utilisé InknutAntiqua (voir tailwind.config.js)
        */
        <nav className="bg-orange-900 h-12 top-0 w-full flex items-center sm:h-14 md:h-16 lg:h-20"> 
            <p className="font-antika text-white center mx-auto text-sm sm:text-base md:text-lg" >LaPizzoteca</p>
            <RiShoppingBagLine className="text-white  text-2xl sm:text-3xl md:text-4xl lg:text-5xl"/>
        </nav>
    )
}