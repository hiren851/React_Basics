import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TextCard from './components/TextCard'
import ImageCard from './components/ImageCard'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='main'>

    <TextCard/>
    <TextCard/>
    <ImageCard/>
    <ImageCard/>
    <Button className="primary"/> 
    <Button className="secondary"/>
    <Button className="danger"/>
    <Button className="success"/>
    </div>
    </>
  )
}

export default App
