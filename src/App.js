import React from 'react'
import Rutas from './Rutas/Rutas'
import CartProvider from './components/context/useContext'
const App = () => {
  return (
    <div className='App'>
      <CartProvider>
      <Rutas />
      </CartProvider>

    </div>
  )
}

export default App
