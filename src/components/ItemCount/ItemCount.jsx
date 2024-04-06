import { useState } from "react"


const ItemCount = ({ initialValue = 1, stock={cantStock} , onAdd}) => {
    const [count, setCount] = useState(initialValue)
    
    
    const decrement = () => {
        if(count > 1) {
            setCount(count => count - 1)
        }
    }
    
    const increment = () => {
        if(count < {cantStock}) {
            setCount(prev => prev + 1)
       }
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={decrement}>-</button>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default ItemCount