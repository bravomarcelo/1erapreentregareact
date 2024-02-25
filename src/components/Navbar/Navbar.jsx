
import React from 'react'
import classes from './Navbar.module.css'
import CartWidget from '../Cardwidget'


const Navbar = () => {
    return(
        <header classes={classes.header}>
        <h3 className='d-flex justify-content-center bg-primary aling-items-center' style={{color:'white', fontSize:40,}}> Bienvenidos a ... </h3>
         <nav className='d-flex justify-content-center aling-items-center bg-black' style={{color:'black', fontSize:30, }}>
            <button className='btn btn-dark m-3'>HOME</button>
            <button className='btn btn-dark m-3'>PRODUCTOS</button>
            <button className='btn btn-dark m-3'>CONTACTO</button>
            <CartWidget/>
         </nav>
         
        </header>
    )
}
export default Navbar