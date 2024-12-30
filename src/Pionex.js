
import Image from "./assets/phoniximage.png"
import HeaderBox from "./assets/headerbox.png"
import Search from "./assets/search.png"
import Download from "./assets/download.png"
import Settings from "./assets/settings.png"
import Activity from "./assets/activity.png"
import Arrow from "./assets/arrow.png"
import { FaArrowRightLong, FaRobot } from "react-icons/fa6";
import { GrTrain } from "react-icons/gr";
import { MdOutlineSwapHorizontalCircle } from "react-icons/md";
import { MdSwapCalls } from "react-icons/md";
import "./Pionex.css"
import Animation from "./Animation"
import SectionTwo from "./SectionTwo"
import SectionThree from "./Sectionthree"

import Section from "./Section"
import SectionFive from "./sectionfive"
import SectionSix from "./SectionSix"
import Footer from "./Footer"
import DropDown from "./assets/dropdownicon.svg"
import { LiaRobotSolid } from "react-icons/lia";
import { BsTrainFreightFrontFill } from "react-icons/bs";
import { FaFacebookMessenger } from "react-icons/fa6";
import { MdOutlineDataThresholding } from "react-icons/md";
import { BsClipboard2Data } from "react-icons/bs";
import { LuDatabase } from "react-icons/lu";
import { SiGitconnected } from "react-icons/si";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { MdWrongLocation } from "react-icons/md";
import { MdOutlineCreditScore } from "react-icons/md";
import { IoMdCard } from "react-icons/io";
import { BsBank2 } from "react-icons/bs";
import { RiUserVoiceLine } from "react-icons/ri";
import { SiStoryblok } from "react-icons/si";
import { MdContactPhone } from "react-icons/md";
import { BsQuestionCircleFill } from "react-icons/bs";
import MobileFooter from "./MobileFooter"
import MobileSection from "./MobileAnimation"
import DarkMode from "./DarkMode/DarkMode/DarkMode"
import { useState } from "react"
import { IoGiftOutline } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import { IoDownloadOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import Roadmap from "./RoadMap"
import Question from "./Question"
import NewRoadMap from "./NewRoadmap"

function NewProject(){
   const [isDarkMode, setIsDarkMode] = useState(false);
   const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
   
    document.body.className = isDarkMode ? "light-mode" : "dark-mode";
  };
    return(
        <>
       <div  className={`header ${isDarkMode ? "dark-mode" : "light-mode"}`}>
   
   

     <nav  className="navbar navbar-expand-lg navbar-color" >
  <div class="container-fluid">
  
  <a class="navbar-brand" href="#"><img className="image" src={Image} alt="Logo"  /></a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span >
      <div id="menuToggle">
  <input id="checkbox" type="checkbox" />
  <label class="toggle" for="checkbox" >
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
      <ul class="navbar-nav w-100 align-items-start  align-items-lg-center mt-2 mx-2" >
      <li class="nav-item dropdown" style={{cursor:"pointer",fontWeight:"500"}}>
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:"white"}}>
            Spot
          </a>
          <ul class="dropdown-menu" style={{backgroundColor:"#131416"}}>
            <li><a class="dropdown-item" href="#" >
              
            <div className="d-flex gap-3 align-items-center">
      <div>
      <p className="mb-0" style={{color:"white"}}><FaRobot  size={24} />
      </p>
      </div>
      <div className="d-flex flex-column px-0">
        <p className="mb-0" style={{color:"white"}}>Trading Bot</p>
        <p className="mb-0 " style={{fontSize:"12px",color:"#565d67"}}>Auto-Trading 24/7 Without Monitoring, no tradin <br/>g experience needed</p>
      </div>
      </div>
      </a></li>
            <li><a class="dropdown-item" href="#" style={{ color: "#d8d8d" }}>
            <div className="d-flex gap-3 align-items-center">
      <div>
      <p className="mb-0" style={{color:"white"}}><MdOutlineSwapHorizontalCircle  size={24} />
      </p>
      </div>
      <div className="d-flex flex-column">
        <p className="mb-0" style={{color:"white"}}>Spot Trading</p>
        <p className="mb-0" style={{fontSize:"12px",color:"#565d67"}}>Invest in trending assets and capture more oppor <br/> tunities</p>
      </div>
      </div>
              </a></li>
            <li><a class="dropdown-item" href="#" style={{ color: "#d8d8d" }}> <div className="d-flex gap-3 align-items-center">
      <div>
      <p className="mb-0" style={{color:"white"}}><MdSwapCalls  size={24} />
      </p>
      </div>
      <div className="d-flex flex-column">
        <p className="mb-0" style={{color:"white"}}>Swap</p>
        <p className="mb-0" style={{fontSize:"12px",color:"#565d67"}}>Instant Convert</p>
      </div>
      </div></a></li>
          </ul>
        </li>
        <li class="nav-item dropdown" style={{cursor:"pointer",fontWeight:"500"}}>
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:"white"}}>
            Futures
          </a>
          <ul class="dropdown-menu" style={{backgroundColor:"#131416"}}>
            <li><a class="dropdown-item" href="#">
            <div className="d-flex gap-3 align-items-center">
      <div>
      <p className="mb-0" style={{color:"white"}}><LiaRobotSolid  size={24} />
      </p>
      </div>
      <div className="d-flex flex-column">
        <p className="mb-0" style={{color:"white"}}>Futures  Bot</p>
        <p className="mb-0 " style={{fontSize:"12px",color:"#565d67"}}>small investment big return</p>
      </div>
      </div>
      </a>
      </li>
            <li><a class="dropdown-item" href="#"> 
              <div className="d-flex gap-3 align-items-center">
      <div>
      <p className="mb-0" style={{color:"white"}}><FaRobot  size={24} />
      </p>
      </div>
      <div className="d-flex flex-column">
        <p className="mb-0" style={{color:"white"}}>Futures Trading</p>
        <p className="mb-0 " style={{fontSize:"12px",color:"#565d67"}}>Flexible ways to take profit and manage risk && C <br/> hart trading</p>
      </div>
      </div>
      </a>
      </li>
            <li><a class="dropdown-item" href="#"> <div className="d-flex gap-3 align-items-center">
      <div>
      <p className="mb-0" style={{color:"white"}}><MdOutlineDataThresholding size={24} />
      </p>
      </div>
      <div className="d-flex flex-column">
        <p className="mb-0" style={{color:"white"}}>Futures  Pnl</p>
        <p className="mb-0 " style={{fontSize:"12px",color:"#565d67"}}>clearly track your trading performance</p>
      </div>
      </div></a></li>
            <li><a class="dropdown-item" href="#">
            <div className="d-flex gap-3 align-items-center">
      <div>
      <p className="mb-0" style={{color:"white"}}><BsClipboard2Data  size={24} />
      </p>
      </div>
      <div className="d-flex flex-column">
        <p className="mb-0" style={{color:"white"}}>Funding Rate Date</p>
        <p className="mb-0 " style={{fontSize:"12px",color:"#565d67"}}>view the latest building rate data</p>
      </div>
      </div>
              </a></li>
            <li><a class="dropdown-item" href="#">
            <div className="d-flex gap-3 align-items-center">
      <div>
      <p className="mb-0" style={{color:"white"}}><LuDatabase  size={24} />
      </p>
      </div>
      <div className="d-flex flex-column">
        <p className="mb-0" style={{color:"white"}}>Demo Trading</p>
        <p className="mb-0 " style={{fontSize:"12px",color:"#565d67"}}>practice trading with demo punds, no real money<br/> risk</p>
      </div>
      </div>
              </a></li>
          </ul>
        </li>
        <li class="nav-item" style={{cursor:"pointer",fontWeight:"500"}}>
          <a class="nav-link" href="#" style={{color:"white"}}>Marketing</a>
        </li>
        <li class="nav-item dropdown" style={{cursor:"pointer",fontWeight:"500"}}>
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:"white"}}>
            Earn
          </a>
          <ul class="dropdown-menu" style={{backgroundColor:"black"}}>
            <li><a class="dropdown-item" href="#">
               <div className="d-flex gap-3 align-items-center">
      <div>
      <p className="mb-0" style={{color:"white"}}><SiGitconnected  size={24} />
      </p>
      </div>
      <div className="d-flex flex-column">
        <p className="mb-0" style={{color:"white"}}>Structured</p>
        <p className="mb-0 " style={{fontSize:"12px",color:"#565d67"}}>Trade over 20 cryptocurrencies with gaurenteed <br/> returns in all market conditions</p>
      </div>
      </div>
      </a></li>
            <li><a class="dropdown-item" href="#">
            <div className="d-flex gap-3 align-items-center">
      <div>
      <p className="mb-0" style={{color:"white"}}><FaHandHoldingDollar  size={24} />
      </p>
      </div>
      <div className="d-flex flex-column">
        <p className="mb-0" style={{color:"WHITE"}}>Arbitage</p>
        <p className="mb-0 " style={{fontSize:"12px",color:"#565d67"}}>Highest APR for USDT Flexible Earn </p>
      </div>
      </div>
              </a></li>
            <li><a class="dropdown-item" href="#">
            <div className="d-flex gap-3 align-items-center">
      <div>
      <p className="mb-0" style={{color:"white"}}><MdWrongLocation size={24} />
      </p>
      </div>
      <div className="d-flex flex-column">
        <p className="mb-0" style={{color:"white"}}>Earning</p>
        <p className="mb-0 " style={{fontSize:"12px",color:"#565d67"}}>No Lock-up Period Compound</p>
      </div>
      </div>
              </a></li>
            <li><a class="dropdown-item" href="#">
            <div className="d-flex gap-3 align-items-center">
      <div>
      <p className="mb-0" style={{color:"white"}}><MdOutlineCreditScore  size={24} />
      </p>
      </div>
      <div className="d-flex flex-column">
        <p className="mb-0" style={{color:"white"}}>Staking</p>
        <p className="mb-0 " style={{fontSize:"12px",color:"#565d67"}}>One Click Staking,enjoy hourly returns</p>
      </div>
      </div>
              </a></li>
          </ul>
        </li>
        <li class="nav-item dropdown" style={{cursor:"pointer",fontWeight:"500"}}>
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:"white"}}>
          Buy Crypto
          </a>
          <ul class="dropdown-menu" style={{backgroundColor:"black"}}>
            <li><a class="dropdown-item" href="#">
            <div className="d-flex gap-3 align-items-center">
      <div>
      <p className="mb-0" style={{color:"white"}}><IoMdCard  size={24} />
      </p>
      </div>
      <div className="d-flex flex-column">
        <p className="mb-0" style={{color:"white"}}>Express</p>
        <p className="mb-0 " style={{fontSize:"12px",color:"#565d67"}}>Purchase USDT instantly with Visa/MasterCard </p>
      </div>
      </div>
              </a></li>
            <li><a class="dropdown-item" href="#">
            <div className="d-flex gap-3 align-items-center">
      <div>
      <p className="mb-0" style={{color:"white"}}><BsBank2  size={24} />
      </p>
      </div>
      <div className="d-flex flex-column">
        <p className="mb-0" style={{color:"white"}}>Bank Transfer</p>
        <p className="mb-0 " style={{fontSize:"12px",color:"#565d67"}}>Highest APR for USDT Flexible Earn </p>
      </div>
      </div>
              </a></li>
            <li><a class="dropdown-item" href="#">
            <div className="d-flex gap-3 align-items-center">
      <div>
      <p className="mb-0" style={{color:"white"}}><IoMdCard   size={24} />
      </p>
      </div>
      <div className="d-flex flex-column">
        <p className="mb-0" style={{color:"white"}}>Third Party</p>
        <p className="mb-0 " style={{fontSize:"12px",color:"#565d67"}}>Alchempypay,Banxa,Simple Etc </p>
      </div>
      </div>
              </a></li>
          </ul>
        </li>
        <li class="nav-item" style={{cursor:"pointer",fontWeight:"500"}}>
          <a class="nav-link" href="#" style={{color:"white"}}>Rebate</a>
        </li>
        <li class="nav-item dropdown" style={{cursor:"pointer",fontWeight:"500"}}>
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:"white"}}>
            More
          </a>
          <ul class="dropdown-menu " style={{backgroundColor:"black"}}>
            {/* <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li> */}
            <div className="d-flex  justify-content-between p-3 gap-4">
            <div>
