import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Form from './components/Form'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Form/>
   <Counter />
    </>
  )
}

export default App
