import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addCount = () => { 
    if (count < 20) { setCount(count + 1) }
    else {
      alert("Counter is 20")
    } }
  const subCount = () => {
    if (count > 0) { setCount(count - 1) }
    else {
      alert("Counter is 0")
    }
  }

  return (

    <>
      <h1>Hello Code is here {count}</h1>
      <button onClick={addCount}>Counter Added</button>
      <button onClick={subCount}>Counter Substract</button>
      <div>
        Footer {count}
      </div>
    </>
  )
}

export default App
