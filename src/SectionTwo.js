
import "./Pionex.css"
import Image from "./assets/mobile.png"
import { FaArrowRightLong, FaRobot } from "react-icons/fa6";
import { FaArrowUpLong } from "react-icons/fa6";
import { FaArrowDownLong } from "react-icons/fa6";
function SectionTwo(){
    return(
        <>
      <div className="sectiontwo">
        <div className="containerrr">
        <div  className="row justify-content-center py-5 my-5 align-items-center">
        <div  className="col-xl-5 col-lg-6 col-md-12">
    <div>
        <p className="mb-0 spot text-justify">Pionex Futures-Spot Arbitrage</p>
        <p className="mb-0 usdt text-justify">USDT Flexible Savings  </p>
        <p className="mb-0 height text-justify">with <span style={{color:"#FF4F29"}}>the Highest APR in</span> 
         </p>
        <p className="mb-0 text-justify mar">the Market</p>
       <p className=" text-justify price mt-2">View Price comparisons <span><FaArrowRightLong size={22} /></span></p>
    </div>
    <div className="w-75 d-flex gap-3 flex-column mt-5">
    <div className="card p-3 shadow  border-0 carding " style={{backgroundColor:"#fafafa"}}>
  <div className="d-flex justify-content-between align-items-center">
    <p className="m-0 fw-bold sizing">Pionex</p>
    <p className="m-0 text-success fw-bold">
      <span><FaArrowUpLong /></span> 48.41%
    </p>
  </div>
  <div className="mt-2">
    <div className="d-flex justify-content-between">
      <p className="m-0  dec">Futures-Spot Arbitrage</p>
      <p className="m-0" style={{fontSize:"13px"}}>24h APR</p>
    </div>
  </div>
  
</div>
<div className="card p-3 shadow border-0 carding " style={{backgroundColor:"#fafafa"}}>
  <div className="d-flex justify-content-between align-items-center">
    <p className="m-0 fw-bold sizing">B*</p>
    <p className="m-0 fw-bold">
      <span className="text-danger"><FaArrowDownLong /></span> 4.68%
    </p>
  </div>
  <div className="mt-2">
    <div className="d-flex justify-content-between">
      <p className="m-0  dec">Flexible Savings</p>
      <p className="m-0" style={{fontSize:"13px"}}>24h APR</p>
    </div>
  </div>
  
</div>
<div className="card p-3 shadow  border-0 carding" style={{backgroundColor:"#fafafa"}}>
  <div className="d-flex justify-content-between align-items-center">
    <p className="m-0 fw-bold sizing">O*</p>
    <p className="m-0  fw-bold">
    <span className="text-danger"><FaArrowDownLong /></span> 2.06%
    </p>
  </div>
  <div className="mt-2">
    <div className="d-flex justify-content-between">
      <p className="m-0  dec">Simple Earn</p>
      <p className="m-0" style={{fontSize:"13px"}}>24h APR</p>
    </div>
  </div>
  
</div>
</div>
</div>
<div className="col-xl-4 col-lg-6 col-md-12">
    <img src={Image} style={{width:"340px",height:"670px"}}/>
</div>
</div>
        </div>
       
      </div>
        </>
    )
}
export default  SectionTwo