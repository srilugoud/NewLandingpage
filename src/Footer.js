
import "./footer.css"
import Image from "./assets/footerimage.png"
import FirstIcon from "./assets/icon.svg"
import SecondIcon from "./assets/icon2.svg"
import ThirdIcon from "./assets/icon3.svg"
import FourthIcon from "./assets/icon4.svg"
import FifthIcon from "./assets/icon5.svg"
import { CiDollar } from "react-icons/ci";
import { IoIosRocket } from "react-icons/io";
import { RiChatPrivateLine } from "react-icons/ri";
import { MdDescription } from "react-icons/md";
import { FaHospitalUser } from "react-icons/fa6";
import { FaHandshake } from "react-icons/fa";
import { HiDocumentMagnifyingGlass } from "react-icons/hi2";
import { MdOutlineSettingsApplications } from "react-icons/md";
import { FaBlog } from "react-icons/fa";
import { IoMdPaper } from "react-icons/io";
import { IoVideocamOutline } from "react-icons/io5";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { AiOutlineApi } from "react-icons/ai";
import { PiVideoDuotone } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { FaRocketchat } from "react-icons/fa";
import { RiMicAiLine } from "react-icons/ri";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { MdPodcasts } from "react-icons/md";
import { SlSocialSpotify } from "react-icons/sl";
import { IoLogoSoundcloud } from "react-icons/io5";