<p style={{color:"white",fontWeight:"bold"}}>Products</p>
<div className="d-flex gap-3 align-items-center">
      <div>
      <p className="mb-0" style={{color:"white"}}><SiGitconnected   size={24} />
      </p>
      </div>
      <div className="d-flex flex-column">
        <p className="mb-0" style={{color:"white"}}>API</p>
        <p className="mb-0 " style={{fontSize:"12px",color:"#565d67",textWrap:"nowrap"}}>unlimited opportunities with one key </p>
      </div>
      </div>
            </div>
            <div>
            <p style={{color:"white",fontWeight:"bold"}}>Others</p>
            <div className="d-flex gap-3 align-items-center">
      <div>
      <p className="mb-0" style={{color:"white"}}><RiUserVoiceLine   size={24} />
      </p>
      </div>
      <div className="d-flex flex-column">
        <p className="mb-0" style={{color:"white"}}>Annoncement</p>
        <p className="mb-0 " style={{fontSize:"12px",color:"#565d67",textWrap:"nowrap"}}>Get The Latest News and update from pionex </p>
      </div>
      </div>
      <div className="d-flex gap-3 align-items-center">
      <div>
      <p className="mb-0" style={{color:"white"}}><SiStoryblok   size={24} />
      </p>
      </div>
      <div className="d-flex flex-column">
        <p className="mb-0" style={{color:"white"}}>Blog</p>
        <p className="mb-0 " style={{fontSize:"12px",color:"#565d67"}}>Learn more about blockchain and crypto </p>
      </div>
      </div>
      <div className="d-flex gap-3 align-items-center">
      <div>
      <p className="mb-0" style={{color:"white"}}><MdContactPhone   size={24} />
      </p>
      </div>
      <div className="d-flex flex-column">
        <p className="mb-0" style={{color:"white"}}>Contact Us</p>
        <p className="mb-0 " style={{fontSize:"12px",color:"#565d67"}}>Get in touch with our team </p>
      </div>
      </div>
      <div className="d-flex gap-3 align-items-center">
      <div>
      <p className="mb-0" style={{color:"white"}}><BsQuestionCircleFill   size={24} />
      </p>
      </div>
      <div className="d-flex flex-column">
        <p className="mb-0" style={{color:"white"}}>FAQ</p>
        <p className="mb-0 " style={{fontSize:"12px",color:"#565d67"}}>Solve your problem on pionex </p>
      </div>
      </div>
            </div>
            
