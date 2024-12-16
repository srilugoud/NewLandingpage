import "./Pionex.css"

import { FaArrowRightLong } from "react-icons/fa6";
function Animation(){
    return(
        <>
        <div className="d-flex flex wrap justify-content-between gap-5 section">
        <div className="d-flex flex-wrap gap-2 align-items-center " >
        
        <div className="square-box">
  <p className="new">New</p>
  <p className="date">12/10/24</p>
</div>

<div >
    <p className="pione">Pionex Will Delist MAVIAUSDT 1-25x Leverage, OMGUSDT 1-<br/>
    50x Leverage
    </p>
</div>
        </div>
        <div>
            <p className="mb-0 move">Pionex Has Listed MOVE</p>
        </div>
        </div>
      <div className="section-2">
           <div>
            <p className="mb-0 " style={{color:"white", fontSize:"20px",fontWeight:"500"}} >Pionex Futures Grid Bots</p>
            <div className="d-flex flex-wrap align-items-center gap-4">
            <p className="mb-0" style={{color:"white",fontSize:"30px", fontWeight:"bold"}}>The Global Leading Platform in Futures Grid Tarding</p>
            <p className="mb-0">Learn more<span><FaArrowRightLong size={22} /></span></p>
            </div>
           </div>
      </div>

      
        </>
    )
}
export default Animation