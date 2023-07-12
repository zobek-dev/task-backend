import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegisterPage  from  './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import { AuthProvider } from './context/authContext'

import './App.css'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/tasks" element={<h1>Tasks</h1>}/>
          <Route path="/add-taks" element={<h1>Add Task</h1>}/>
          <Route path="/tasks/:id" element={<h1>Update Task</h1>}/>
          <Route path="/profile" element={<h1>Profile</h1>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider> 
  )
}

export default App
