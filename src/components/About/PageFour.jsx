import React from 'react'
import fourimg from "../../assets/bg-06-free-img.jpg"
import CustomNavbar from '../CustomNavbar'
import Full from '../Footer/full'
import HeadContent4 from './HeadContent4'
import ContainCompo from './ContainCompo'
function PageFour() {
  return (
    <div>
        <img src={fourimg} alt="" className='w-100'  style={{ position: "absolute", height:'600px',objectFit:"cover", filter: 'brightness(0.5)' }} />
       <CustomNavbar></CustomNavbar>
         <HeadContent4></HeadContent4>  
         <ContainCompo></ContainCompo>   
       <Full></Full>
    </div>
  )
}

export default PageFour