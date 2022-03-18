import React from "react";
import "./DisplayPhoto.css";


export function DisplayPhoto({currentPhoto1}, {currentPhoto2}) {
    return <div className="photo-display">
        <img src={currentPhoto1} alt="Left"/>
        <img src={currentPhoto2} alt="Right"/>
    </div>
}