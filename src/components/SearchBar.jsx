import {useState} from "react"

const SearchBar = ({onSearch})=>{

 const [query,setQuery] = useState("")

 const handleChange = (e)=>{

  const value = e.target.value
  setQuery(value)
  onSearch(value)

 }

 return(

  <div className="flex justify-center mb-6">

   <input
    type="text"
    placeholder="Buscar productos..."
    value={query}
    onChange={handleChange}
    className="w-full max-w-xl border p-3 rounded shadow"
   />

  </div>

 )

}

export default SearchBar