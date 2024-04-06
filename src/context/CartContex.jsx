import { useState, createContext } from 'react'
import { useNotification } from '../notification/hooks/useNotification'
export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const { showNotification } = useNotification()
 
  
    const addItem = (productToAdd) => {
      if(!isInCart(productToAdd.id)) {
        setCart(prev => [...prev, productToAdd])
        showNotification('success', 'Producto agregado correctamente')
      } else {
        showNotification('error', 'El oroducto ya existe en el carrito')
      }
    }
  
    const isInCart = (id) => {
      return cart.some(prod => prod.id === id)
    }
  
    const clearCart = () => {
      setCart([])
    }

    const removeItem = (id) => {
      const updatedCart = cart.filter(prod => prod.id !== id)

      setCart(updatedCart)
      showNotification('info', 'Producto eliminado correctamente')
    }

    const getTotalQuantity = () => {
      let acumulador = 0
  
      cart.forEach(prod => {
        acumulador += prod.quantity
      })
  
      return acumulador
    }
  
    const totalQuantity = getTotalQuantity()

    const getTotal = () => {
      let acumulador = 0
  
      cart.forEach(prod => {
        acumulador += prod.quantity * prod.price
      })
  
      return acumulador
    }
  
    const total = getTotal()

    return (
        <CartContext.Provider value={{cart, addItem, totalQuantity, total, clearCart, isInCart, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}