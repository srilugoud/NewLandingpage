
// import "./sectionthree.css"
import "./animation.css"
import { FaArrowRight } from "react-icons/fa6";
import Animation from "./assets/animation1.png"
import Animaton2 from "./assets/animationgraph.svg"
import Animation3 from "./assets/animation3.png"
import Animation4 from "./assets/AnimationVideo.mp4"
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation} from "swiper/modules"

function Section(){

const swiperRef=useRef (null)
 const HandleFirstTab=(value)=>{
       if(swiperRef.current){
        const swiperInstant=swiperRef.current.swiper
          swiperInstant.slideTo(value)
       }
}
const HandleSecondTab=(value)=>{
    if(swiperRef.current){
        const swiperInstant=swiperRef.current.swiper
          swiperInstant.slideTo(value)
    }
}
const HandleThirdTab=(value)=>{
    if(swiperRef.current){
        const swiperInstant=swiperRef.current.swiper
          swiperInstant.slideTo(value)
    }
}
const HandleFourTab=(value)=>{
    if(swiperRef.current){
        const swiperInstant=swiperRef.current.swiper
          swiperInstant.slideTo(value)
    }
}
    return(
    <>
    



    <div style={{ backgroundColor: "black", padding: "10px" }}>
        <Swiper
          spaceBetween={8}
          slidesPerView={2} // Adjust slidesPerView as needed
          navigation={false}
        //   modules={[Navigation]}
        //   ref={swiperRef}
        onSwiper={(swiper)=>(swiperRef.current=swiper)}
          className="swiper-container"
        >
          <SwiperSlide className="d-flex flex-row justify-content-center align-items-center">
            <div style={{ margin: "0 10px", textAlign: "center" }}>
              <p className="mb-0 p-2 text-center">With Only</p>
              <p className="mb-0 p-2 text-center">
                10 USDT to start <span role="img" aria-label="rocket">🚀</span>
              </p>
              <p className="mb-0 p-2 text-center">Auto Buy Low and sell high</p>
            </div>
            <div style={{ margin: "0 10px" }}>
              <img
                src={Animation}
                alt="Animation"
                style={{ width: "350px", height: "280px" }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="d-flex flex-row justify-content-center align-items-center">
            <div style={{ margin: "0 10px", textAlign: "center" }}>
              <p className="mb-0 p-2 text-center">With Only</p>
              <p className="mb-0 p-2 text-center">
                10 USDT to start <span role="img" aria-label="rocket">🚀</span>
              </p>
              <p className="mb-0 p-2 text-center">Auto Buy Low and sell high</p>
            </div>
            <div style={{ margin: "0 10px" }}>
              <img
                src={Animation}
                alt="Animation"
                style={{ width: "350px", height: "280px" }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="d-flex flex-row justify-content-center align-items-center">
            <div style={{ margin: "0 10px", textAlign: "center" }}>
              <p className="mb-0 p-2 text-center">With Only</p>
              <p className="mb-0 p-2 text-center">
                10 USDT to start <span role="img" aria-label="rocket">🚀</span>
              </p>
              <p className="mb-0 p-2 text-center">Auto Buy Low and sell high</p>
            </div>
            <div style={{ margin: "0 10px" }}>
              <img
                src={Animation}
                alt="Animation"
                style={{ width: "350px", height: "280px" }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="d-flex flex-row justify-content-center align-items-center">
            <div style={{ margin: "0 10px", textAlign: "center" }}>
              <p className="mb-0 p-2 text-center">With Only</p>
              <p className="mb-0 p-2 text-center">
                10 USDT to start <span role="img" aria-label="rocket">🚀</span>
              </p>
              <p className="mb-0 p-2 text-center">Auto Buy Low and sell high</p>
            </div>
            <div style={{ margin: "0 10px" }}>
              <img
                src={Animation}
                alt="Animation"
                style={{ width: "350px", height: "280px" }}
              />
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Navigation Buttons */}
        <div
          className="swiper-navigation"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <ul class="nav justify-content-center">
  <li class="nav-item " onClick={()=>HandleFirstTab(0)}>
    <a class="nav-link active" aria-current="page" >active</a>
  </li>
  <li class="nav-item" onClick={()=>HandleSecondTab(1)}>
    <a class="nav-link" >Link</a>
  </li>
  <li class="nav-item" onClick={()=>HandleThirdTab(2)}>
    <a class="nav-link" >Link</a>
  </li>
  <li class="nav-item" onClick={()=>HandleFourTab(3)}>
    <a class="nav-link " >Disabled</a>
  </li>
</ul>

        </div>
      </div>


    



   
      

   






    
    </>
    )
}
export default Section