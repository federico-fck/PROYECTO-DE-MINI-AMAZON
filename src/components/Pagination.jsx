const Pagination = ({page,setPage,totalPages})=>{

 return(

  <div className="flex justify-center gap-4 mt-10">

   <button
    onClick={()=>setPage(page-1)}
    disabled={page===0}
    className="bg-gray-800 text-white px-4 py-2 rounded"
   >
    Anterior
   </button>

   <span>

    Página {page+1} de {totalPages}

   </span>

   <button
    onClick={()=>setPage(page+1)}
    disabled={page+1===totalPages}
    className="bg-gray-800 text-white px-4 py-2 rounded"
   >
    Siguiente
   </button>

  </div>

 )

}

export default Pagination