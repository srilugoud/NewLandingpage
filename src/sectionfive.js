import "./sectionthree.css"
import Slider1 from "./assets/sliderimage1.png"
import Slider2 from "./assets/sliderimage3.png"
import Slider3 from "./assets/sliderimage4.png"
import Slider4 from "./assets/sliderimage5.png"
import Slider5 from "./assets/sliderimage6.png"
import Slider6 from "./assets/sliderimage7.png"
import Slider7 from "./assets/sliderimage8.png"
import Secondslider1 from "./assets/secondslider1.png"
import Secondslider2 from "./assets/secondslider2.png"
import Secondslider3 from "./assets/secondslider3.png"
import Secondslider4 from "./assets/secondslider4.png"
import Secondslider5 from "./assets/secondslider5.png"
import SectionImage from "./assets/sectionimage.png"
import SectionVideo from "./assets/sectionvideo.mp4"
function SectionFive({isDarkMode}){
    return(
        <>
        <div className={`sectionFive ${isDarkMode ? "dark-mode" : "light-mode"}`}>
<div className="sub-1 ">
    <p  style={{fontSize:"35px",fontWeight:"bold",marginTop:"50px"}}> <span className="win ">Win-Win</span>With Users</p>
    <p style={{fontSize:"25px"}} className="mb-0">Pionex's Pursuit</p>
</div>
{/* <div className="d-flex flex-column gap-0 align-items: center;">
<div className="slider">
    <div className="slide-track" style={{marginTop:"10px"}}>
        <div className="slide">
            <img src={Slider1} style={{width:"300px",height:"200px"}} />

        </div>
        <div className="slide">
            <img src={Slider2} style={{width:"300px",height:"200px"}}/>

        </div>
        <div className="slide">
            <img src={Slider3}style={{width:"300px",height:"200px"}} />

        </div>
        <div className="slide">
            <img src={Slider4} style={{width:"300px",height:"200px"}} />

        </div>
        <div className="slide">
            <img src={Slider5} style={{width:"300px",height:"200px"}} />

        </div>
        <div className="slide">
            <img src={Slider6} style={{width:"300px",height:"200px"}}/>

        </div>
        <div className="slide">
            <img src={Slider7} style={{width:"300px",height:"200px"}}/>

        </div>
        <div className="slide">
            <img src={Slider1} style={{width:"300px",height:"200px"}} />

        </div>
        <div className="slide">
            <img src={Slider2} style={{width:"300px",height:"200px"}}/>

        </div>
        <div className="slide">
            <img src={Slider3} style={{width:"300px",height:"200px"}}/>

        </div>
        <div className="slide">
            <img src={Slider4} style={{width:"300px",height:"200px"}}/>

        </div>
        <div className="slide">
            <img src={Slider6}style={{width:"300px",height:"200px"}} />

        </div>
        <div className="slide">
            <img src={Slider7}style={{width:"300px",height:"200px"}} />

        </div>
        

    </div>

</div>
<div className="slider mb-4 ">
    <div className="slide-track" >
        <div className="slide">
            <img src={Secondslider1} style={{width:"300px",height:"200px"}}/>

        </div>
        <div className="slide">
            <img src={Secondslider2} style={{width:"300px",height:"200px"}} />

        </div>
        <div className="slide">
            <img src={Secondslider3} style={{width:"300px",height:"200px"}}/>

        </div>
        <div className="slide">
            <img src={Secondslider4} style={{width:"300px",height:"200px"}} />

        </div>
        <div className="slide">
            <img src={Secondslider5} style={{width:"300px",height:"200px"}}/>

        </div>
        <div className="slide">
            <img src={Slider6} style={{width:"300px",height:"200px"}}/>

        </div>
        <div className="slide">
            <img src={Slider7} style={{width:"300px",height:"200px"}}/>

        </div>
        <div className="slide">
            <img src={Secondslider1} style={{width:"300px",height:"200px"}}/>

        </div>
        <div className="slide">
            <img src={Secondslider2} style={{width:"300px",height:"200px"}}/>

        </div>
        <div className="slide">
            <img src={Secondslider3} style={{width:"300px",height:"200px"}}/>

        </div>
        <div className="slide">
            <img src={Secondslider4}  style={{width:"300px",height:"200px"}}/>

        </div>
        <div className="slide">
            <img src={Secondslider5} style={{width:"300px",height:"200px"}} />

        </div>
        <div className="slide">
            <img src={Slider6} style={{width:"300px",height:"200px"}}/>

        </div>
        

    </div>

</div>
</div> */}
<div>
 <video
            // controls
            autoPlay
            loop
            muted
           className="animation-styling-2"
           
          >
            <source src={SectionVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
</div>

        </div>
        </>
    )
}
export default  SectionFive