import React from 'react'

const ProductsCard = ({products , deletefn}) => {
  
    
  return (
    <div className='p-4 mt-6 border-2 '>
        <div  className='w-40'> 
            <img src={products.image} alt="" />
        </div>
       <div>
         <h2>{`title: ${products.title.substring(0 , 10)}`}</h2>
        <h2>{`category: ${products.category}`}</h2>
        <h2>{`price: ${products.price}`}</h2>
       </div>
       <button  className='border bg-red-500' onClick={()=>{
            deletefn(products.id)
       }}>Delete</button>
    </div>
    
  )
}

export default ProductsCard