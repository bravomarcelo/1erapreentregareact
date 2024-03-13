
import logo from '/logo-restaurant.png'
 

const Logo = () => {
    return (
      
        <div className="flex items-center justify-between w-full p20" >
          <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 w-18 mr-2" />
          <span className="text-white text-lg pr-12 font-semibold">Restaurant Pepito</span>
          </div>
        </div>
       
    );
  };

 

export default Logo;