</div>
          </ul>
       

        </li>
     
     <li class="nav-item" style={{cursor:"pointer",fontWeight:"500"}}>
          <a class="nav-link" href="#">
          <div>
  <p className="mb-0 d-none d-lg-block" style={{fontWeight:"500",color:"gray"}}>
  <DarkMode isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
  </p>
</div>
          </a>
        </li>
        <li class="nav-item ms-auto" style={{cursor:"pointer",fontWeight:"500"}}>
          <a class="nav-link" href="#">
          <div className="d-none d-lg-block d-flex align-item-center">
   <IoGiftOutline size={26} style={{color:"white",marginTop:"-5px"}} />
    <span style={{fontWeight:"500",color:"white"}} >Activity Center</span>
</div>
          </a>
        </li>
        <li class="nav-item d-none d-lg-block" style={{cursor:"pointer",fontWeight:"500"}}>
          <a class="nav-link" href="#">
          <div>
  <p className="mb-0" style={{color:"black"}} >|</p>
</div>
          </a>
        </li>
        <li class="nav-item" style={{cursor:"pointer",fontWeight:"500"}}>
          <a class="nav-link" href="#">
          <div>
  <p className="mb-0 d-none d-lg-block" style={{fontWeight:"500",color:"white"}}>Sign In</p>
