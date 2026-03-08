const API = "https://dummyjson.com/products"

export const getProducts = async (limit = 8, skip = 0) => {

  const res = await fetch(`${API}?limit=${limit}&skip=${skip}`)
  return res.json()

}

export const getProduct = async (id) => {

  const res = await fetch(`${API}/${id}`)
  return res.json()

}

export const searchProducts = async (query) => {

  const res = await fetch(`${API}/search?q=${query}`)
  return res.json()

}