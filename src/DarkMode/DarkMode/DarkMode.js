import React, { useState } from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";

const DarkMode = ({isDarkMode, toggleTheme}) => {
    

   
    return (
       
    
            <div className={`dark_mode d-none d-lg-block  ${isDarkMode ? "dark-mode" : "light-mode"}`}>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                 {isDarkMode ? <Moon /> : <Sun />} 
            
            </label>
        </div>
    );
};

export default DarkMode;