</div>
          </a>
        </li>
        <li class="nav-item" style={{cursor:"pointer",fontWeight:"500"}}>
          <a class="nav-link" href="#">
          <div>
  <p className="mb-0 d-none d-lg-block" style={{fontWeight:"500",color:"white"}}>Sign up</p>
</div>
          </a>
        </li>
        <li class="nav-item d-none d-lg-block" style={{cursor:"pointer",fontWeight:"500"}}>
          <a class="nav-link" href="#">
          <div>
 <BsSearch  size={20} style={{color:"white"}}/>
</div>
          </a>
        </li>
        <li class="nav-item d-none d-lg-block" style={{cursor:"pointer",fontWeight:"500"}}>
          <a class="nav-link" href="#">
          <div>
<IoDownloadOutline size={24}  style={{color:"white"}}/>

</div>
          </a>
        </li>
        <li class="nav-item d-none d-lg-block" style={{cursor:"pointer",fontWeight:"500"}}>
          <a class="nav-link" href="#">
          <div>
<IoSettingsOutline size={24} style={{color:"white"}} />
</div>
          </a>
        </li>
        
      </ul>
    </div>
  </div>
</nav> 
</div>
<div className="d-flex align-items-center justify-content-center gap-2 tesla  ">
  <h4 className="tournment">Win Your Tesla in Future Trading Tournment S10</h4>
  <p className="tradenow mb-0">Trade Now</p>
</div>
<div className={`d-flex justify-content-center gap-3 back  ${isDarkMode ? "dark-mode" : "light-mode"}`}>
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
{/* <div className="border-top">
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
</div> */}
<MobileSection isDarkMode={isDarkMode}/>
<Section isDarkMode={isDarkMode}/>
<Question isDarkMode={isDarkMode}/>
<SectionTwo isDarkMode={isDarkMode}/>
<SectionThree isDarkMode={isDarkMode}/>
{/* <NewRoadMap/> */}
<Roadmap isDarkMode={isDarkMode}/>
{/* <SectionFour isDarkMode={isDarkMode}/> */}
<SectionFive isDarkMode={isDarkMode}/>

<SectionSix/>
<Footer isDarkMode={isDarkMode}/>
<MobileFooter isDarkMode={isDarkMode}/>

        </>
    )
}
export default NewProject;