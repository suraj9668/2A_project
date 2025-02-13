import React from 'react'
import CustomNavbar from '../CustomNavbar'
// import SecondBlock from '../SecondBlock'
import LangCompo2 from './LangCompo2'
import HeadContent2 from './HeadContent2'
import secimg from "../../assets/secimg.jpg"
import RowInfo2 from './RowInfo2'
import Full from '../Footer/full'
 
// import secpagimg from ''
function PageSec() {
  return (
     <>
        <img src={secimg} alt="" className='w-100'  style={{ position: "absolute", height:'600px',objectFit:"cover", filter: 'brightness(0.5)' }} />
        <CustomNavbar></CustomNavbar>
        <HeadContent2></HeadContent2>
        <LangCompo2></LangCompo2>
        <RowInfo2></RowInfo2>
        <Full ones='ones'></Full>
     </>
  )
}

export default PageSec