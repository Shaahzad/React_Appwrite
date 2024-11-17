import React from 'react'
import Signup from './pages/Signup'
import Login from './pages/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Verify from './pages/Verify'

const App = () => {
return(
  <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/verify' element={<Verify/>}/>
    </Routes>
    </BrowserRouter>
  </div>
)
}

export default App