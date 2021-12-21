import React, {useContext} from 'react'
import { CartContext } from '../../context/useContext'
const Cart = () => {

    const {items, removeItem, clearItems} = useContext(CartContext)
    return (
        <div>
             {
            items.map((item) => (
                <div className='four wide column' key={item.id}>
                    <h1>{item.title}</h1>
                    <h5>{item.qty}</h5>
                    <h5 style={{color : "red", cursor: "pointer"}} onClick={() => removeItem(item.id)}>Borrar producto</h5>
                </div>
            ))
        }
            <h5 style={{color : "green", cursor: "pointer"}} onClick={() => clearItems()}>Vaciar Carrito</h5> 
        </div>
    )
}

export default Cart
