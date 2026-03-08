import {useEffect,useState} from "react"
import {getProducts,searchProducts} from "../services/api"
import ProductCard from "../components/ProductCard"
import SearchBar from "../components/SearchBar"
import Pagination from "../components/Pagination"

const Home = ()=>{

 const [products,setProducts] = useState([])
 const [page,setPage] = useState(0)
 const [total,setTotal] = useState(0)
 const [search,setSearch] = useState("")

 useEffect(()=>{

  loadProducts()

 },[page])

 const loadProducts = async ()=>{

  const data = await getProducts(8,page*8)

  setProducts(data.products)
  setTotal(data.total)

 }

 const handleSearch = async(value)=>{

  setSearch(value)
  setPage(0)

  if(value===""){

   loadProducts()

  }else{

   const data = await searchProducts(value)
   setProducts(data.products)

  }

 }

 const totalPages = Math.ceil(total/8)

 return(

  <div className="bg-gray-100 min-h-screen p-6">

   <h1 className="text-3xl font-bold text-center mb-6">

    Productos

   </h1>

   <SearchBar onSearch={handleSearch}/>

   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

    {products.map(product=>(

     <ProductCard key={product.id} product={product}/>

    ))}

   </div>

   {!search && (

    <Pagination page={page} setPage={setPage} totalPages={totalPages}/>

   )}

  </div>

 )

}

export default Home