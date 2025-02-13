import React from 'react'
import girl from '../assets/girlss.jpg';
import RowInfo from './RowInfo';
import AboutUs from './AboutUs';
import BrandLogo from './BrandLogo.jsx';
import LastCard from './LastCard.jsx';
import Full from './Footer/full.jsx';
function SecondBlock() {
    return (
        <>
            <div className='d-flex justify-content-center mt-5 pb-5' style={{ position: 'relative', minHeight: '600px', top: "0px", backgroundColor: 'aliceblue' }}>
                <div class="container mb-5">
                    <div class="row d-flex justify-content-center h-100">
                        <div class="col-xxl-4 col-md-12  justify-content-center  align-items-center">
                            <h1 className='display-5 fw-bold text-md-center text-lg-center text-xl-center text-xxl-start text-xs-center text-sm-center text-center text-dark mt-5 ms-5'>How it All Works</h1>
                            <p className='fw-normal mt-1 text-md-center text-lg-center text-xl-center text-xxl-start text-xs-center text-sm-center text-center ms-5 mb-5'>Donec sagittis sagittis vestibulum. Morbi vestibulum neque.</p>
                        </div>
                        <div class="col-xxl-4 col-lg-6 col-12 d-flex justify-content-around align-items-center" >
                            <img src={girl} className='rounded-5 shadow-lg' style={{ filter: 'brightness(0.5)' }} alt="Log" />

                        </div>  
                        <div class="col-xxl-4 col-lg-6 col-12 d-flex justify-content-around align-items-center">
                            <div class="container">
                                <div class="row d-flex justify-content-between mt-5"  >
                                    <div className='col col-lg-3 col-12 m-auto m-lg-0 mb-4 text-danger display-2 fw-bold  rounded-circle d-inline-flex justify-content-center bg-white p-2 shadow-lg' style={{width:"100px", height:"100px"}}>1</div>
                                    <div className='col col-lg-9 col-12' >
                                        <h2 className='h4 fw-normal text-center text-lg-start'>Find the perfect tutor</h2>
                                        <p className='fw-normal text-secondary text-center text-lg-start'  >Elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nam varius consectetur.</p>
                                    </div>
                                </div>
                                <div class="row d-flex  justify-content-between mt-5"  >
                                    <div className='col col-lg-3 col-12 m-auto m-lg-0 mb-4 text-danger display-2 fw-bold rounded-circle d-inline-flex justify-content-center bg-white p-2 shadow-lg' style={{width:"100px", height:"100px"}}>2</div>
                                    <div className='col col-lg-9 col-12' >
                                        <h2 className='h4 fw-normal text-center text-lg-start'>Schedule your lesson</h2>
                                        <p className='fw-normal text-secondary text-center text-lg-start'  >Elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nam varius consectetur.</p>
                                    </div>
                                </div>
                                <div class="row d-flex  justify-content-between mt-5"  >
                                    <div className='col col-lg-3 col-12 m-auto m-lg-0 mb-4 text-danger display-2 fw-bold rounded-circle d-inline-flex justify-content-center bg-white p-2 shadow-lg' style={{width:"100px", height:"100px"}}>3</div>
                                    <div className='col col-lg-9 col-12' >
                                        <h2 className='h4 fw-normal text-center text-lg-start'>Start the journey</h2>
                                        <p className='fw-normal text-secondary text-center text-lg-start'  >Elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nam varius consectetur.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <RowInfo></RowInfo>
            <AboutUs></AboutUs>
            <BrandLogo></BrandLogo>
            <LastCard></LastCard>
            {/* <Full></Full> */}
        </>
    )
}

export default SecondBlock