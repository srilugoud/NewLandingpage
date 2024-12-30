import React from "react";
import "./roadmapp.css";
import { FcRightDown2 } from "react-icons/fc";

const Roadmap = ({isDarkMode}) => {
  const roadmapSteps = [
    { id: 1, title: "Step 1: Idea Generation", description: "With My Creative Innovative thoughts." },
    { id: 2, title: "Step 2: Planning", description: "Created a clear plan and perfect visualization." },
    { id: 3, title: "Step 3: Development", description: "Start building the project step by step." },
    { id: 4, title: "Step 4: Testing", description: "Testing functionality  and User Interface ." },
    { id: 5, title: "Step 5: Launch", description: "Deployed the project have to push in live." },
  ];

  return (
    <>
     <div className={`${isDarkMode ? "dark-mode" : "light-mode"}`}>
    <div className="roadmap-container ">
  <h2 className="roadmap-title">Roadmap</h2>
  <div className="roadmap-step">
    <div className="step-marker moon">🌙</div>
    <div className="connector"></div>
    <div className="step-content">
      <h3>Step 1</h3>
      <p>My Aim to enhance user experience by focusing on simplicity and powerful features. my goal is to create a platform that empowers users to achieve their ambitions seamlessly.</p>
    </div>
  </div>
  <div className="roadmap-step">
    <div className="step-marker star">⭐</div>
    <div className="connector"></div>
    <div className="step-content">
      <h3>Step 2</h3>
      <p>I’ve successfully launched the platform and optimized it for mobile use. I’ve also implemented user-driven improvements to enhance usability and efficiency</p>
    </div>
  </div>
  <div className="roadmap-step">
    <div className="step-marker moon">🌙</div>
    <div className="connector"></div>
    <div className="step-content">
      <h3>Step 3</h3>
      <p>I have upgraded the color themes for a more vibrant and user-friendly experience. Dropdowns and interactions are now smoother for enhanced usability and aesthetics</p>
    </div>
  </div>
  <div className="roadmap-step">
    <div className="step-marker star">⭐</div>
    <div className="connector"></div>
    <div className="step-content">
      <h3>Step 4</h3>
      <p>Enhanced the design with adaptive font sizes, vibrant backgrounds, and React icons, while adding smooth transitions for a polished, interactive user experience.</p>
    </div>
  </div>
  <div className="roadmap-step">
    <div className="step-marker moon">🌙</div>
    <div className="connector"></div>
    <div className="step-content">
      <h3>Step 5</h3>
   <p>Implemented responsive layouts, introduced intuitive UI adjustments, and enhanced accessibility features to ensure a seamless experience across all devices.</p>
    </div>
  </div>
  <div className="roadmap-step">
  <div className="step-marker star">⭐</div>
    <div className="connector"></div>
    <div className="step-content">
      <h3>Step 6</h3>
      <p>My final step is to ensure a seamless, personalized experience that evolves with your needs, making every interaction intuitive and impactful.</p>
    </div>
  </div>
</div>
</div> 





    </>
  );
};

export default Roadmap;
