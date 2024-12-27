import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NameLists from './components/NameLists'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NameLists />
    </>
  )
}

export default App
