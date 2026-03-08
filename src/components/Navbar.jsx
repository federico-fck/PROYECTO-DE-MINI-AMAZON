import {Link} from "react-router-dom"
import {useContext} from "react"
import {CartContext} from "../context/CartContext"

const Navbar = ()=>{

 const {cart} = useContext(CartContext)

 return(

  <nav className="bg-blue-900 text-white p-4 flex justify-between items-center">

   <h1 className="text-2xl font-bold text-yellow-400">
    MiniAmazon
   </h1>

   <Link to="/cart">

    <button className="bg-yellow-400 text-black px-4 py-2 rounded relative">

     🛒 Carrito

     <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">

      {cart.length}

     </span>

    </button>

   </Link>

  </nav>

 )

}

export default Navbar