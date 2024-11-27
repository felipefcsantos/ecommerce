import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Carrinho from '../pages/Carrinho'
import Header from '../components/Header'

export default function Router() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' index element={<Home/>}/>
        <Route path='/carrinho' element={<Carrinho/>}/>
      </Routes>
    </BrowserRouter>
  )
}
