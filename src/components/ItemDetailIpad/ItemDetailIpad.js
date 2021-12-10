import React from 'react'

const ItemDetailIpad = ({ itemsIpad }) => {
    return (
        <>
            <img src={itemsIpad.Imagen} alt={itemsIpad.Nombre} />
                <h2>{itemsIpad.Nombre}</h2>
                <p>{itemsIpad.Precio}</p>
        </>
    )
}

export default ItemDetailIpad