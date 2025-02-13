import React from 'react'
import CustomNavbar from '../CustomNavbar'
 import fivimg from "../../assets/bg-002-free-img (1).jpg"
import Full from '../Footer/full'
import HeadContent5 from './HeadContent5'
import Form from './Form'
function PageFive() {
  return (
     <>
        <img src={fivimg} alt="" className='w-100'  style={{ position: "absolute", height:'600px',objectFit:"cover", filter: 'brightness(0.5)' }} />
        <CustomNavbar></CustomNavbar>
        <HeadContent5></HeadContent5>
        <Form></Form>
        <Full></Full>
     </>
  )
}

export default PageFive