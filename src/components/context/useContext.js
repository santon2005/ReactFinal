/*  import React, { createContext, useState } from 'react'
export const CartContext = createContext ([])


const CartProvider = ({children}) => {
  const [items, setItems] = useState([{
    "Imagen":"https://http2.mlstatic.com/D_NQ_NP_696612-MLA47776655319_102021-O.webp",
    "Nombre":"iPhone 13 Pro Max",
    "Precio":"U$ 1700",
    "qty":5,
    "id": 1
  }])

  const isInCart = (id) => {
}

const addItem = (id, item, qty) => {
      setItems([...items, {...items, qty: qty}])

  }

  return (
      <CartContext.Provider value={{items, addItem}}>
          {children}

      </CartContext.Provider>
  )
}

export default CartContext
  */