import './App.css'
import CartWidget from './components/CartWidget/CartWidget'
import Greeting from './components/Greeting/Greeting'
import NavBar from './components/NavBar/NavBar'
import Products from './components/Products/Products'



function App() {
  return (
    <>
      <NavBar/>
      <CartWidget/>
      <Greeting greeting={"BIENVENIDO!!!"}/>
      <Products/>
    </>
  )
}

export default App
