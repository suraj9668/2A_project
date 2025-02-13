import React from 'react'
import img from '../../assets/bg-03-free-img.jpg'
import CustomNavbar from '../CustomNavbar'
import HeadContent from '../HeadContent'
import SecondBlock from '../SecondBlock'
import Full from '../Footer/Full.jsx'
import LangCompo from '../LangCompo'
function PageHome() {
  return (
    <div>
       <img src={img} alt="" className='w-100'  style={{ position: "fixed", filter: 'brightness(0.5)', height: "800px", objectFit: "cover", width: "100%" }} />
       <CustomNavbar></CustomNavbar>  
        <HeadContent></HeadContent>
        <LangCompo></LangCompo>
        <SecondBlock></SecondBlock>
        <Full></Full>
    </div>
  )
}

export default PageHome