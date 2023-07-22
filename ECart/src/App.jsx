import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './style/global.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import ProductList from './pages/ProductList/ProductList'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import Aos from 'aos'
import 'aos/dist/aos.css';
import { Routes, Route } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<ProductList />} />
        <Route path='/products/:id' element={<ProductDetails />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
