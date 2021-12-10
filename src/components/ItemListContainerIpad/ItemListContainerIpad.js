//import Item from '../Item/Item'
import React, { useEffect, useState } from 'react'
import ItemListIpad from '../ItemListIpad/ItemListIpad'
import './ItemListContainerIpad.css'

const ItemListContainerIpad = () => {

    const [itemsIpad, setItemsIpad] = useState([])
    useEffect(() => {
        setTimeout(() => {
        fetch('/ipad.json')
        .then(response => response.json())
        .then(respJson => {console.log(respJson); setItemsIpad(respJson)})
        .catch(error => console.log('Error: ', error))
        }, 2000);
    }, [])

    return (
        <div className='ItemListContainer'>
            <ItemListIpad items={itemsIpad}/>

        </div>
    )
}

export default ItemListContainerIpad
