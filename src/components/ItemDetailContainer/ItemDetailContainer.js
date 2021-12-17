import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const  params = useParams()
    //const  id = useParams()

    const [items, setItems] = useState([])
    useEffect(() => {
        setTimeout(() => {
        fetch('/productos.json')
        .then(response => response.json())
        .then(respJson => {console.log(respJson); setItems(respJson.find((prod) => prod.id === params.id)
        )})
        .catch(error => console.log('Error: ', error))
    }, 2000);
    }, [params])
    
    return (
        <div className='ItemDetailContainer'>
            <ItemDetail items={items}/>

        </div>
    )
}

export default ItemDetailContainer

