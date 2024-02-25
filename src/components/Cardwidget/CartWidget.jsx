import cart from './assets/carrito.svg'
import classes from './CartWidget.module.css'

const CartWidget = () => {
    return(
        <button className='bg-black' classes={classes['widget-container']}>
            <img width='30px' height='30px' src={cart} /> 
            <span style={{ color: "white"}}>0</span>      
      </button>
    )
}
export default CartWidget
