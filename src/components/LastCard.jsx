import React from 'react'
import LC from './LC'

function LastCard() {
    return (
        <>
            <div className='d-flex justify-content-center  pb-5 pb-5' style={{ position: 'relative', minHeight: '600px', top: "0px", backgroundColor: 'aliceblue' }}>
                <div className='d-flex justify-content-center mb-5' style={{ position: 'relative', minHeight: '500px' }}>
                    <div class="container mb-5">
                        <div class="row ">
                            <div class="col col-md-4 col-12 d-flex justify-content-center align-items-center">
                                <h1 className='display-4 fw-bold d-flex justify-content-center align-items-center'>Our success stories</h1>
                            </div>
                            <div class="col col-md-4 col-12"><LC></LC></div>
                            <div class="col col-md-4 col-12"><LC></LC></div>
                            <div class="col col-md-4 col-12"><LC></LC></div>
                            <div class="col col-md-4 col-12"><LC></LC></div>
                            <div class="col col-md-4 col-12"><LC></LC></div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>

    )
}

export default LastCard