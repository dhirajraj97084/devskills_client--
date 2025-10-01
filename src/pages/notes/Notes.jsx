import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import { BioContext } from '../../contextApi/ContextApi'

function Notes() {
  const {age,name}=useContext(BioContext);
  return (
    <Layout>
      <div className="sidebar bg-black/40 text-white w-64 h-screen space-y-6 overflow-y-auto z-0 p-5 ">
        <h1>hello,{name}</h1>
        <h1>"age is :" {age}</h1>
      </div>
    </Layout>
  )
}

export default Notes