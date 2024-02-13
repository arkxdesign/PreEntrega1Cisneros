import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CartWidget from './components/CartWidget/CartWidget';
import Logotipo from './components/Logotipo/Logotipo';
import NavBar from './components/NavBar/NavBar';
import Products from './components/Products/Products';
import Error404 from './components/Error404/Error404';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='container'>
          <Logotipo/>
          <NavBar/>
          <CartWidget/>
            <Routes>
              <Route path='/' element={<Products/>} />
              <Route path='/categoria/:categoriaId' element={<Products/>} />
              <Route path='/contenido/:id' element={<ItemDetailContainer/>} />
              <Route path='*' element={<Error404/>} />
            </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
