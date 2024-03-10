import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CartWidget from './components/CartWidget/CartWidget';
import Logotipo from './components/Logotipo/Logotipo';
import NavBar from './components/NavBar/NavBar';
import Products from './components/Products/Products';
import Error404 from './components/Error404/Error404';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';
import { CartProvider } from './components/Context/CartProvider';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <div className='containerHeader'>
            <Logotipo/>
            <NavBar/>
            <CartWidget/>
          </div>
          <div className='containerBody'>
            <Routes>
              <Route path='/' element={<Products/>} />
              <Route path='/categoria/:categoriaId' element={<Products/>} />
              <Route path='/contenido/:id' element={<ItemDetailContainer/>} />
              <Route path='/checkout' element={<Checkout/>} />              
              <Route path='*' element={<Error404/>} />
            </Routes>
          </div>
          <div className='footerContainer'>
            <Footer />
          </div>
          
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
