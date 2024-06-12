import React from 'react'
import education from './data/education.json'
const Education = () => {
  return (
    <>
    <div className='container ed'>
      <h1>Education</h1>
      {
        education.map((data)=>{
          return(
            <>
          <div key={data.id} className='ed-item text-center'>
          <div className='right'>
            <h2>{data.title}</h2>
            <h4>{data.endDate} , {data.location}</h4>
            <h3>{data.course}</h3>
          </div>
          </div>
            </>
        )
          
        })
      }
    </div>
    </>
  )
}

export default Education
