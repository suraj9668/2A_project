import React from 'react'

function AboutUs() {
  return (
    <div className='d-flex justify-content-center pb-5' style={{ position: 'relative', minHeight: '600px', top: "0px", backgroundColor: 'aliceblue' }}>
        <div className='d-flex justify-content-center pt-5 pb-5' style={{ position: 'relative', minHeight: '350px', top: "0px", backgroundColor: 'aliceblue' }}>
            <div className='container border-top border-2'>
                <div className='row '>
                    <div className=' col-md-6 col-12'>
                        <p className='border-danger mt-3  p-1 m-auto m-md-0'  >Why Us</p>
                        <p class="h2 mt-3 fw-bold ">Learn a new language online anywhere, anytime!</p>
                        <p class="h6 fw-normal text-secondary mt-3" >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <div className="row ">
                            <div className="col col-12 col-md-1 mt-5 mt-md-1 text-danger fs-3"><i class="fa-solid fa-circle-arrow-right"></i></div>
                            <div className="col col-12 col-md-11">
                              <p className='h4 fw-normal mt-2'>Customized learning</p>
                              <p className='h6 fw-normal text-secondary'>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                              </p>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col col-12 col-md-1 mt-5 mt-md-1 text-danger fs-3"><i class="fa-solid fa-circle-arrow-right"></i></div>
                            <div className="col col-12 col-md-11">
                              <p className='h4 fw-normal mt-2'>Get expert help when you need it</p>
                              <p className='h6 fw-normal text-secondary'>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                              </p>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col col-12 col-md-1 mt-5 mt-md-1 text-danger fs-3"><i class="fa-solid fa-circle-arrow-right"></i></div>
                            <div className="col col-12 col-md-11">
                              <p className='h4 fw-normal mt-2'>Learn anytime, anywhere</p>
                              <p className='h6 fw-normal text-secondary'>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                              </p>
                            </div>
                        </div>
                    </div> 
                    <div className=' col-md-6 col-12  '>
                        <p className='border-danger text-center text-md-start mt-md-0 mt-5 m-auto m-md-0'>About Us</p>
                        <p class="display-5 fw-bolder mt-3 text-center text-md-start">" We prepare you to achieve your goals with professional tutors. "</p>
                        <p class="h6 fw-bolder text-center text-md-start mt-5" >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <button className="btn btn-danger btn-lg rounded-pill d-block m-auto m-md-0 fs-6 mt-4 mt-md-4" type="submit" style={{width:"180px",height:"60px"}}>Read More</button>
                    </div>
                </div>
            </div>
        </div>
     </div>
  )
}

export default AboutUs