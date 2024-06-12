import React, { useEffect,useRef } from 'react'
import user from './data/hero.json'
import Typed from "typed.js"
const Home = () => {
  const typeRef= useRef(null)
  useEffect(()=>{
    const options={
      strings:["Welcome to my Portfolio","Hii,My Name is Pritam","I'm full stack developer","I am php developer"],
      typeSpeed:60,
      backSpeed:60,
      loop:true
    }
    const typed=new Typed(typeRef.current,options)
   return()=>{
    typed.destroy()
   }
  },[])
  return (
    <>
    <div className='container home'>
      <div className='left' data-aos="fade-down" data-aos-duration="1000">
        <h3 ref={typeRef}></h3>
      </div>
      <div className='right' data-aos="zoom-in" data-aos-duration="1000">
        <div className='image'>
        <img src={user.imgSrc} className='img-fluid'/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home
