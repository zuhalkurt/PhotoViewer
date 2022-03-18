import React from "react";

export function SelectSecondPhoto({ photoUrls, setCurrentPhoto2, currentPhoto2 }) {
    return <div className="photo-selector">
        {photoUrls.map((url, index) => (
            <div className={`photo-selector__thumbnail ${currentPhoto2 === url ? "selected" : ""}`} key={index} >
                <img
                    src={url}
                    alt="Thumbnail"
                    onClick={function() {
                        setCurrentPhoto2(url);
                    }} 
                />
            </div> 
        ))}
    </div>
}