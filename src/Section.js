

import "./animation.css"
import { FaArrowRight } from "react-icons/fa6";
import Animation from "./assets/animation1.png"
// import Animaton2 from "./assets/animationgraph.svg"
// import Animation3 from "./assets/animation3.png"
import Animation4 from "./assets/AnimationVideo.mp4"
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useState } from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation} from "swiper/modules"
import Animationn from "./assets/newanimation.png"
import { FaRobot } from "react-icons/fa6";
import Animations from "./assets/animation3.png"

function Section({isDarkMode}){
  
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };
const swiperRef=useRef (null)
const HandleFirstTab = (value) => {
  if (swiperRef.current && swiperRef.current.slideTo) {
    swiperRef.current.slideTo(value);
    setActiveTab(value)
  }
};
const HandleSecondTab = (value) => {
  if (swiperRef.current && swiperRef.current.slideTo) {
    swiperRef.current.slideTo(value);
    setActiveTab(value)
  }
};
const HandleThirdTab = (value) => {
  if (swiperRef.current && swiperRef.current.slideTo) {
    swiperRef.current.slideTo(value);
    setActiveTab(value)
  }
};
const HandleFourTab = (value) => {
  if (swiperRef.current && swiperRef.current.slideTo) {
    swiperRef.current.slideTo(value);
    setActiveTab(value)
  }
};
    return(
    <>
    



    <div style={{  padding: "10px" }} className={`lap-section d-none d-lg-block  ${isDarkMode ? "dark-mode" : "light-mode"}`}>
       <div>
        <div className="container d-flex flex-wrap align-items-center justify-content-evenly ">
        <div className="d-flex flex-wrap align-items-center gap-2 justify-content-center">
    {/* <div className="d-flex flex-wrap m-new " style={{color:"black"}}>
        <p className="newest">New</p>
        <p className="date_ing">12/12/24</p>
    </div>
    <div>
        <p style={{color:"gray"}}>Pionex Has Listed NUM
        </p>
    </div> */}
    </div>
   <div className="d-flex flex-wrap align-items-center me-1 gap-2">
  <div >
    <p className="mb-0 d-none" style={{color:"gray"}}>.</p>
  </div>
  {/* <div>
    <p className="mb-0" style={{color:"gray"}}>
    Pionex Will Delist MAVIAUSDT 1-25x Leverage, OMGUSDT 1-</p>
    <p className="mb-0" style={{color:"gray"}}>50x Leverage</p>
  </div> */}
  </div>
  </div>
</div> 


<div className="container  mt-5" style={{marginRight:"-10px"}} >
  <p className="mb-0 bots text-justify  m-grid  " style={{color:"gray"}} >
    Pionex Futures Grid Bots
  </p>
  <p className="mb-0 future text-justify m-future" style={{ color: "gray" }}>
    The Global Leading Platform in Futures
  </p>
  <p className="mb-0 trading text-justify" style={{ color: "gray" }}>
    Grid Trading <span style={{ color: "gray", fontSize: "15px" }} className="m-learn d-none">Learn More <FaArrowRight /> </span>
  </p>
</div>


 
<div>

        <Swiper
          spaceBetween={-10}
          slidesPerView={1.3} 
          centeredSlides={true} 
          navigation={false}
          initialSlide={0}
          slidesOffsetBefore={-20}
        
        onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="swiper-container  d-flex justify-content-center align-items-center mt-5 custom-swiper "
          
        >
          <SwiperSlide className="d-flex flex-row justify-content-center align-items-center gap-0 m-swiper-mobile-view ">
            <div style={{  textAlign: "center" }} className="animation-1">
              <div style={{position:"relative",top:"55%"}}>
              <p className="mb-0  px-3 text-justify only m-only">With Only</p>
              <p className="mb-0  px-3 text-justify only m-only  ">
                10 USDT to start <span role="img" aria-label="rocket">🚀</span>
              </p>
              <p className="mb-0 px-3  text-justify buy m-only">Auto Buy Low and sell high</p>
              </div>
            </div>
            <div  className="animatiomn-2 text-center p-4" style={{backgroundColor:"#111113"}}>
              <img
                src={Animation}
                alt="Animation"
                className="animation-styling-2"
                
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="d-flex flex-row justify-content-center align-items-center  ">:
          <div style={{  textAlign: "center", }} className="animation-2 " >
              <div style={{position:"relative",top:"55%"}}>
              <p className="mb-0  px-3 text-justify only">Lower The</p>
              <p className="mb-0  px-3 text-justify only  ">
              Liquidation Proce
                
              </p>
              <p className="mb-0 px-3  text-justify only">Automatically  <span  ><FaRobot size={35} /></span></p>
              </div>
            </div>
            <div  className="animatiomn-2  text-center p-4" style={{backgroundColor:"#131215"}}>
              <img
                src={Animationn}
                alt="Animation"
               className="animation-styling-2"
               style={{ width: "370px", height: "300px" ,position:"relative",top:"10%"}}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="d-flex flex-row justify-content-center align-items-center m-swiper  ">
          <div style={{  textAlign: "center" }} className="animation-3 ">
              <div style={{position:"relative",top:"55%"}}>
              <p className="mb-0  px-3 text-justify onlyy">Supports a wide </p>
              <p className="mb-0  px-3 text-justify onlyy  ">
           Range oF futures
                
              </p>
              <p className="mb-0 px-3  text-justify onlyy">Grid  <span>🆙</span></p>
              </div>
            </div>
            <div  className="animatiomn-2 text-center p-4" style={{backgroundColor:"#131215"}}>
              <img
                src={Animations}
                alt="Animation"
                className="animation-styling-2"
                style={{ width: "370px", height: "300px" ,position:"relative",top:"10%"}}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="d-flex flex-row justify-content-center align-items-center m-swiper  ">
          <div style={{  textAlign: "center" }} className="animation-1">
              <div style={{position:"relative",top:"55%"}}>
             
              <p className="mb-0  px-3 text-justify only  ">
           Copy Bot With 1
                
              </p>
              <p className="mb-0 px-3  text-justify only">Click  <span>⚡️</span>
              </p>
              </div>
            </div>
            <div  className="animatiomn-3 text-center p-4" style={{backgroundColor:"#131215"}}>
            <video
  controls
  autoPlay
  loop
  muted
  style={{ width: "370px", height: "346px" }}
   className="animation-styling-2"
>
  <source src={Animation4} type="video/mp4" />
  Your browser does not support the video tag.
</video>
            </div>
          </SwiperSlide>
        </Swiper>

      
        <div
          className="swiper-navigation"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
            marginBottom:"20px",
          
          }}
        >
          <ul class="nav justify-content-center" style={{
      borderBottom: "1px solid white",  
      padding: "5px", 
      display: "flex",  
      justifyContent: "center",
      listStyleType: "none",  
      margin: 0,  
    }}>
  <li class={`nav-item ${activeTab === 0 ? "activetab" : ""}`} onClick={()=>HandleFirstTab(0)}>
    <a class="nav-link " aria-current="page" style={{cursor:"pointer",color: activeTab === 0 ? "white" : "gray" }} >Only 10 USDT</a>
  </li>
  <li class={`nav-item ${activeTab === 1 ? "activetab" : ""}`} onClick={()=>HandleSecondTab(1)}>
  <a className="nav-link" style={{ cursor: "pointer" , color: activeTab === 1 ? "white" : "gray"}}>
  <span>Lower the liquidation price</span><br />
  <span className="text-justify">automatically</span>
</a>
  </li>
  <li class={`nav-item ${activeTab === 2? "activetab" : ""}`} onClick={()=>HandleThirdTab(2)}>
    <a class="nav-link" style={{cursor:"pointer", color: activeTab === 2 ? "activetab" : "", color: activeTab === 2 ? "white" : "gray"}} >Supports a wide range of <br/> futures grid</a>
  </li>
  <li class={`nav-item ${activeTab === 3 ? "activetab" : ""}`} onClick={()=>HandleFourTab(3)}>
    <a class="nav-link "style={{cursor:"pointer", color: activeTab === 3 ? "activetab" : "",color: activeTab === 3 ? "white" : "gray"}} >Copy Bot with 1 click</a>
  </li>
</ul>

        </div>
        <div className="text-center" style={{color:"white"}}>
          <p>Grid profits provide continuous additional margins to mitigate funding fee losses, reducing <br/> the risk of forced liquidation. This means the futures grid bot is better at withstanding <br/> liquidation risk than manual futures trading.</p></div>
          
        </div>
        </div>
    


    



   
      

   






    
    </>
    )
}
export default Section