import React from 'react'
import  Item  from '../Item/Item'

const ItemListIpad = ({ items}) => {
    return (
        <>
        <div className='ui grid'>
        {
            items.map((item) => (
                <div className='four wide column' key={item.id}>
                <Item item={item} />
                </div>
            ))
        }
        </div>
        </>
    )
}

export default ItemListIpad
