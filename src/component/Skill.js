import React from 'react'
import skill from './data/skill.json'
const Skill = () => {
  return (
    <>
      <div className='container skill'>
      <h1 className='text-center'>SKILLS</h1>
      <div className='items' >
        
        {
        skill.map((data)=>
          (
            <>
           
              <div className='item'
               key={data.id}  data-aos="flip-left" data-aos-duration="1000">
                <img src={data.imageSrc} />
                <h3>{data.title}</h3>
              </div>
          
            </>
          )
        )}
      </div>
      </div>
    </>
  )
}

export default Skill
