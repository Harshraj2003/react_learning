
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'

import React from 'react'
import Card from './components/Card'



const App = () => {
  return (
    <div>
      <div className='p-10'>
         <Card username="Harsh" idNo="A"/>
         <Card username="Ayush" idNo="B"/>
      </div>
          

    </div>
  )
}

export default App




/*
      two way binding code 


const App = () => {

  const [username, setusername] = useState('')

  const submitHandler = (e)=>{
    e.preventDefault()

    console.log(username)
    
    setusername('')

  }
  
  return (
    <div>
        <form onSubmit={(e) => {
          submitHandler(e)
        }}> 
          <input 
             value ={username}
              onChange={(e)=>{
                setusername(e.target.value)
              }}
         className='py-4 px-3 text-xl m-5 rounded'type="text" placeholder='enter your name' />
        <button className='py-4 px-3 text-xl font-semibold bg-emreld-600 rounded text-white'>submit</button>
      </form>
    </div>
  )
}

export default App */

















/*const App = () => {
  const [set, setA] = useState(0)


  return (
    <div>
      <h3>Number is {set}</h3>
      <button onClick={() =>setA(set + 5)}>Increment</button>
      <button onClick={() =>setA(set - 5)}>decrement</button>

    </div>
  )
}

export default App */
 



/*function App() {
  
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

export default App */
