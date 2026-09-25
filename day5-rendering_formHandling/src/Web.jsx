import React, { useState } from 'react'

const Web = () => {

   const [formData, setFormData] = useState({
   })

   let formChange = (e)=> {
     setFormData({ ...formData , [e.target.name]:e.target.value})
   }
   console.log(formData);
   
  return (
    <div >
      <div className='flex flex-col gap-4 w-50 p-5'>
        
       <input name = "name" onChange={formChange} type="text" placeholder='name'/>

       <input name = "email"  onChange={formChange} type="text" placeholder='email'/>

       <input onChange={formChange}  name = "password"  type="text" placeholder='password'/>
       
       <button  type='sumbit' className='border-2 '>Submit</button>
      </div> 



     <h1>name - {formData.name}</h1>
     <h1>email - {formData.email}</h1>
     <h1>password - {formData.password}</h1>
     
    </div>
  )
}

export default Web