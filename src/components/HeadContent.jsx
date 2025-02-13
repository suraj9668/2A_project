import React from 'react'

function HeadContent() {

  return (
     <div className='container p-5 mt-5 mb-5' style={{position:'relative'  }}>
        <p className='text-white text-center  mt-4 fw-lighter h5' se>In look for a language tutor?</p>
        <div className='display-1 pt-5 fw-lighter text-center text-white mt-4' style={{fontWeight:"100"}}>Start <span className='fw-bold text-decoration-underline'>learning</span> a new</div>
        <div className='display-1 text-center fw-lighter text-white mt-2'>language today <span className='fw-bold text-decoration-underline'>with the best</span></div>
        <div className='display-1 text-center fw-lighter text-white mt-2'>online tutors!</div>
     </div>
  )
}

export default HeadContent;