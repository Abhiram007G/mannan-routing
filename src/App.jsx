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
import ProtectedRoute from './components/ProtectedRoute'
function App() {
  const navigate = useNavigate();
  return (
      <Routes>
          <Route path='/login' element = {<LoginForm navigate={navigate}/> }/>
          <Route path='/' element={(<ProtectedRoute  element={<Home/>}/>)} />
          <Route path='/about' element={(<ProtectedRoute  element={<About />}/>)}/>
          <Route path="/all-products/" element={(<ProtectedRoute element ={<Allproduct/>}/>)}/>
          <Route path="/all-products/:id" element={(<ProtectedRoute element = {<Product/>}/>)}/>
          <Route path="*" element={<NotFound />}/>
          
      </Routes>
  )
}

export default App

