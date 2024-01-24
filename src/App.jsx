import './App.css'
import CartWidget from './components/CartWidget/CartWidget'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import Products from './components/Products/products'



function App() {
  return (
    <>
      <NavBar/>
      <CartWidget/>
      <Products/>
    </>
  )
}

export default App
