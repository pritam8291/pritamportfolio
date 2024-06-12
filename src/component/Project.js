import React from 'react'
import project from './data/project.json'
const Project = () => {
  return (
    <>
        <div className='container project my-3'>
          <h1 className='text-center'>PROJECT</h1>
          <div className='row d-flex justify-content-center align-content-center'>
            {
            project.map((data)=>
            (
              <>
              <div key={data.id} data-aos="flip-right" data-aos-duration="1000" className='my-4 col-sm-6 col-md-6 col-lg-3 mx-4'>
                <div className="card" style={{width:"18rem"}}>
                  <div className='img d-flex justify-content-center align-content-center'>
                  <img src={data.imgSrc} className='card-img-top' alt='...' 
                  style={{
                    width:"250px",
                    height:"200px",
                    borderRadius:"50%"
                  }}
                  />
                  </div>
                  <div className='card-body text-center'>
                    <h5 className='card-title'>{data.title}</h5>
                    <p className='card-text'>
                    {data.description}
                    </p>
                    <a href={data.demo} className='btn btn-primary mx-3' target='_blank'>Demo</a>
                    {/* <a href={data.source} className='btn btn-success'>Code</a> */}
                  </div>
                </div>
              </div>
              </>
            ))
            }
          </div>
        </div>
    </>
  )
}

export default Project
