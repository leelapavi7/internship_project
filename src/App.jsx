import React from 'react'
import Landing_screen from './Landing_screen'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login_screen from './Login_screen'
import Profile from './Profile'
import Signup_screen from './Signup_screen'

const App = () => {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing_screen/>} />
        <Route path="/login/" element={<Login_screen/>} />
        <Route path="/profile/" element={<Profile/>} />
        <Route path="/signup/" element={<Signup_screen/>} />
      </Routes>
    </BrowserRouter>

    // <div>
    //   <Landing_screen/>
    // </div>
  )
}

export default App