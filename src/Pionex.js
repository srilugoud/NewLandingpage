
import Image from "./assets/phoniximage.png"
import HeaderBox from "./assets/headerbox.png"
import Search from "./assets/search.png"
import Download from "./assets/download.png"
import Settings from "./assets/settings.png"
import Activity from "./assets/activity.png"
import Arrow from "./assets/arrow.png"
import { FaArrowRightLong, FaRobot } from "react-icons/fa6";
import { GrTrain } from "react-icons/gr";

import "./Pionex.css"
import Animation from "./Animation"
import SectionTwo from "./SectionTwo"
import SectionThree from "./Sectionthree"
import SectionFour from "./Sectionfour"
import Section from "./Section"
import SectionFive from "./sectionfive"
import SectionSix from "./SectionSix"
import Footer from "./Footer"
function NewProject(){
    return(
        <>
        <div className="header">
   
   

     <nav class="navbar navbar-expand-lg navbar-color ">
  <div class="container-fluid">
  
  <a class="navbar-brand" href="#"><img className="image" src={Image} alt="Logo"  /></a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span >
      <div id="menuToggle">
  <input id="checkbox" type="checkbox"/>
  <label class="toggle" for="checkbox">
    <div class="bar bar--top"></div>
    <div class="bar bar--middle"></div>
    <div class="bar bar--bottom"></div>
  </label>
</div>
      </span>
    </button>
    <div class="collapse navbar-collapse w-100" id="navbarNavDropdown">
      <div className="d-flex d-lg-none gap-3 " >
        <p className="sign-up flex-fill py-3 text-center">Sign up</p>
        <p className="sign-in flex-fill py-3 text-center">Sign in</p>
      </div>
      <ul class="navbar-nav w-100 align-items-start  align-items-lg-center mt-2 mx-2">
      <li class="nav-item dropdown" style={{cursor:"pointer",fontWeight:"500"}}>
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Spot
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">
              
            <div className="d-flex gap-3 align-items-center">
      <div>
      <p className="mb-0"><FaRobot  size={24} />
      </p>
      </div>
      <div className="d-flex flex-column">
        <p className="mb-0">Trading Bot</p>
        <p className="mb-0" style={{fontSize:"12px"}}>Auto-Trading 24/7 Without Monitoring, no tradin <br/>g experience needed</p>
      </div>
      </div></a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown" style={{cursor:"pointer",fontWeight:"500"}}>
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Futures
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item" style={{cursor:"pointer",fontWeight:"500"}}>
          <a class="nav-link" href="#">Marketing</a>
        </li>
        <li class="nav-item dropdown" style={{cursor:"pointer",fontWeight:"500"}}>
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Earn
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown" style={{cursor:"pointer",fontWeight:"500"}}>
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Buy Crypto
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item" style={{cursor:"pointer",fontWeight:"500"}}>
          <a class="nav-link" href="#">Rebate</a>
        </li>
        <li class="nav-item dropdown" style={{cursor:"pointer",fontWeight:"500"}}>
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item ms-auto" style={{cursor:"pointer",fontWeight:"500"}}>
          <a class="nav-link" href="#">
          <div>
    <img className="headerbox" src={HeaderBox}/>
    <span style={{fontWeight:"500"}}>Activity Center</span>
</div>
          </a>
        </li>
        <li class="nav-item d-none d-lg-block" style={{cursor:"pointer",fontWeight:"500"}}>
          <a class="nav-link" href="#">
          <div>
  <p className="mb-0">|</p>
</div>
          </a>
        </li>
        <li class="nav-item" style={{cursor:"pointer",fontWeight:"500"}}>
          <a class="nav-link" href="#">
          <div>
  <p className="mb-0" style={{fontWeight:"500"}}>Sign In</p>
</div>
          </a>
        </li>
        <li class="nav-item" style={{cursor:"pointer",fontWeight:"500"}}>
          <a class="nav-link" href="#">
          <div>
  <p className="mb-0" style={{fontWeight:"500"}}>Sign up</p>
</div>
          </a>
        </li>
        <li class="nav-item d-none d-lg-block" style={{cursor:"pointer",fontWeight:"500"}}>
          <a class="nav-link" href="#">
          <div>
  <img className="search" src={Search}/>
</div>
          </a>
        </li>
        <li class="nav-item d-none d-lg-block" style={{cursor:"pointer",fontWeight:"500"}}>
          <a class="nav-link" href="#">
          <div>
  <img className="download" src={Download}/>
</div>
          </a>
        </li>
        <li class="nav-item d-none d-lg-block" style={{cursor:"pointer",fontWeight:"500"}}>
          <a class="nav-link" href="#">
          <div>
  <img className="settings" src={Settings}/>
</div>
          </a>
        </li>
        
      </ul>
    </div>
  </div>
</nav> 
    

    
  


    



{/* <div className="d-flex gap-3 align-items-center d-none d-lg-flex">
    <div>
    <img className="headerbox" src={HeaderBox}/>
    <span style={{fontWeight:"500"}}>Activity Center</span>
</div>
<div>
  <p className="mb-0">|</p>
</div>
<div>
  <p className="mb-0" style={{fontWeight:"500"}}>Sign in</p>
</div>
<div>
  <p className="mb-0" style={{fontWeight:"500"}}>Sign up</p>
</div>
<div>
  <img className="search" src={Search}/>
</div>
<div>
  <img className="download" src={Download}/>
</div>
<div>
  <img className="settings" src={Settings}/>
</div>
</div> */}
</div>


<div className="d-flex align-items-center justify-content-center gap-2 tesla mb-4">
  <h4 className="tournment">Win Your Tesla in Future Trading Tournment S10</h4>
  <p className="tradenow mb-0">Trade Now</p>
</div>
<div className="d-flex justify-content-center gap-3 back mb-5">
<div className="background mt-4">

<h1 className="leading mt-4">Leading CopyBot <br/> Plotform in the <br/> World</h1>
<p className="mb-0 reward">Sign Up and Claim up to 10,000 <span>USDT in Rewards</span></p>
<p className="google mt-3">Continue with Google <span className="ms-2">
<FaArrowRightLong size={22} />
  </span></p>
</div>
<div>
  <img src={Activity} className="activity"/>
</div>
</div>
<div className="border-top">
  <div className="containerr">
<div>
  <p className="mb-0" style={{fontSize:"14px",color:"gray"}}>Daily trades on Pionex</p>
  <p className="mb-0 years">10 million+</p>
</div>
<div>
  <p className="mb-0" style={{fontSize:"14px",color:"gray"}} >Monthly trading volume</p>
  <p className="mb-0 years">60 billion+</p>
  
</div>
<div>
<p className="mb-0 " style={{fontSize:"14px",color:"gray"}} >Has offered service for
</p>
<p className="mb-0 years">5 years</p>
</div>
<div >
<p className="mb-0" style={{fontSize:"14px",color:"gray"}} >Global Users
</p>
<p className="mb-0 years">5 million+</p>
</div>
</div>
</div>
<Section/>
<SectionTwo/>
<SectionThree/>
<SectionFour/>
<SectionFive/>
<SectionSix/>
<Footer/>
        </>
    )
}
export default NewProject;