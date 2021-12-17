import React from 'react'

const ItemDetail = ({ items }) => {
    return (
        <>
            <img src={items.Imagen} alt={items.Nombre} />
                <h2>{items.Nombre}</h2>
                <p>{items.Precio}</p>
                <p>{items.Descripcion}</p>
        </>
    )
}

export default ItemDetail