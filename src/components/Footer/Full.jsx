import React from 'react'
import jjj from "../../assets/bg-04-free-img.jpg"
import './full.css'
function Full({ones}) {
  return (
    <>
      <div className='' style={{ height: "900px", backgroundColor: "#323F44", position: "relative" }}>
        <div className='one' id= {ones}></div>
        <div className='two'></div>
        <div className="container d-flex justify-content-center ">
          <div className='three'>
            <div className='container'>
              <div className="row  p-2 d-flex justify-content-center align-items-center">
                <img src={jjj} style={{ height: "720px", padding: "0px", borderRadius: "20px", objectFit: "cover", filter: 'brightness(0.5)', boxShadow: "0px 0px 100px 0px black" }} alt="" />
                <div className='w-75' style={{ position: "absolute", margin: "auto" }}>
                  <p className='text-white text-center  mt-2 fw-lighter h5' >Choose a teacher for 1-on-1 lessons </p>
                  <p className='display-1 pt-3 fw-lighter text-center text-white mt-2' style={{ fontWeight: "100" }}><span className='fw-bold text-decoration-underline'>Start</span> learning a new</p>
                  <p className='display-1 pt-3 fw-lighter text-center text-white mt-2' style={{ fontWeight: "100" }}>language<span className='fw-bold text-decoration-underline'>today!</span></p>
                  <button type="button" class="btn btn-danger btn-lg m-auto rounded-pill   d-flex align-items-center fs-6 justify-content-center mt-5" style={{ width: "100px" }}>Sign Up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='' style={{ height: "400px", backgroundColor: "", position: "relative" }}>
        <div className="container d-flex justify-content-center ">

          <div className="row  p-2 d-flex justify-content-center align-items-center">
            <div className="p-5" style={{ position: "absolute", width: "100vw", top: "0px", backgroundColor: "#323F44" }}>
              <div className="container">
                <div className="row w-100">
                  <div className="col col-md-1 col-12 " ></div>
                  <div className="col col-md-2 col-6 mt-md-0 mt-4">
                    <p className='text-light fs-6 fw-normal mb-3'>About Us</p>
                    <p className='fw-bold fs-6 text-light m-0'>How it Works</p>
                    <p className='fw-bold fs-6 text-light m-0'>Affiliate Program</p>
                    <p className='fw-bold fs-6 text-light m-0'>Education Partners</p>
                    <p className='fw-bold fs-6 text-light m-0'>We Hirng</p>
                    <p className='fw-bold fs-6 text-light m-0'>Become a Teacher</p>
                  </div>
                  <div className="col col-md-2 col-6 mt-md-0 mt-4">
                    <p className='text-light fs-6 fw-normal mb-3'>Teachers</p>
                    <p className='fw-bold fs-6 text-light m-0'>English Teachers</p>
                    <p className='fw-bold fs-6 text-light m-0'>Chinese Teachers</p>
                    <p className='fw-bold fs-6 text-light m-0'>French Teachers</p>
                    <p className='fw-bold fs-6 text-light m-0'>Spanish Teachers</p>
                    <p className='fw-bold fs-6 text-light m-0'>Portiguese Teacher</p>
                    <p className='fw-bold fs-6 text-light m-0'>Japanese Teacher</p>
                    <p className='fw-bold fs-6 text-light m-0'>German Teacher</p>
                    <p className='fw-bold fs-6 text-light m-0'>Arabic Teacher</p>
                  </div>
                  <div className="col col-md-2 col-6 mt-md-0 mt-4">
                    <p className='text-light fs-6 fw-normal mb-3'>Support</p>
                    <p className='fw-bold fs-6 text-light m-0'>Need any Help</p>
                    <p className='fw-bold fs-6 text-light m-0'>contact@info.com</p>
                  </div>
                  <div className="col col-md-2 col-6 mt-md-0 mt-4">
                    <p className='text-light fs-6 fw-normal mb-3'>Follow Us</p>
                    <p className='fw-bold fs-6 text-light m-0'>Facebook</p>
                    <p className='fw-bold fs-6 text-light m-0'>Twitter</p>
                    <p className='fw-bold fs-6 text-light m-0'>YouTube</p>
                    <p className='fw-bold fs-6 text-light m-0'>Instagram</p>
                    <p className='fw-bold fs-6 text-light m-0'>Weibo</p>
                  </div>
                  <div className="col col-md-2 col-12">
                    <p className='text-light text-md-start text-center fs-6 fw-normal mb-3'>Contact Us</p>
                    <p className='fw-bold fs-6 text-md-start text-center text-light m-0'>808-513-9668</p>
                    <p className='fw-bold fs-6 text-md-start text-center text-light m-0'>123 Fifth Avenue, NewYork, NY 10160</p>
                  </div>
                  <div className="col col-md-1 col-12"></div>
                </div>
              </div>
              <div calassName='container'>
                <div className="row border-top border-secondary mt-5 m-auto w-75"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Full