function Footer({isDarkMode}){


    return(
        <>
        <div className={`footer ${isDarkMode ? "dark-mode" : "light-mode"}`} >
       <div className="d-flex justify-content-evenly m-footer" >
       
        <div>
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
        <div>
            <div >
                <p className="about mt-3 ">About</p>
                <div  className="d-flex gap-2  mt-2">
                     <p className="mb-0"  style={{ color: "white" }} >
                     <CiDollar size={24} /> </p>
                     <p className="mb-0"  style={{ color: "white",fontSize:"13px" }}>Free</p>
                     </div>
                     <div  className="d-flex gap-2  mt-2">
                     <p className="mb-0"  style={{ color: "white", }} >
                     <IoIosRocket  size={25} /> </p>
                     <p className="mb-0"  style={{ color: "white",fontSize:"13px" }}>Listing Application</p>
                     </div>
                     <div  className="d-flex gap-2 mt-2 ">
                     <p className="mb-0"  style={{ color: "white" }} >
                     <RiChatPrivateLine  size={25} /> </p>
                     <p className="mb-0"  style={{ color: "white",fontSize:"13px" }}>Privacy Policy</p>
                     </div>
                     <div  className="d-flex gap-2  mt-2">
                     <p className="mb-0"  style={{ color: "white", }} >
                     <MdDescription  size={25} /> </p>
                     <p className="mb-0"  style={{ color: "white",fontSize:"13px" }}>Desclaimer</p>
                     </div>
                     <div  className="d-flex gap-2  mt-2">
                     <p className="mb-0"  style={{ color: "white" }} >
                     <FaHospitalUser  size={25} /> </p>
                     <p className="mb-0"  style={{ color: "white" ,fontSize:"13px"}}>User Conduct Code</p>
                     </div>
                     <div  className="d-flex gap-2 mt-2 ">
                     <p className="mb-0"  style={{ color: "white" }} >
                     <FaHandshake  size={25} /> </p>
                     <p className="mb-0"  style={{ color: "white" ,fontSize:"13px"}}>Terms of Service</p>
                     </div>
                     <div  className="d-flex gap-2 mt-2 ">
                     <p className="mb-0"  style={{ color: "white" }} >
                     <MdOutlineSettingsApplications  size={25} /> </p>
                     <p className="mb-0"  style={{ color: "white",fontSize:"13px" }}>Margin Facility Agreement</p>
                     </div>
                     <div  className="d-flex gap-2  mt-2 mb-3">
                     <p className="mb-0"  style={{ color: "white" }} >
                     < HiDocumentMagnifyingGlass  size={25} /> </p>
                     <p className="mb-0"  style={{ color: "white",fontSize:"13px" }}>P2P Merchant Application</p>
                     </div>
            </div>
        </div>
        

        <div>
            <div>
            <div>
            <div>
                <p className="about mt-3">Tutorials</p>
                <div  className="d-flex gap-2  mt-2">
                     <p className="mb-0"  style={{ color: "white" }} >
                     <FaBlog size={25} /> </p>
                     <p className="mb-0"  style={{ color: "white",fontSize:"13px" }}>Blog</p>
                     </div>
                     <div  className="d-flex gap-2  mt-2">
                     <p className="mb-0"  style={{ color: "white" }} >
                     <IoMdPaper  size={25} /> </p>
                     <p className="mb-0"  style={{ color: "white" ,fontSize:"13px"}}>Grid Trading Bot</p>
                     </div>
                     <div  className="d-flex gap-2 mt-2 ">
                     <p className="mb-0"  style={{ color: "white" }} >
                     <IoVideocamOutline  size={25} /> </p>
                     <p className="mb-0"  style={{ color: "white",fontSize:"13px" }}>Video</p>
                     </div>
                     <div  className="d-flex gap-2  mt-2">
                     <p className="mb-0"  style={{ color: "white" }} >
                     <FaRegCircleQuestion size={25} /> </p>
                     <p className="mb-0"  style={{ color: "white" ,fontSize:"13px"}}>FAQ</p>
                     </div>
                     <div  className="d-flex gap-2  mt-2">
                     <p className="mb-0"  style={{ color: "white" }} >
                     <AiOutlineApi  size={25} /> </p>
                     <p className="mb-0"  style={{ color: "white",fontSize:"13px" }}>API</p>
                     </div>
                     <div  className="d-flex gap-2 mt-2 ">
                     <p className="mb-0"  style={{ color: "white" }} >
                     <PiVideoDuotone  size={25} /> </p>
                     <p className="mb-0"  style={{ color: "white" ,fontSize:"13px"}}>Course</p>
                     </div>
                    
            </div>
        </div>
            </div>
        </div>
        <div>
        <div>
            <div>
                <p className="about mt-3">Contact</p>
                <div  className="d-flex gap-2  mt-2">
                     <p className="mb-0"  style={{ color: "white" }} >
                     <MdEmail size={25} /> </p>
                     <p className="mb-0"  style={{ color: "white",fontSize:"13px" }}>Email</p>
                     </div>
                     <div  className="d-flex gap-2  mt-2">
                     <p className="mb-0"  style={{ color: "white" }} >
                     <FaRocketchat  size={25} /> </p>
                     <p className="mb-0"  style={{ color: "white",fontSize:"13px" }}>Live Chat</p>
                     </div>
                     <div  className="d-flex gap-2 mt-2 ">
                     <p className="mb-0"  style={{ color: "white" }} >
                     <RiMicAiLine  size={25} /> </p>
                     <p className="mb-0"  style={{ color: "white",fontSize:"13px" }}>Announcement</p>
                     </div>
                     <div  className="d-flex gap-2  mt-2">
                     <p className="mb-0"  style={{ color: "white" }} >
                     <MdOutlineVerifiedUser size={25} /> </p>
                     <p className="mb-0"  style={{ color: "white",fontSize:"13px" }}>Official Verification</p>
                     </div>
                    
                    
                    
                   
            </div>
        </div>
        </div>
        <div>
            <div></div>
      <p className="about mt-3">SubScribe</p>
      <div className="d-flex flex-column gap-3">
      <div className="d-flex align-items-center justify-content-center pod gap-2">
      <div>
        <p><MdPodcasts size={30} style={{color:"orange",paddingTop:"7px"}} /></p>
      </div>
      <div>
        <p className="mb-0" style={{color:"white",fontSize:"10px"}}>Listen On </p>
        <p className="mb-0" style={{color:"white",fontSize:"12px"}}>Apple PodCost</p>
      </div>
      </div>
      <div className="d-flex align-items-center justify-content-center pod gap-2">
      <div>
        <p><SlSocialSpotify size={30} style={{color:"blue",paddingTop:"7px"}} /></p>
      </div>

      <div>
        <p className="mb-0" style={{color:"white",fontSize:"10px"}}>Listen On </p>
        <p className="mb-0" style={{color:"white",fontSize:"12px"}}> Apple Spotify</p>
      </div>
      </div>
      <div className="d-flex align-items-center justify-content-center pod gap-2">
      <div>
        <p><IoLogoSoundcloud  size={30} style={{color:"pink",paddingTop:"7px"}} /></p>
      </div>

      <div>
        <p className="mb-0" style={{color:"white",fontSize:"10px"}}>Listen On </p>
        <p className="mb-0" style={{color:"white",fontSize:"12px"}}> Apple Cloud</p>
      </div>
      </div>
      </div>
      </div>
    
       </div>
   
       </div>
        </>
    )
}
export default Footer