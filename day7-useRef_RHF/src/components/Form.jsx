import React, { useRef } from "react"; 
 
const Form = () => { 


  // let nameRef = useRef(null);
  // let priceRef = useRef(null);
  // let categoryRef = useRef(null);
  // let imageRef = useRef(null);
  // let Formref = useRef({})

  let handelSubmit = (e)=> {
    e.preventDefault();
    // console.log(nameRef.current.value);
    // console.log(priceRef.current.value);
    // console.log(categoryRef.current.value);
    // console.log(imageRef.current.value);
    console.log(Formref);
    
    
  }
  return ( 
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6"> 
      <form onSubmit={handelSubmit} className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg flex flex-col gap-5"> 
        
        <input 
         ref={(e)=> (Formref.current.productName = e)  }
          type="text" 
          className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" 
          placeholder="Product name "
        /> 
        <input 
        // ref={priceRef}
          type="text" 
          className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" 
          placeholder="Price"
        /> 
        <span className="text-sm font-medium text-gray-700">Select a category</span> 
        <select 
          className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-700 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        > 
            <option value="MENS">MEN</option> 
            <option value="WOMEN">WOMENS</option> 
            <option value="KIDS">KIDS</option> 
        </select> 
        <input 
          // ref={imageRef}
          type="text" 
          placeholder="image" 
          className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition placeholder:text-gray-400" 
        /> 
        <button className="border-2 bg-blue-300 text-white">Create</button>
      </form> 
    </div> 
  ); 
}; 
 
export default Form;