import React from 'react'
import {useForm} from 'react-hook-form'

const RHF = () => {
    let {register , 
        handleSubmit , 
        reset , 
        formState:{errors}
    } = useForm()
    // console.log(data);
    
  return (
    <div>
         <form onSubmit={handleSubmit(()=>{})} className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg flex flex-col gap-5"> 
         
        <input 
        {...register("productName")}
          type="text" 
          className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" 
          placeholder="Product name "
        /> 
        <input 
        {...register("price")}
          type="text" 
          className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" 
          placeholder="Price"
        /> 
        <span className="text-sm font-medium text-gray-700">Select a category</span> 
        <select  {...register("category")} 
          className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-700 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        > 
            <option value="MENS">MEN</option> 
            <option value="WOMEN">WOMENS</option> 
            <option value="KIDS">KIDS</option> 
        </select> 
        <input 
          {...register("image")}
          type="text" 
          placeholder="image" 
          className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition placeholder:text-gray-400" 
        /> 
        <button className="border-2 bg-blue-300 text-white">Create</button>
      </form> 

      
    </div>
  )
}

export default RHF