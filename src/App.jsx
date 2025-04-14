import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'
import Allproduct from './components/Allproduct'
import Product from './components/Product'
import LoginForm from './components/Login'
import { useNavigate } from 'react-router-dom';
import ProtectedRoutes from './components/ProtectedRoute'
function App() {
  const navigate = useNavigate();
  return (
      <Routes>
          
          <Route element={(<ProtectedRoutes/>)}>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path="/all-products/" element={<Allproduct/>}/>
            <Route path="/all-products/:id" element={<Product/>}/>
          </Route>
          
          <Route path='/login' element = {<LoginForm navigate={navigate}/> }/>
          <Route path="*" element={<NotFound />}/>
          
      </Routes>
  )
}

export default App

