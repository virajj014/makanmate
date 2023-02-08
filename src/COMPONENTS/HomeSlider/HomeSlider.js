import React, { useEffect, useState } from "react";
import img1 from "./slide-1.jpg";
import img2 from "./slide-2.jpg";
import img3 from "./3.png";

import "./HomeSlider.css";
const HomeSlider = () => {
    const [index, setIndex] = useState(0);

    const images = [
        img1,
        img2,
    ];

    const handlePrevClick = () => {
        setIndex(index === 0 ? images.length - 1 : index - 1);
    };

    const handleNextClick = () => {
        setIndex(index === images.length - 1 ? 0 : index + 1);
    };

    //autoslide

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(index === images.length - 1 ? 0 : index + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, [index]);

    return (
        <div className="homesliderout">
            <div className="homeslider">
                <button onClick={handlePrevClick} className='leftbtn'>{"<"}</button>
                <img src={images[index]} alt="carousel-image" />
                <button onClick={handleNextClick} className="rightbtn">{">"}</button>
            </div>
        </div>
    );
};

export default HomeSlider;