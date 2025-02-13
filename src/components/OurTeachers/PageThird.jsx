import React from 'react'
 
 import Thrimg from "../../assets/bg-001-free-img.jpg"
import Full from '../Footer/full'
import CustomNavbar from '../CustomNavbar'
import HeadContent3 from './HeadContent3'
import ThrdCard from './ThrdCard'
import one from "../../assets/testimonial-03-free-img.jpg" 
import two from "../../assets/testimonial-04-free-img.jpg" 
import three from "../../assets/testimonial-09-free-img.jpg" 
import four from "../../assets/testimonial-11-free-img.jpg" 
import five from "../../assets/testimonial-14-free-img.jpg" 
import '../Footer/full.css'
// import secpagimg from ''
function PageThird() {
  const TeachersData=[
      {language:"English Language" , img:one ,names:"Abadh Ojha"},
      {language:"Spanish Language" , img:two,names:"Khan sir"},
      {language:"Urdu Language" , img:three ,names:"Vikash Divyakirti Sir"},
      {language:"Malyalam Language" , img:four ,names:"Alkash sir"},
      {language:"Tamil Language" , img:five ,names:"RD Sir"}
  ];

  return (
     <>
       <img src={Thrimg} alt="" className='w-100'  style={{ position: "absolute", height:'600px',objectFit:"cover", filter: 'brightness(0.5)' }} />
       <CustomNavbar></CustomNavbar>         
       <HeadContent3></HeadContent3>
       {TeachersData.map(data=> <ThrdCard datas={data}></ThrdCard>)}
       {/* <ThrdCard data1={TeachersData[0]}></ThrdCard>
       <ThrdCard data2={TeachersData[1]}></ThrdCard>
       <ThrdCard data3={TeachersData[2]}></ThrdCard>
       <ThrdCard data4={TeachersData[3]}></ThrdCard>
       <ThrdCard data5={TeachersData[4]}></ThrdCard> */}

       <Full ones='ones'></Full>
     </>
  )
}

export default PageThird