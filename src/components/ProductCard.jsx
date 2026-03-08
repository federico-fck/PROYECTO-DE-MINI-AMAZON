import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const ProductCard = ({ product }) => {

const { addToCart } = useContext(CartContext)

return (

<div className="bg-white rounded-lg shadow-md p-4 flex flex-col">

<img
src={product.thumbnail}
className="h-40 object-contain mb-3"
/>

<h3 className="font-semibold">{product.title}</h3>

<p className="text-gray-500 text-sm line-clamp-2">
{product.description}
</p>

<p className="text-green-600 font-bold mt-2">
${product.price}
</p>

<div className="flex gap-2 mt-4">

<Link
to={`/product/${product.id}`}
className="flex-1 text-center bg-slate-800 text-white py-2 rounded"
>
Ver
</Link>

<button
onClick={()=>addToCart(product)}
className="flex-1 bg-yellow-400 py-2 rounded font-semibold"
>
Agregar
</button>

</div>

</div>

)
}

export default ProductCard