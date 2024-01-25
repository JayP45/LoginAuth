import React from 'react'
import './App.css'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import Register from './Components/Register'
import Login from './Components/Login'
import ProtectRoute from './Services/ProtectRoute'

const App = () => {
  
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>

          {/* Protected Routes */}

          <Route path='/' element={<ProtectRoute/>}>
          <Route path='/home' element={<Home/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App