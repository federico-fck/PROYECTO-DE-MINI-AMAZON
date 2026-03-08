import { createContext, useState, useEffect } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart")
    return savedCart ? JSON.parse(savedCart) : []
  })

  const addToCart = (product) => {
    setCart(prev => [...prev, product])
  }

  const removeFromCart = (index) => {
    setCart(prev => prev.filter((_, i) => i !== index))
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  return (

    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>

      {children}

    </CartContext.Provider>

  )

}