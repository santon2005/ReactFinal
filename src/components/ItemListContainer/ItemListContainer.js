//import Item from '../Item/Item'
import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {

    const [items, setItems] = useState([])
    useEffect(() => {
        setTimeout(() => {
        fetch('/productos.json')
        .then(response => response.json())
        .then(respJson => {console.log(respJson); setItems(respJson)})
        .catch(error => console.log('Error: ', error))
        }, 2000);
    }, [])

    return (
        <div className='ItemListContainer'>
            <ItemList items={items}/>

        </div>
    )
}

export default ItemListContainer
