import React, {useState}  from 'react'
import './ItemCount.css'
const ItemCount = () => {
    const [counter, setCounter] = useState(0)
    

    const handlerCounterUp = () => {
        if (counter < 10) {
            setCounter(counter + 1);
        }
    };

    const handlerCounterDown = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    };

    


    return (

        <div className='Counter'>
            <button onClick={handlerCounterUp} className='Mas'>+</button>
            <p className='Number'>{counter}</p>
            <button onClick={handlerCounterDown} className='Menos'>-</button>
          <p className='Button'>AÑADIR AL CARRITO</p>

        </div>
    )
}

export default ItemCount
