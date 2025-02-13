import React from 'react'

function RowInfo() {
    return (
        <div className='d-flex justify-content-center pb-5' style={{ position: 'relative', minHeight: '350px', top: "0px", backgroundColor:  "white" }}>
            <div className='container '>
                <div className='row mt-5'>
                    <div className='col col-md-3 col-sm-12 col-12  '>
                        <p className='border-danger text-center text-md-start  text-danger mt-3 border border-1 rounded-5  p-1 m-auto m-md-0' style={{ width: "30px", height: "30px" }}><i class="fas fa-graduation-cap"/></p>
                        <p class="h3 fw-light mt-3 text-center text-md-start">Expert Tutors</p>
                        <p class="h6 fw-normal text-secondary text-center text-md-start" >
                            Expert Tutors
                            Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    </div>
                    <div className='col col-md-3 col-sm-12 col-12  '>
                        <p className='border-danger text-center text-md-start text-danger mt-3 border border-1 rounded-5  p-1 m-auto m-md-0' style={{ width: "30px", height: "30px" }}><i class="fas fa-user"/></p>
                        <p class="h3 fw-light mt-3 text-center text-md-start">Verified Profiles</p>
                        <p class="h6 fw-normal text-secondary text-center text-md-start" >
                            Expert Tutors
                            Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    </div>
                    <div className='col col-md-3 col-sm-12 col-12  '>
                        <p className='border-danger text-danger text-center text-md-start mt-3 border border-1 rounded-5  p-1 m-auto m-md-0' style={{ width: "30px", height: "30px" }}> <i class="bi bi-book"/></p>
                        <p class="h3 fw-light mt-3 text-center text-md-start">Pay Per Lesson
                        </p>
                        <p class="h6 fw-normal text-secondary text-center text-md-start" >
                            Expert Tutors
                            Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    </div>
                    <div className='col col-md-3 col-sm-12 col-12   '>
                        <p className='border-danger text-center text-md-start text-danger text-center text-md-start mt-3 border border-1 rounded-5  p-1 m-auto m-md-0' style={{ width: "30px", height: "30px" }}><i class="fas fa-dollar-sign"/></p>
                        <p class="h3 fw-light mt-3 text-center text-md-start">Affordable Prices
                        </p>
                        <p class="h6 fw-normal text-center text-md-start text-secondary" >
                            Expert Tutors
                            Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RowInfo