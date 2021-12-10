import React, {useState}  from 'react'

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

        <div>
            <button onClick={handlerCounterUp}>+</button>
            <p>{counter}</p>
            <button onClick={handlerCounterDown}>-</button>

        </div>
    )
}

export default ItemCount
