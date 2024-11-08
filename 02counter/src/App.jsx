
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'

/*import React from 'react'

const App = () => {

  const user = "Harsh"
  const age = 22

  return (
    <div>Hello {user}, {age}</div>
  )
}

export default App
 */






function App() {
  
  let [counter, setCounter] = useState(15)

  const addValue = () => {
    setCounter(counter + 1)
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
       <h1>chai aur react</h1>
       <h2> Counter value:{counter} </h2>

       <button onClick={addValue}>Add value {counter}</button>
       <br/>
       <button onClick={removeValue}>remove value{counter}</button>
       <p>footer:{counter}</p>

    </>
  )
}

export default App 
