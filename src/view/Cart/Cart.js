 import React, {useContext} from 'react'
import {CartContext} from '../../components/context/useContext'
const Cart = () => {
    const {items, addItem} = useContext(CartContext)
    console.log(items)
    
    return (
        <div>
            
        </div>
    )
}

export default Cart
