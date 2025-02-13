import React from 'react'
import profi3 from "../../assets/profi3.jpg"

function ThrdCard({datas}) {
  return (
    <div className='container w-75' style={{marginTop:'200px',marginBottom:'200px'}}>
      <div className="row">
        <div className="col col-12 col-md-5" >
          <div class="card d-flex justify-content-center border-0 rounded-4  align-items-center shadow-lg mt-3 w-100" style={{ minHeight: "17rem",margin: "auto", position: "relative" }}>
            <div class="card-body p-4">
                <div class="d-flex justify-content-center" ><img src={datas.img} alt="" style={{ width: "100px", height: "100px", borderRadius: "50%" }} /> </div>
                <p className='text-center fw-bold text-secondary mt-4'><i class="fas fa-graduation-cap"/>​</p>
                <p className='text-center fw-normal mt-0'> {datas.language}</p>
                <p className='text-center fw-bold fs-5 mt-3 text-warning'>4.5 ★★★★★</p>
                <p className='text-center fw-normal text-secondary mt-0'>Lily Granger​</p>
                <button type="button" class="btn btn-danger btn-lg m-auto rounded-pill fw-light d-flex align-items-center justify-content-center " style={{width: "110px", height:'30px' , position:"relative" }}><small >Book Trial</small></button>          
            </div>
          </div>
        </div>
        <div className="col col-12 col-md-7">
            <p className='fs-4 fw-light mt-5 text-md-start text-center'>{datas.names}</p>
            <p className=' text-secondary text-md-start text-center'><span className='fw-bold'>Native English Teacher from the U.S.</span> consectetur adipisicing elit, sed do eiusmod ut labore et magna aliqua… [+]</p>
            <p className='fw-light mb-0 text-md-start text-center'>Speaks:</p>
            <p className=' text-secondary mb-0 text-md-start text-center'>English <span className='fw-bold'>(Native)</span>, French C1</p>
            <p className='fw-light mb-0 text-md-start text-center'>Hourly Rate From:</p>
            <p className=' text-secondary mb-0 text-md-start text-center'>USD <span className='fw-bold'>12.00</span></p>
            <p className='fw-light mb-0 text-md-start text-center'>Trial:</p>
            <p className=' text-secondary mb-0 text-md-start text-center'>USD <span className='fw-bold'>7.00</span></p>
        </div>
      </div>
    </div>
  )
}

export default ThrdCard