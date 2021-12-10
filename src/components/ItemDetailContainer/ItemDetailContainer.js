import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

    const [items, setItems] = useState([])
    useEffect(() => {
        setTimeout(() => {
        fetch('/productos.json')
        .then(response => response.json())
        .then(respJson => {console.log(respJson[0]); setItems(respJson[0])})
        .catch(error => console.log('Error: ', error))
        }, 2000);
    }, [])

    return (
        <div className='ItemDetailContainer'>
            <ItemDetail items={items}/>

        </div>
    )
}

export default ItemDetailContainer
