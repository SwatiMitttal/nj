
import {Route,Routes,BrowserRouter}  from 'react-router-dom'
import Home from './components/Home'
import Detail from './components/Detail'
import Car1 from './components/Car1'

import Login from './components/Login'
import Signup from './components/Signup '
import Totalamt from './components/Totalamt'


import Home1 from './components/Home1'
import { useState } from 'react'

function App() {

 
  const scat=localStorage.getItem('scat')
  
  return (
    <div className="App">
         <h1 className='text-red-900 text-4xl inline-flex  text-lg-center'>NEW JANTA BOOKS & STATIONERS</h1>
      
      <BrowserRouter>
    
     <Routes>
      <Route   path='/' element={<Home />}>  </Route>
      <Route   path='/home1' element={<Home1/>} ></Route>
      <Route  path='/car'   element={<Car1/>}></Route>
      <Route index  element={<Home/>}></Route>
      <Route  path='/:slug' element={<Detail/>}></Route>
      <Route path='/login'  element={<Login/>}  ></Route>
      <Route   path='/signup'  element={<Signup/>} ></Route>
      <Route   path='/totamt'  element={<Totalamt/>}  ></Route>
     
      </Routes>
      
      </BrowserRouter> 
      </div>
  )
}

export default App


