import React, { createContext } from 'react'

export const BioContext=createContext();

function ContextApi({children}) {
    const name="dhiraj kumar";
    const age=23;
    const items=[
        {
            name:"dhiraj",
            age:34
        },
        {
            name:"suraj",
            age:24
        },
        {
            name:"ramu",
            age:14
        },
    ]
  return (
    <BioContext.Provider value={{name,age,items}}> {children} </BioContext.Provider>
  )
}

export default ContextApi