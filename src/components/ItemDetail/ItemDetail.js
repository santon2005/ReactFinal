import React, {useContext, useState} from 'react'
import './ItemDetail.css'
import { Link } from "react-router-dom";
import {  Image } from 'semantic-ui-react'
import { CartContext } from '../../context/useContext';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ items }) => {

     const [add, setAdd] = useState(false)
    const {addItem} = useContext(CartContext) 

    return (
        <div className='ItemDetail'>
            <img src={items.Imagen} alt={items.Nombre} />
                <h2 className='ItemDetailText'>{items.Nombre}</h2>
                <p className='ItemDetailText'>{items.Precio}</p>
                <p className='ItemDetailText'>{items.Descripcion}</p>
                <Link to="/cart"  className='Boton'>FINALIZAR COMPRA</Link>
                <br />
                {
                    add ?
                    <div className='meta'>Agregado</div>
                    :
                <ItemCount item={items} stock={10} initial={1} addItem={addItem} />
                }
                <Image className='ItemDetailImage' src='https://media.idownloadblog.com/wp-content/uploads/2019/01/true-black-color-gradient-ar72014-mock-up.png' alt='Imagne' />
        </div>
    )
}

export default ItemDetail