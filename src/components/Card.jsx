import React from 'react'

function Card(props) {
  return (
    <>
      <div className="card d-flex justify-content-center border-0 rounded-4 align-items-center shadow-lg mt-3 w-100" style={{  minHeight:"9rem",  margin:"auto" , position:"relative", bottom:"100px" }}>
        <div className="card-body">
          <p className='border-danger text-center text-danger border border-1 rounded-3  p-1' style={{ width:"50px", margin:"0 auto"}}>{props.values.srtnm}</p>
          <p className="h3 fw-light text-center mt-3">{props.values.lang}</p>
          <p className="h6 fw-normal text-center  text-white-25" >Tutor { +props.values.tutor}</p> 
        </div>
      </div>
    </>
  )
}
export default Card