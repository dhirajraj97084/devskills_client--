import React from 'react'
import Layout from '../../components/layout/Layout'
import coursesData from '../../coursesData/CoursesData'

function Courses() {
  
  return (
    <Layout>
      <div className="main">
            <div className="div min-h-screen bg-gradient-to-br px-4 from-gray-900 via-gray-800 to-black text-white">
            <h1 className='text-2xl md:text-3xl font-semibold  flex justify-center py-12 md:py-14'>All Premium Courses Here</h1>
            
            <div className="cards">
                <div className="items grid grid-cols-1 md:grid-cols-3 gap-6  ">
                    {
                        coursesData.map((item,index)=>{
                           return <div key={index} className="div bg-black/80 pb-3 rounded-md shadow-md m-1 ">
                                <img className='rounded-t-md w-full' src={item.image} alt={item.image} />
                                <div className="div px-4 py-3">
                                    <p className='text-xl font-semibold'>{item.title}</p>
                                <p className='text-sm font-semibold text-white/60 pb-1'>{item.description}</p>
                                <span className='text-xl font-bold'>{item.price}</span>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
      </div>
    </Layout>
  )
}

export default Courses