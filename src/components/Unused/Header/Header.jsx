
import Navbar from './Navbar/Navbar'
import Logo from './Logo/Logo'
import CartWidget from './CartWidget/CartWidget'


const Header = () => {
    return (
        <nav className="bg-gray-800 p-4 sticky top-0 z-10 grid grid-cols-3">
        <Logo className="col-span-1" />
        <Navbar className="col-span-1 text-center" />
        <CartWidget className="col-span-1 flex  justify-end" />
        </nav>
    );
  };
  

export default Header;