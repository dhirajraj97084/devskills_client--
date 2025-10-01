import React, { useContext } from 'react'
import { BioContext } from '../../contextApi/ContextApi'

function Blogs() {
  const {items}=useContext(BioContext);
  
  return (
    <div>
      {items.map((i,index)=>(
        
        <div key={index} className="div">
            <h1>{i.name}</h1> 
            <p>{i.age}</p>
        </div>
      ))}
    </div>
  )
}

export default Blogs