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

    const texts = [
        {
            title: "MAKAN MATE",
            subtitle: "Work From Home Promotion Menu 2023",
            desc: "Korean, Japanese, Local Bento Cuisine Choices",
            btn: "Order Now",
        },
        {
            title: "",
            subtitle: "Work From Home Promotion Menu 2023",
            desc: "Korean, Japanese, Local Bento Cuisine Choices",
            btn: "Order Now",
        }
    ]

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
            // call fade in animation on each interval for each image



        }, 3000);
        return () => clearInterval(interval);
    }, [index]);



    return (
        <div className="homesliderout">
            <div className="homeslider">
                <button onClick={handlePrevClick} className='leftbtn'>{"<"}</button>
                <img 
                   key={index}
                   src={images[index]}
                   alt="carousel-image"
                   className={index === 0 ? "zoominandfade" : "zoominandfade"}
                />
                <div className="blur"></div>
                <div className={
                    index === 0 ? "slidertext" : "slidertext"
                }>
                    <h1>{
                        texts[index].title
                    }</h1>
                    <h2>
                        {texts[index].subtitle}
                    </h2>
                    <h3>{
                        texts[index].desc
                    }</h3>
                    <h4>Order Now</h4>
                </div>
                <button onClick={handleNextClick} className="rightbtn">{">"}</button>
            </div>
        </div>
    );
};

export default HomeSlider;