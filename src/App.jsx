import React from 'react'
import Signup from './pages/Signup'
import Login from './pages/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Verify from './pages/Verify'
import Home from './pages/Home'

const App = () => {
return(
  <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  </div>
)
}

export default App