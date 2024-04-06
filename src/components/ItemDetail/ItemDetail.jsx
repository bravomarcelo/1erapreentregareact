import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContex'
import ItemCount from '../ItemCount/ItemCount'
import { useNotification } from '../../notification/hooks/useNotification'

const InputCount = ({ onAdd, stock, initial = 1 }) => {
    const [count, setCount] = useState(initial)

    const handleChange = (e) => {
        if (e.target.value <= stock) {
            setCount(e.target.value)
        }
    }

    return (
        <div>
            <input type='number' onChange={handleChange} value={count} />
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

const ButtonCount = ({ onAdd, stock, initial = 1 }) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if (count < stock) {
            setCount(count + 1)
        }

    }

    const decrement = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

const ItemDetail = ({ id, name, category, stock, img, price, description }) => {
    const [inputType, setInputType] = useState('button')
    const [quantity, setQuantity] = useState(0)
    const ItemCountComponent = inputType === 'input' ? InputCount : ButtonCount

    const { addItem } = useContext(CartContext)
    const { showNotification } = useNotification()

 


    const handleOnAdd = (quantity) => {
        const objProductToAdd = {
            id, name, price, quantity
        }
        setQuantity(quantity)
        addItem(objProductToAdd)
    }
   
    return (
        <article className="p-4 bg-black border rounded-md overflow-hidden">
            <button onClick={() => setInputType(inputType === 'input' ? 'button' : 'input')}>
                Cambiar contador
            </button>
            <header className="p-4">
                <h1 className="text-2xl font-semibold mb-4">Detalle de producto</h1>
                <h2 className="text-xl font-semibold">{name}</h2>
            </header>
            <picture>
                <img src={img} alt={name} className="w-full" />
            </picture>
            <section className="p-4">
                <p className="mb-2">Categoria: {category}</p>
                <p className="mb-2">Descripción: {description}</p>
                <p className="mb-2">Precio: $ {price}</p>
                <span className="text-lg bg-gray">Stock disponible: {stock}</span>
            </section>
            <footer className="p-4">
                {
                    quantity === 0 ? (
                        <ItemCountComponent onAdd={handleOnAdd} stock={stock} />
                    ) : (
                            <Link to='/cart'>Finalizar compra</Link>
                        )
                }
            </footer>
        </article>
    )
}

export default ItemDetail