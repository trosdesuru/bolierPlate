import React from 'react'
import './App.css'

import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'

function App() {
  console.info('App -> call')

  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App
