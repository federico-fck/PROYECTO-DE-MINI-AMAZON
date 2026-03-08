import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const Cart = () => {

  const { cart, removeFromCart } = useContext(CartContext)

  const total = cart.reduce((acc, product) => acc + product.price, 0)

  return (

    <div className="p-10">

      <h1 className="text-2xl font-bold mb-6">
        Carrito
      </h1>

      {cart.length === 0 && (
        <p className="text-gray-500">Tu carrito está vacío</p>
      )}

      {cart.map((product, index) => (

        <div
          key={product.id + "-" + index}
          className="grid grid-cols-3 items-center border p-4 mb-3 bg-white"
        >

          <p>
            {product.title}
          </p>

          <p className="text-center font-semibold">
            ${product.price}
          </p>

          <div className="flex justify-end">

            <button
              onClick={() => removeFromCart(index)}
              className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
            >
              Eliminar
            </button>

          </div>

        </div>

      ))}

      <div className="flex justify-end mt-8">
        <div className="bg-white p-4 rounded shadow text-xl font-bold">
          Total: ${total.toFixed(2)}
        </div>
      </div>

    </div>

  )

}

export default Cart
