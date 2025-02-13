import React from 'react'
import orimg from '../../assets/about-us-01-free-img.jpg'
import AboutUs4 from './AboutUs4'
function ContainCompo() {
    return (
        <>
            <div className=' ' style={{ paddingTop: '140px', paddingBottom: '20vw', backgroundColor:  "white" }}>
                <div className='container fluid w-75' style={{ minHeight: '100px' }}>
                    <div className="row">
                        <div className="col col-12">
                            <p className='text-center text-danger'>AboutUs</p>
                            <p className='display-4 text-center fw-bold'>We connect students and teachers lorem ipsum dolor sit amet, consectetur.</p>
                            <hr className='mt-5 w-25 m-auto' />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-12">
                            <p className='text-secondary mt-5'><span className='display-4 fw-normal'>E</span>xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui.</p>
                            <hr className='mt-5 w-100 m-auto' />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col col-12 col-md-6">
                            <p className='text-danger'>Our Vision</p>
                            <div className="h2 fw-bold">
                                Consectetur adipisicing elit, sed do eiusmod tempor incididunt.
                            </div>

                        </div>
                        <div className="col col-12 col-md-6 mt-5 mt-md-0">
                            <p className='text-danger'>Our Mission</p>
                            <div className="h2 fw-bold">
                                Adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                            </div>
                        </div>
                        {/* <div className="col col-12 mt-5">
                        <img src={orimg} alt="" className='w-100'/>
                    </div> */}
                    </div>
                </div>
            </div>
            <div className="w-100 d-flex justify-content-center " style={{ backgroundColor: 'aliceblue'  }}>
                
                <img src={orimg} alt="" className='w-75 m-auto rounded-4 shadow-lg'  style={{position:'relative',bottom:'15vw' }}/>
            </div>
                <AboutUs4></AboutUs4>
        </>
    )
}

export default ContainCompo