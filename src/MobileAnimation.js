import "./mobileanimation.css";
import { FaArrowRight, FaRobot } from "react-icons/fa6";
import Animation from "./assets/animation1.png";
import Animationn from "./assets/newanimation.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import Animations from "./assets/animation3.png"
import "swiper/css";
import "swiper/css/navigation";
import Animation4 from "./assets/AnimationVideo.mp4"

function MobileSection({isDarkMode}) {
  const [activeTab, setActiveTab] = useState(0);
  const swiperRef = useRef(null);

  const handleTabClick = (value) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(value);
      setActiveTab(value);
    }
  };

  return (
    <>
      <div style={{  padding: "10px" }} className={`mobile-section d-lg-none ${isDarkMode ? "dark-mode" : "light-mode"}`}>
        <div className="container d-flex flex-wrap align-items-center justify-content-evenly">
          <div className="d-flex flex-wrap align-items-center gap-2 justify-content-center">
            <div className="d-flex flex-wrap m-new">
              <p className="newest">New</p>
              <p className="date_ing">12/12/24</p>
            </div>
            <div>
              <p style={{ color: "white" }}>Pionex Has Listed NUM</p>
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <p className="mb-0 bots text-justify m-grid">Pionex Futures Grid Bots</p>
          <p className="mb-0 future text-justify m-futures" style={{ color: "white" }}>
            The Global Leading Platform in Futures
          </p>
          <p className="mb-0 trading text-justify" style={{ color: "white" }}>
            Grid Trading{" "}
            <span style={{ color: "#FF42F9", fontSize: "15px" }} className="m-learn d-none">
              Learn More <FaArrowRight />
            </span>
          </p>
        </div>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          centeredSlides={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="swiper-container d-flex justify-content-evenly align-items-center mt-6 custom-swiper"
        >
          <SwiperSlide className="d-flex flex-column justify-content-center align-items-center gap-0 m-swiper-mobile-view">
            <div style={{ textAlign: "center" }} className="m-animation">
              <div style={{ position: "relative", top: "6%" }}>
                <p className="mb-0 px-3 text-justify only mm-one" style={{fontSize:"25px"}}>With Only</p>
                <p className="mb-0 px-3 text-justify only mm-one" style={{fontSize:"25px"}}>
                  10 USDT to start <span role="img" aria-label="rocket">🚀</span>
                </p>
                <p className="mb-0 px-3 text-justify buy mm-one" style={{fontSize:"15px"}}>Auto Buy Low and sell high</p>
              </div>
            </div>
            <div className="text-center p-4" style={{ backgroundColor: "#111113" }}>
              <img src={Animation} alt="Animation" className="animation-styling-2" style={{height:"300px"}} />
            </div>
          </SwiperSlide>
          <SwiperSlide className="d-flex flex-column justify-content-center align-items-center">
            <div style={{ textAlign: "center" }} className="m-animation-22">
              <div style={{ position: "relative", top: "25%" }}>
                <p className="mb-0 px-3 text-justify mm-one" style={{fontSize:"15px",fontWeight:"bold",color:"black"}}>Lower The Liquidation  Price</p>
            
                <p className="mb-0 px-3 text-justify mm-one" style={{fontSize:"20px",fontWeight:"bold",color:"black"}}>
                Automatically <FaRobot size={35} />
                </p>
              </div>
            </div>
            <div className="text-center p-4" style={{ backgroundColor: "#131215" }}>
              <img src={Animationn} alt="Animation" className="animation-styling-2" style={{height:"300px"}} />
            </div>
          </SwiperSlide>
          <SwiperSlide className="d-flex flex-column justify-content-center align-items-center">
          <div style={{  textAlign: "center" }} className="m-animationsss ">
              <div style={{position:"relative",top:"25%"}}>
              <p className="mb-0  px-3 text-justify mm-one" style={{fontSize:"22px",color:"white",fontWeight:"bold"}}>Supports a wide   Range oF futures Grid  <span>🆙</span></p>
             
            
              </div>
            </div>
            <div  className=" text-center p-4">
              <img
                src={Animations}
                alt="Animation"
                className="animation-styling-2"
                style={{height:"340px"}}
               
              />
              </div>
          </SwiperSlide>
           <SwiperSlide className="d-flex flex-column justify-content-center align-items-center   ">
                    <div style={{  textAlign: "center" }} className="m-animation">
                        <div style={{position:"relative",top:"15%"}}>
                       
                        <p className="mb-0  px-3 text-justify mm-one" style={{fontSize:"25px",color:"black",fontWeight:"bold"}}>
                     Copy Bot With 1  Click  <span>⚡️</span>
                          
                        </p>
                        
                        </div>
                      </div>
                      <div  className=" text-center p-4">
                      <video
            controls
            autoPlay
            loop
            muted
           className="animation-styling-2"
          >
            <source src={Animation4} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
                      </div>
                    </SwiperSlide>
        </Swiper>

        <div>
          <div className="text-center">
      
    {activeTab === 0 && <div style={{color:"orange"}}>Only 10 USDT Content</div>}
    {activeTab === 1 && <div style={{color:"orange"}}>Lower the liquidation price automatically</div>}
    {activeTab === 2 && <div style={{color:"orange"}}>Supports a wide range of futures Grid</div>}
    {activeTab === 3 && <div style={{color:"orange"}}>Copy with one look</div>}
 
  </div>
  <ul
    className="nav justify-content-center"
    style={{
      display: "flex",
      justifyContent: "center",
      flexDirection: "row",
      listStyleType: "none",
      flexWrap: "wrap",
      margin: 0,
    }}
  >
    <li>
      <a
        className={`nav-item nav-link${activeTab === 0 ? " " : ""}`}
        onClick={() => handleTabClick(0)}
        style={{
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <span style={{color:"white",}}
          
        >
          
          ____
        </span>
      </a>
    </li>
    <li>
      <a
        className={`nav-item nav-link${activeTab === 1 ? " " : ""}`}
        onClick={() => handleTabClick(1)}
        style={{
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <span
          style={{color:"white",}}
        >
          ____
        </span>
      </a>
    </li>
    <li>
      <a
        className={`nav-item nav-link${activeTab === 2 ? " " : ""}`}
        onClick={() => handleTabClick(2)}
        style={{
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <span
          style={{color:"white",}}
        >
          ____
        </span>
      </a>
    </li>
    <li>
      <a
        className={`nav-item nav-link${activeTab === 3 ? " " : ""}`}
        onClick={() => handleTabClick(3)}
        style={{
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <span
          style={{color:"white",}}
        >
          ____
        </span>
      </a>
    </li>
  </ul>

 
 
</div>

      </div>
    </>
  );
}

export default MobileSection;
