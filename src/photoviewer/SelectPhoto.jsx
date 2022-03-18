import React from "react";

    export function SelectPhoto({ photoUrls, setCurrentPhoto1, currentPhoto1, setCurrentPhoto2, currentPhoto2 }) {
        return <div className="photo-selector">
            {photoUrls.map((url, index) => (
                <div className={`photo-selector__thumbnail ${currentPhoto1 === url ? "selected" : ""}`} key={index} >
                    <img
                        src={url}
                        alt="Thumbnail"
                        onClick={function() {
                            setCurrentPhoto1(url);
                        }} 
                    />
                </div>
            ))}
        </div>
    }