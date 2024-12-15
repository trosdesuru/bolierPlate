import React from 'react'
import './App.css'

import Home from './pages/Home'
import Header from './components/Header'

function App() {
  console.info('App -> call')

  return (
    <div>
      <Header />
      <Home />
    </div>
  )
}

export default App
