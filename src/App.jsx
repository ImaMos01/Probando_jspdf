import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Solicitud from './component/Solicitud'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Solicitud />
    </div>
  )
}

export default App
