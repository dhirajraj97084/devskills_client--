import React from 'react'
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"
import Home from './pages/home/Home'
import NoPage from './pages/noPage/NoPage'

import Register from './pages/autantication/Register'
import Login from './pages/autantication/Login'
import Contact from './pages/contact/Contact'
import Tutorials from './pages/tutorials/Tutorials'
import Courses from './pages/courses/Courses'
import Blogs from './pages/blogs/Blogs'
import Notes from './pages/notes/Notes'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/contact' element={<Contact/>} />
         <Route path='/tutorials' element={<Tutorials/>} />
        <Route path='/courses' element={<Courses/>} />
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/notes' element={<Notes/>} />

          <Route path='/*' element={<NoPage/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App