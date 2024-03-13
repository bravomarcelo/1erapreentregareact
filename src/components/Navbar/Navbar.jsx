
import logo from '/logo-restaurant.png'
import CartWidget from '../CartWidget/CartWidget'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    return (
    

      <nav className="bg-gray-800 p-4 sticky top-0 z-10 grid grid-cols-3">
         <div className="flex items-center justify-between w-full p20" >
          <div className="flex items-center">
          <Link to='/'> <img src={logo} alt="Logo" className="h-8 w-18 mr-2" /></Link>
          <Link to='/'><span className="text-white text-lg pr-12 font-semibold">Restaurant Pepito</span></Link>
          </div>
        </div>
        <ul className="flex space-x-4 text-white">
        <li>  <Link to='/category/Principal'>Principal</Link> </li>
        <li>   <Link to='/category/Sushi'>Sushi</Link></li>
        <li>     <Link to='/category/Sandwiches'>Sandwiches</Link></li>
        </ul>
        <CartWidget className="col-span-1 flex  justify-end" />
        </nav>
         

    );
  };

 

export default Navbar