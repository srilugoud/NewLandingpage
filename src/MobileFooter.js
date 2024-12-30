
import "./mobilefooter.css"
import Image from "./assets/footerimage.png"
import FirstIcon from "./assets/icon.svg"
import SecondIcon from "./assets/icon2.svg"
import ThirdIcon from "./assets/icon3.svg"
import FourthIcon from "./assets/icon4.svg"
import FifthIcon from "./assets/icon5.svg"
import { MdEmail } from "react-icons/md";
import { CiDollar } from "react-icons/ci";
import { IoIosRocket } from "react-icons/io";
import { RiChatPrivateLine } from "react-icons/ri";
import { MdDescription } from "react-icons/md";
import { FaHospitalUser } from "react-icons/fa6";
import { FaHandshake } from "react-icons/fa";
import { HiDocumentMagnifyingGlass } from "react-icons/hi2";
import { MdOutlineSettingsApplications } from "react-icons/md";
import { SlArrowDown } from "react-icons/sl";
import { FaBlog } from "react-icons/fa";
import { IoMdPaper } from "react-icons/io";
import { IoVideocamOutline } from "react-icons/io5";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { AiOutlineApi } from "react-icons/ai";
import { PiVideoDuotone } from "react-icons/pi";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { FaRocketchat } from "react-icons/fa";
import { RiMicAiLine } from "react-icons/ri";
function MobileFooter({isDarkMode}){
    return(
        <>
        <div className={`mobile-footer d-black d-lg-none ${isDarkMode ? "dark-mode" : "light-mode"}`}>
        <div className="px-3">
            <div>
            <img src={Image} style={{width:"160px",height:"50px"}}/>
            </div>
            <div>
                <p className="community mt-3">Join the Community</p>
            </div>
           
            <div >
                <p className="com mt-5">Community</p>
            </div>
            <div className="d-flex gap-3">
<p><img src={FirstIcon} style={{width:"25px",height:"25px"}}/></p>
<p><img src={SecondIcon}  style={{width:"25px",height:"25px"}}/></p>
<p><img src={ThirdIcon} style={{width:"25px",height:"25px"}}/></p>
<p><img src={FourthIcon} style={{width:"25px",height:"25px"}}/></p>
<p><img src={FifthIcon} style={{width:"25px",height:"25px"}}/></p>
            </div>
         
        </div>
        
        <nav className="navbar navbar-expand-lg navbar-color">
  <div className="container-fluid">
    <div className=" w-100" >
      <ul className="navbar-nav w-100 align-items-start align-items-lg-center mt-2 mx-2">
        <li
          className="nav-item dropdown"
          style={{cursor:" pointer", fontWeight: "500"}}
        >
          <a
            class="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            // aria-expanded="false"
          >
            About
          </a>
          <ul
            className="dropdown-menu"
            
          >
           
            <li>
              <a className="dropdown-item" href="#">
              <div  className="d-flex gap-2  mt-2">
                     <p className="mb-0"  style={{ color: "lightgray" }} >
                     <CiDollar size={25} /> </p>
                     <p className="mb-0"  style={{ color: "lightgray" }}>Free</p>
                     </div>
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
              <div  className="d-flex gap-2  mt-2">
                     <p className="mb-0"  style={{ color: "lightgray" }} >
                     <IoIosRocket size={25} /> </p>
                     <p className="mb-0"  style={{ color: "lightgray" }}>Listing Applications</p>
                     </div>
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
              <div  className="d-flex gap-2  mt-2">
                     <p className="mb-0"  style={{ color: "lightgray" }} >
                     <RiChatPrivateLine size={25} /> </p>
                     <p className="mb-0"  style={{ color: "lightgray" }}>Privacy Policy</p>
                     </div>
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
              <div  className="d-flex gap-2  mt-2">
                     <p className="mb-0"  style={{ color: "lightgray" }} >
                     <MdDescription size={25} /> </p>
                     <p className="mb-0"  style={{ color: "lightgray" }}>Desclaimer</p>
                     </div>
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
              <div  className="d-flex gap-2  mt-2">
                     <p className="mb-0"  style={{ color: "lightgray" }} >
                     <FaHospitalUser size={25} /> </p>
                     <p className="mb-0"  style={{ color: "lightgray" }}>User Conduct Code</p>
                     </div>
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
              <div  className="d-flex gap-2  mt-2">
                     <p className="mb-0"  style={{ color: "lightgray" }} >
                     <FaHandshake size={25} /> </p>
                     <p className="mb-0"  style={{ color: "lightgray" }}>Terms of Service</p>
                     </div>
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
              <div  className="d-flex gap-2  mt-2">
                     <p className="mb-0"  style={{ color: "lightgray" }} >
                     <MdOutlineSettingsApplications size={25} /> </p>
                     <p className="mb-0"  style={{ color: "lightgray" }}>Margin Facility Agreement</p>
                     </div>
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
              <div  className="d-flex gap-2  mt-2">
                     <p className="mb-0"  style={{ color: "lightgray" }} >
                     <HiDocumentMagnifyingGlass size={25} /> </p>
                     <p className="mb-0"  style={{ color: "lightgray" }}>P2P Merchant Application</p>
                     </div>
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <ul className="navbar-nav w-100 align-items-start align-items-lg-center mt-2 mx-2">
        <li
          className="nav-item dropdown"
          style={{cursor:" pointer", fontWeight: "500"}}
        >
          <a
            class="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Tutorials
          </a>
          <ul
            class="dropdown-menu"
            
          >
           
            <li>
              <a class="dropdown-item" href="#">
              <div  className="d-flex gap-2  mt-2">
                     <p className="mb-0"  style={{ color: "lightgray" }} >
                     <FaBlog size={25} /> </p>
                     <p className="mb-0"  style={{ color: "lightgray" }}>Blog</p>
                     </div>
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
              <div  className="d-flex gap-2  mt-2">
                     <p className="mb-0"  style={{ color: "lightgray" }} >
                     <IoMdPaper size={25} /> </p>
                     <p className="mb-0"  style={{ color: "lightgray" }}>Grid Trading Bot</p>
                     </div>
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
              <div  className="d-flex gap-2  mt-2">
                     <p className="mb-0"  style={{ color: "lightgray" }} >
                     <IoVideocamOutline  size={25} /> </p>
                     <p className="mb-0"  style={{ color: "lightgray" }}>Video</p>
                     </div>
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
              <div  className="d-flex gap-2  mt-2">
                     <p className="mb-0"  style={{ color: "lightgray" }} >
                     <FaRegCircleQuestion size={25} /> </p>
                     <p className="mb-0"  style={{ color: "lightgray" }}>FAQ</p>
                     </div>
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
              <div  className="d-flex gap-2  mt-2">
                     <p className="mb-0"  style={{ color: "lightgray" }} >
                     <AiOutlineApi size={25} /> </p>
                     <p className="mb-0"  style={{ color: "lightgray" }}>API</p>
                     </div>
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
              <div  className="d-flex gap-2  mt-2">
                     <p className="mb-0"  style={{ color: "lightgray" }} >
                     <PiVideoDuotone size={25} /> </p>
                     <p className="mb-0"  style={{ color: "lightgray" }}>Course</p>
                     </div>
              </a>
            </li>
           
          </ul>
        </li>
      </ul>
      <ul className="navbar-nav w-100 align-items-start align-items-lg-center mt-2 mx-2">
        <li
          className="nav-item dropdown"
          style={{cursor:" pointer", fontWeight: "500"}}
        >
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            // aria-expanded="false"
          >
            Contact
          </a>
          <ul
            className="dropdown-menu"
            
          >
           
            <li>
              <a className="dropdown-item">
              <div  className="d-flex gap-2  mt-2">
                     <p className="mb-0"  style={{ color: "lightgray" }} >
                     <MdEmail size={25} /> </p>
                     <p className="mb-0"  style={{ color: "lightgray" }}>Email</p>
                     </div>
              </a>
            </li>
            <li>
              <a className="dropdown-item" >
              <div  className="d-flex gap-2  mt-2">
                     <p className="mb-0"  style={{ color: "lightgray" }} >
                     <FaRocketchat size={25} /> </p>
                     <p className="mb-0"  style={{ color: "lightgray" }}>Live Chat</p>
                     </div>
              </a>
            </li>
            <li>
              <a className="dropdown-item" >
              <div  className="d-flex gap-2  mt-2">
                     <p className="mb-0"  style={{ color: "lightgray" }} >
                     <IoVideocamOutline  size={25} /> </p>
                     <p className="mb-0"  style={{ color: "lightgray" }}>Announcement</p>
                     </div>
              </a>
            </li>
            <li>
              <a className="dropdown-item" >
              <div  className="d-flex gap-2  mt-2">
                     <p className="mb-0"  style={{ color: "lightgray" }} >
                     <MdOutlineVerifiedUser size={25} /> </p>
                     <p className="mb-0"  style={{ color: "lightgray" }}>Official Verification</p>
                     </div>
              </a>
            </li>
            <li>
              <a classNamew="dropdown-item" >
              <div  className="d-flex gap-2  mt-2">
                     <p className="mb-0"  style={{ color: "lightgray" }} >
                     <AiOutlineApi size={25} /> </p>
                     <p className="mb-0"  style={{ color: "lightgray" }}>API</p>
                     </div>
              </a>
            </li>
            <li>
              <a className="dropdown-item" >
              <div  className="d-flex gap-2  mt-2">
                     <p className="mb-0"  style={{ color: "lightgray" }} >
                     <PiVideoDuotone size={25} /> </p>
                     <p className="mb-0"  style={{ color: "lightgray" }}>Course</p>
                     </div>
              </a>
            </li>
           
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>




</div>
        </>
    )
}
export default MobileFooter