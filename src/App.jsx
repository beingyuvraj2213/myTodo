import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './components/Todo'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <>
      <Toaster/>
      <Todo/>

    </>
  )
}

export default App
