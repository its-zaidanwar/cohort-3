import React, { useState } from 'react'
import Contact from './Contact'

const App = () => {
  // let cnt = 0;
  // let [count , setCount] = useState(0)
  // let [bln , setBln] = useState(true);
  // console.log(bln);
  // console.log(count);
  

// useState[count , setcount] = useState(count)
 
  
  return (
    <div>
     {/* <h1>count {count}</h1>
     <button onClick={()=> {
      setCount(count + 1)
     }}>increment</button>


     <button onClick={()=>{
      setBln(false)
     }}>boolean</button> */}
     
  <Contact name = "zaid" />

     
     </div>



  )
}

export default App