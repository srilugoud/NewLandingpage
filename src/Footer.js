
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
function Footer(){
    return(
        <>
        <div className="footer">
       <div className="d-flex justify-content-evenly">
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
            <div>
                <p className="about mt-3 ">About</p>
                <div  className="d-flex gap-2  mt-2">
                     <p className="mb-0"  style={{ color: "lightgray" }} >
                     <CiDollar size={25} /> </p>
                     <p className="mb-0"  style={{ color: "lightgray" }}>Free</p>
                     </div>
                     <div  className="d-flex gap-2  mt-2">
                     <p className="mb-0"  style={{ color: "lightgray" }} >
                     <IoIosRocket  size={25} /> </p>
                     <p className="mb-0"  style={{ color: "lightgray" }}>Listing Application</p>
                     </div>
                     <div  className="d-flex gap-2 mt-2 ">
                     <p className="mb-0"  style={{ color: "lightgray" }} >
                     <RiChatPrivateLine  size={25} /> </p>
                     <p className="mb-0"  style={{ color: "lightgray" }}>Privacy Policy</p>
                     </div>
                     <div  className="d-flex gap-2  mt-2">
                     <p className="mb-0"  style={{ color: "lightgray" }} >
                     <MdDescription  size={25} /> </p>
                     <p className="mb-0"  style={{ color: "lightgray" }}>Desclaimer</p>
                     </div>
                     <div  className="d-flex gap-2  mt-2">
                     <p className="mb-0"  style={{ color: "lightgray" }} >
                     <FaHospitalUser  size={25} /> </p>
                     <p className="mb-0"  style={{ color: "lightgray" }}>User Conduct Code</p>
                     </div>
                     <div  className="d-flex gap-2 mt-2 ">
                     <p className="mb-0"  style={{ color: "lightgray" }} >
                     <FaHandshake  size={25} /> </p>
                     <p className="mb-0"  style={{ color: "lightgray" }}>Terms of Service</p>
                     </div>
                     <div  className="d-flex gap-2 mt-2 ">
                     <p className="mb-0"  style={{ color: "lightgray" }} >
                     <MdOutlineSettingsApplications  size={25} /> </p>
                     <p className="mb-0"  style={{ color: "lightgray" }}>Margin Facility Agrrement</p>
                     </div>
                     <div  className="d-flex gap-2  mt-2 mb-3">
                     <p className="mb-0"  style={{ color: "lightgray" }} >
                     < HiDocumentMagnifyingGlass  size={25} /> </p>
                     <p className="mb-0"  style={{ color: "lightgray" }}>P2P Merchant Application</p>
                     </div>
            </div>
        </div>
        <div>
            <div>
            <div>
            <div>
                <p className="about mt-3">Tutorials</p>
                <div  className="d-flex gap-2  mt-2">
                     <p className="mb-0"  style={{ color: "lightgray" }} >
                     <FaBlog size={25} /> </p>
                     <p className="mb-0"  style={{ color: "lightgray" }}>Blog</p>
                     </div>
                     <div  className="d-flex gap-2  mt-2">
                     <p className="mb-0"  style={{ color: "lightgray" }} >
                     <IoMdPaper  size={25} /> </p>
                     <p className="mb-0"  style={{ color: "lightgray" }}>Grid Trading Bot</p>
                     </div>
                     <div  className="d-flex gap-2 mt-2 ">
                     <p className="mb-0"  style={{ color: "lightgray" }} >
                     <IoVideocamOutline  size={25} /> </p>
                     <p className="mb-0"  style={{ color: "lightgray" }}>Video</p>
                     </div>
                     <div  className="d-flex gap-2  mt-2">
                     <p className="mb-0"  style={{ color: "lightgray" }} >
                     <FaRegCircleQuestion size={25} /> </p>
                     <p className="mb-0"  style={{ color: "lightgray" }}>FAQ</p>
                     </div>
                     <div  className="d-flex gap-2  mt-2">
                     <p className="mb-0"  style={{ color: "lightgray" }} >
                     <AiOutlineApi  size={25} /> </p>
                     <p className="mb-0"  style={{ color: "lightgray" }}>API</p>
                     </div>
                     <div  className="d-flex gap-2 mt-2 ">
                     <p className="mb-0"  style={{ color: "lightgray" }} >
                     <PiVideoDuotone  size={25} /> </p>
                     <p className="mb-0"  style={{ color: "lightgray" }}>Course</p>
                     </div>
                    
            </div>
        </div>
            </div>
        </div>
        <div>
        <div>
            <div>
                <p className="about mt-3">About</p>
                <div  className="d-flex gap-2  mt-2">
                     <p className="mb-0"  style={{ color: "lightgray" }} >
                     <MdEmail size={25} /> </p>
                     <p className="mb-0"  style={{ color: "lightgray" }}>Email</p>
                     </div>
                     <div  className="d-flex gap-2  mt-2">
                     <p className="mb-0"  style={{ color: "lightgray" }} >
                     <FaRocketchat  size={25} /> </p>
                     <p className="mb-0"  style={{ color: "lightgray" }}>Live Chat</p>
                     </div>
                     <div  className="d-flex gap-2 mt-2 ">
                     <p className="mb-0"  style={{ color: "lightgray" }} >
                     <RiMicAiLine  size={25} /> </p>
                     <p className="mb-0"  style={{ color: "lightgray" }}>Announcement</p>
                     </div>
                     <div  className="d-flex gap-2  mt-2">
                     <p className="mb-0"  style={{ color: "lightgray" }} >
                     <MdOutlineVerifiedUser size={25} /> </p>
                     <p className="mb-0"  style={{ color: "lightgray" }}>Official Verification</p>
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