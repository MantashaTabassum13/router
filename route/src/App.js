import React from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import { Routes, Route } from 'react-router-dom'
import Post from './Components/Post'
import { Link } from 'react-router-dom'
import Navigation from './Components/Navigation'
import NotFound from './Components/NotFound'
import UserProfile from './Components/UserProfile'
import Dashboard from './Components/Dashboard'
import Accounts from './Components/Accounts'
import Settings from './Components/Settings'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='post' element={<Post postid={123}/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/User" element={<UserProfile userId="16409"/>}/>
      <Route path="/dashboard">
        <Route path="accounts" element={<Accounts/>}/>
        <Route path="settings" element={<Settings/>}/>
      </Route>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    <Dashboard/>
    <Navigation/>
    </>
  
  )
}

export default App