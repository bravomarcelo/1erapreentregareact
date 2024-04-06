import react from 'react'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContex'
import { NotificationProvider } from './notification/NotificationsService'
import { Checkout } from './components/Checkout/Checkout'
import  Cart  from './components/Cart/Cart' 
import './App.css'
 
const App = () => {
  return (
    <>
    
 
      <BrowserRouter>
      <NotificationProvider>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Bienvenidos'}/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Listado de productos filtrados '}/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
          <Route path='/cart' element={<Cart/>}/> 
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
        </CartProvider>
       </NotificationProvider>
      </BrowserRouter>
     
    </>
  )
}

export default App