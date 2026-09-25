import React from 'react'
import { useState } from 'react'

const App = () => {

      const [count, setCount] = useState(0)
      const [user, setUser] = useState({
        name:"zaid"
      })

         let countChnage = ()=>{
            let cnt = count + 1
            setCount(cnt)
            
         }

         let nameChange = () =>{
          user.name = "batman"
          
         }


  return (
    <div>
        
      <h1>Count is - {count}</h1>
      <h1>Name is - {user.name}</h1>

      <button onClick={nameChange}>Chnage Name</button>
      <button onClick={countChnage}>Chnage Count</button>
    </div>
  )
}

export default App