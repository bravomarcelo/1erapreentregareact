import { FaShoppingCart } from 'react-icons/fa';
const CartWidget = () => {
  return (
    <div className="relative flex justify-end items-center">
      <FaShoppingCart className="text-2xl cursor-pointer mx-2.5" />
      <span className="bg-red-500 text-white rounded-full px-3 py-1 top-0 right-8 -mt-1 -mr-1">
        3
      </span>
    </div>
  );
};



export default CartWidget;