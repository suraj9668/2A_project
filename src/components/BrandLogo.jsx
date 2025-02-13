import React from 'react'
import one from '../assets/logo-01-free-img.png';
import two from '../assets/logo-03-free-img.png';
import three from '../assets/logo-05-free-img.png';
import four from '../assets/logo-02-free-img.png';
import five from '../assets/logo-06-free-img.png';
import six from '../assets/logo-04-free-img.png';
function BrandLogo() {
  return (
    <div className='d-flex justify-content-center pt-5 pb-5' style={{ position: 'relative', minHeight: '200px', top: "0px", backgroundColor: 'aliceblue' }}>
            <div className='container border-top border-2'>
                <div className='row mt-5'>
                    <div className='col col-lg-2 col-md-3 col-sm-4 col-6'>
                        <img src={one} alt="hhhh" />
                    </div>
                    <div className='col col-lg-2 col-md-3 col-sm-4 col-6'>
                    <img src={two} alt="hhhh" />
                     </div>
                    <div className='col col-lg-2 col-md-3 col-sm-4 col-6  '>
                    <img src={three} alt="hhhh" />
                    </div>
                    <div className='col col-lg-2 col-md-3 col-sm-4 col-6  '>
                    <img src={four} alt="hhhh" />
                    </div>
                    <div className='col col-lg-2 col-md-3 col-sm-4 col-6  '>
                    <img src={five} alt="hhhh" />
                    </div>
                    <div className='col col-lg-2 col-md-3 col-sm-4 col-6  '>
                    <img src={six} alt="hhhh" />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default BrandLogo