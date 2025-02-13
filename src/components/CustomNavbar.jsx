
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/j.png";
 
import "./CustomNavbar.css"
import { useState } from "react";
import Navcompo from "./navcompo";
import { Link } from "react-router-dom";
 
const CustomNavbar = () => {
    const [toggle,setToggle] = useState(true);
    function ToggleHandle() {
      if (toggle) {
        setToggle(false)
      }else{
        setToggle(true);
      } 
    }
  return (
    <>
      <div className="container" style={{ position: "relative" }}>
        <div className="row" >
          <div className="col col-3 mt-3 "><img src={logo} className="mx-auto" alt=""/></div>
          <div className="col col-9 d-lg-none text-end text-light mt-3 " >
            { toggle ? <i class="fas fa-bars menu-icon text-danger fs-4 me-3 " onClick={ToggleHandle}></i>:<i class="fas fa-times text-danger fs-2 me-2" onClick={ToggleHandle}></i>}
          </div>
          {toggle ?  
          <div className="col d-none d-lg-block col-6">
            <ul className="ul text-light mt-3">
              <li className="li nav-link "><Link style={{textDecoration:"none",color:"aliceblue"}} to='/'>Home</Link></li>
              <li className="li nav-link"><Link style={{textDecoration:"none",color:"aliceblue"}} to='/courses'>Courses</Link></li>
              <li className="li nav-link"><Link style={{textDecoration:"none",color:"aliceblue"}} to='/teachers'>Our Teachers</Link></li>
              <li className="li nav-link"><Link style={{textDecoration:"none",color:"aliceblue"}} to='/about'>About</Link> </li>
              <li className="li nav-link"><Link style={{textDecoration:"none",color:"aliceblue"}} to='/contact'>Contact </Link></li>
            </ul>
          </div>:
           <Navcompo></Navcompo>
          }
          <div className="col col-3">
            <button className="btns d-none d-lg-block">Find A Tutor</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomNavbar;





