import React from 'react'
import { Blog, Features, Footer, GPT3, Header, Possibility } from './container'
import { Action, Brand, Navbar } from './components'
import './App.css'
import './index.css'

const App = () => {
  return (
    <div className="App">
      <div className="bg__gradient">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <GPT3 />
      <Features />
      <Possibility />
      <Action />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
