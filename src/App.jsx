import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Solicitud from './component/Solicitud'
import PersonaPrestamo from './component/PersonaPrestamo'
import EmpresaPrestamo from  './component/EmpresaPrestamo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <PersonaPrestamo />
    </div>
  )
}

export default App
