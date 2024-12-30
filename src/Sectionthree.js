
import Fleximage1 from "./assets/fleximage1.png"
import Fleximage2 from "./assets/fleximage2.png"
import Fleximage3 from "./assets/fleximage3.png"
import "./sectionthree.css"
function SectionThree({isDarkMode}){
    return(
        <>
        <div className={`sectionthreee ${isDarkMode ? "dark-mode" : "light-mode"}`}>
        <div  className="container" >
                <div className="w-75 mx-auto">
        <p className="mb-0 security text-justify">
            Found Security
        </p>
        <p className="mb-0 principle text-justify" style={{color:"gray"}}>Pionex's Fundamental Principle</p>
        </div>
        <div className="row justify-content-center px-3">
        <div className="col-lg-3">
        <div>
            <img src={Fleximage1} className="fleximage1"/>
        </div>
        <div>
            <p className="compliance">Compliance Matrix</p>
        </div>
        <div>
            <p className="para" style={{color:"white"}}>
            Pionex's services are available globally and have<br/> obtained relevant compliance licenses in Europe<br/> and other regions. We strictly adhere to regulatory <br/> requirements, implementing comprehensive<br/> identity verification and AML (Anti-Money  <br/>Laundering) measures to prevent money <br/>laundering, fraud, and other illegal activities.
            </p>
        </div>
        </div>
        <div className="col-lg-3">
        <div>
            <img src={Fleximage2} className="fleximage1"/>
        </div>
        <div>
            <p className="compliance">Account Security</p>
        </div>
        <div>
           <p className="para" style={{color:"white"}}>
           Pionex employs multiple protective measures to <br/> comprehensively secure your account, including <br/>identity verification, Google Authenticator<br/> verification, and withdrawal whitelists. Additionally,<br/> we use advanced AI technology to proactively<br/> identify and intercept potential risks, ensuring the<br/> highest level of security for your account.
           </p>
        </div>
        </div>
        <div className="col-lg-3">
        <div>
            <img src={Fleximage3} className="fleximage1"/>
        </div>
        <div>
            <p className="compliance">Compliance Matrix</p>
        </div>
        <div>
           <p className="para" style={{color:"white"}}>User assets are kept separate from operational <br/> funds, with Pionex maintaining a reserve ratio of <br/> over 100%. We use the 'Merkle Tree' auditing <br/> method to demonstrate a 100% reserve ratio.<br/>
           <span className="text-danger text-decoration-underline">View the security Audit</span></p>
        </div>
        </div>
        </div>
        </div>
        </div>
        
        </>
    )
}
export default SectionThree