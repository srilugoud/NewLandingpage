
import "./section6.css"
import { FaApple } from "react-icons/fa";
import IconApple from "./assets/iconapple.png"
import { FaGooglePlay } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";
import Scanner from "./assets/scanner.png"
import Image from "./assets/image.png"
function SectionSix(){
    return(
        <>
      <div className="container" style={{padding: "4rem 212px"}}>
        
        <div class="container">
    <p class="trading-text mb-0 text-center">Trade Easily Anytime, Anywhere</p>
    <p class="download-text mb-0 text-center">Download the Pionex App Now
    </p>
</div>
<div className="d-flex  justify-content-center align-items-center gap-5 mb-3">
<div className="app-store ">
    <div>
    <p className="mb-0 text-muted ">iOS</p>
    </div>
    <div className="apple ">
        <p className="mb-0"><FaApple  size={38} />
        </p>
        <p className="mb-0" style={{fontSize:"13px"}}>Download From <br/> App Store</p>
    </div>
    <div className="test ">
        <p className="mb-0">
            <img src={IconApple} style={{width:"30px",height:"30px"}}/>
        </p>
        <p className="mb-0" style={{fontSize:"13px"}}>Download From <br/> TestFlight</p>
    </div>
    
</div>
<div className="app-store ">
    <div>
    <p className="mb-0  text-muted">Android</p>
    </div>
    <div className="apple ">
        <p className="mb-0"><FaGooglePlay  size={37} />
        </p>
        <p className="mb-0" style={{fontSize:"13px"}}>Download From <br/> App Store</p>
    </div>
    <div className="test ">
        <p className="mb-0">
        <FaAndroid size={37}  />
        </p>
        <p className="mb-0" style={{fontSize:"13px"}}>Download From <br/> TestFlight</p>
    </div>
    
</div>
<div className="app-store ">
    <div>
    <p className="mb-0  text-muted">downlaod</p>
    </div>
    <div className="scanner">
        <p className="mb-0">
            <img src={Scanner} style={{height:"112px"}}/>
        </p>
        
    </div>
    
    
</div>

</div>

<div className="mb-5">
    <img src={Image} style={{width:"864px"}}/>
</div>
<div>
<div className="last-signin">
    <p className="mb-0 bucket" >Craete Bots and Earn Easily in the Bull Bucket</p>
    <p className=" signnn">SIgnup</p>
</div>
</div>

        </div>
   
        </>
    )
}
export default SectionSix