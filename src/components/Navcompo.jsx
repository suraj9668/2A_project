import React from 'react'
 
import { Link } from "react-router-dom";

function Navcompo() {
  return (
    <div className='container' style={{position:"relative",marginTop:"30px",width:"100vw" , color:"#737575" }}>
        <Link to="/" style={{textDecoration:"none",color:"grey"}}><div className="row w-100 border border-bottom bg-light d-flex align-items-center" style={{height:"40px" , fontSize:"13px"}}><div className="col col-12">Home</div></div></Link>
        <Link to="/courses" style={{textDecoration:"none",color:"grey"}}><div className="row w-100 border border-bottom bg-light d-flex align-items-center" style={{height:"40px" , fontSize:"13px"}}><div className="col col-12">Courses</div></div></Link>
        <Link to="/teachers" style={{textDecoration:"none",color:"grey"}}> <div className="row w-100 border border-bottom bg-light d-flex align-items-center" style={{height:"40px" , fontSize:"13px"}}><div className="col col-12">Our Teachers</div></div></Link>
        <Link to="/about" style={{textDecoration:"none",color:"grey"}}> <div className="row w-100 border border-bottom bg-light d-flex align-items-center" style={{height:"40px" , fontSize:"13px"}}><div className="col col-12">About</div></div></Link>
        <Link to="/contact" style={{textDecoration:"none",color:"grey"}}> <div className="row w-100 border border-bottom bg-light d-flex align-items-center" style={{height:"40px" , fontSize:"13px"}}><div className="col col-12">Contact</div></div></Link>
    </div>   
  )
}
 
export default Navcompo