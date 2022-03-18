import React, {useState} from "react";
import "./photoviewer.css"
import { DisplayPhoto } from "./DisplayPhoto";
import { imageUrls } from "../imageUrls";
import { SelectPhoto } from "./SelectPhoto";
import {SelectSecondPhoto} from "./SelectSecondPhoto";

export function PhotoViewer() {
    const [currentPhoto1, setCurrentPhoto1] = useState(imageUrls[0]);
    const [currentPhoto2, setCurrentPhoto2] = useState(imageUrls[5]);

    return <div>
        <DisplayPhoto currentPhoto1={currentPhoto1} currentPhoto2={currentPhoto2}/>
        <SelectPhoto
            photoUrls={imageUrls}
            currentPhoto1={currentPhoto1}
            setCurrentPhoto1={setCurrentPhoto1}
        />
        <SelectSecondPhoto
            photoUrls={imageUrls}
            currentPhoto2={currentPhoto2}
            setCurrentPhoto2={setCurrentPhoto2}
        />
    </div>
}

