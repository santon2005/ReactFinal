import React, { useEffect, useState } from 'react'
import ItemDetailIpad from '../ItemDetailIpad/ItemDetailIpad'

const ItemDetailContainerIpad = () => {

    const [itemsIpad, setitemsIpad] = useState([])
    useEffect(() => {
        setTimeout(() => {
        fetch('/ipad.json')
        .then(response => response.json())
        .then(respJson => {console.log(respJson[0]); setitemsIpad(respJson[0])})
        .catch(error => console.log('Error: ', error))
        }, 2000);
    }, [])

    return (
        <div className='ItemDetailContainer'>
            <ItemDetailIpad items={itemsIpad}/>

        </div>
    )
}

export default ItemDetailContainerIpad
