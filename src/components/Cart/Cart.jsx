import { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContex'
import Checkout from '../Checkout/Checkout';
import { Link, useNavigate } from 'react-router-dom'



const Cart = () => {
const {cart , removeItem, total}   = useContext(CartContext)  
const items =  cart


if (cart.length === 0) {
  return (
      <div>
          <h1 className="text-center text-4xl">Su carrito está vacío.</h1>
          <Link to="/" className="block mx-auto mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 text-center rounded">Volver al menú</Link>
      </div>
  );
}

  return (
   
<div className="flex justify-center pt-20">
  <div className="w-full sm:w-auto  shadow-md rounded-lg overflow-hidden">
    <h2 className="text-lg font-semibold bg-black-200 p-4">Carrito de Compras</h2>
    <table className="w-full">
      <thead>
        <tr className="bg-black-100">
          <th className="py-2 px-4">Producto</th>
          <th className="py-2 px-4">Precio</th>
          <th className="py-2 px-4">Cantidad</th>
          <th className="py-2 px-4">Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id} className="border-b">
            <td className="py-2 px-4">{item.name}</td>
            <td className="py-2 px-4">$ {item.price.toFixed(2)} </td>
            <td className="py-2 px-4">{item.quantity}</td>
            <td className="py-2 px-4">$ {(item.price * item.quantity).toFixed(2)} </td>
            <td className="py-2 px-4"><button className="cart-item-remove-button" onClick={() => removeItem(item.id)}>Eliminar</button></td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="p-4 bg-black-100 text-xl font-semibold text-right">
      Total : $ {(total).toFixed(2)} 
    </div>
    <div className="text-center"><Link to='/checkout'>Ir al Checkout</Link></div>
  </div>
</div>

  );
};

export default Cart;