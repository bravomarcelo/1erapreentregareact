import { useContext } from 'react'
import { CartContext } from '../../context/CartContex'


import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const CartWidget = () => {

  const { totalQuantity } = useContext(CartContext) 
  return (
    <div className="relative flex justify-end items-center">
     <Link to='/cart'> <FaShoppingCart className="text-2xl cursor-pointer mx-2.5" /></Link>
      <span className="bg-red-500 text-white rounded-full px-3 py-1 top-0 right-8 -mt-1 -mr-1">
      { totalQuantity }
      </span>
    </div>
  );
};



export default CartWidget;