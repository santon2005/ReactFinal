import React, { useContext } from 'react'
import './CartWidget.css'
import {CartContext} from '../../context/useContext'
const CartWidget = () => {
    const {items} = useContext(CartContext)
    
    let itemsInCart = 0;

    items.map((item) => {
        itemsInCart = itemsInCart + item.qty
    })

    return (
        <>
            <div className='ItemsInCart'>
                {itemsInCart}
            </div>
                <img src='https://icon-library.com/images/cart-icon-png-white/cart-icon-png-white-11.jpg' width={35} alt='CartWidget' className='CartWidget'/>
        </>
    )
}

export default CartWidget
