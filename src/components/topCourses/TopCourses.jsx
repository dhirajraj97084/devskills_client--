import React from 'react'
import coursesData from '../../data/coursesData/CoursesData'

function TopCourses() {
    const topproduct=coursesData.slice(0,3);
  return (
    <div className=''>
        <div className="div min-h-screen bg-gradient-to-br px-4 from-gray-900 via-gray-800 to-black text-white">
            <h1 className='text-2xl font-semibold py-5 flex justify-center'>Code Smarter with Real-World Practice</h1>
            <p className='pb-8 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl md:max-w-3xl mx-auto text-white/60'>At DevSkills, you don't just learn code — you engage in practical exercises that reflect real-world scenarios. From beginner-friendly lessons to advanced courses trusted by professionals, we prepare you for real-world projects.</p>
            <div className="cards">
                <div className="items grid grid-cols-1 md:grid-cols-3 gap-6  ">
                    {
                        topproduct.map((item,index)=>{
                           return <div key={index} className="div bg-black/80 pb-3 rounded-md shadow-md ">
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
  )
}

export default TopCourses