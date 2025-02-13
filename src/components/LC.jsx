import React from 'react'
import profi from '../assets/testimonial-03-free-img.jpg';
function LC() {
  return (
    <div class="card d-flex justify-content-center border-0 rounded-4  align-items-center shadow-lg mt-3 w-100" style={{  minHeight:"17rem",  margin:"auto" , position:"relative" }}>
        <div class="card-body p-4">
          <p className='display-6 fw-bold text-center text-secondary ' style={{ margin:"0 auto"}}><i class="fa-solid fa-g "></i><span className='h3 ms-3 fw-light text-dark'>5/5</span></p>
          <p class="fw-normal text-secondary fs-5 text-center mt-3">"Lectus, nonummy et. Occaecat delectus erat, minima dapibus ornare nunc, autem."</p>
          <div class="d-flex justify-content-center" ><img src={profi} alt="" style={{width:"60px", height:"60px",borderRadius:"50%"}} /> </div>  
          <p className='text-center fw-normal text-secondary mt-4'>Lily Granger​</p>             
        </div>
      </div>
  )
}

export default LC