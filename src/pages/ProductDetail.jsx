import { useParams } from "react-router-dom"
import { useEffect,useState,useContext } from "react"
import { CartContext } from "../context/CartContext"

const ProductDetail = () => {

const { id } = useParams()

const [product,setProduct] = useState(null)

const { addToCart } = useContext(CartContext)

useEffect(()=>{

fetch(`https://dummyjson.com/products/${id}`)
.then(res=>res.json())
.then(data=>setProduct(data))

},[id])

if(!product) return <p className="p-10">Cargando...</p>

return(

<div className="flex justify-center mt-10">

<div className="bg-white shadow-lg rounded-xl p-10 flex gap-10 w-[900px]">

<img
src={product.thumbnail}
className="w-80 object-contain"
/>

<div>

<h1 className="text-3xl font-bold mb-4">
{product.title}
</h1>

<p className="text-gray-600 mb-4">
{product.description}
</p>

<p className="text-green-600 text-xl font-bold mb-6">
${product.price}
</p>

<button
onClick={()=>addToCart(product)}
className="bg-yellow-400 px-10 py-3 rounded font-semibold w-full"
>
Agregar al carrito
</button>

</div>

</div>

</div>

)

}

export default ProductDetail