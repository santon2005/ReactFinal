import React from 'react'
import Rutas from '../src/components/Rutas/Rutas'
import { CartProvider } from './context/useContext'
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
