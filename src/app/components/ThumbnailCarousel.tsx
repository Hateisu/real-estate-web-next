
"use client";
import React, { FC, useState } from 'react';
import './ThumbnailCarousel.css';

interface Propps{
    images: string[]
}

const ThumbnailCarousel: FC<Propps> = ({ images }) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const handleThumbnailClick = (index:number) => {
        setActiveIndex(index);
    };
    /*
    So we have an carousel to make it work we need to have an background image and current thumbnails
    Alse we are using Bootstrap to make it look better
     */
    const style_thumbnail = {
        height: "6vmax",
        //border: "2px solid white"
    }
    const thumbs = [activeIndex]
   
    const background_style = {
        height: "30vmax"
    }
    return (
        <div className='container-fluid h-100 w-100 d-flex flex-column position-relative' >
            {/* Here will be an background */}
            <div>
                <img className='img-fluid object-fit-cover  rounded-4 ' style={background_style} src={images[activeIndex]} />
            </div>
            <div id="on_top" className='position-absolute container h-100 w-100'>
                <div className='row align-items-end flex-fill flex h-100 w-100'>
                    <div className='flex-row d-flex'>
                        {images.map((images, index) => (
                            <div onClick={() => handleThumbnailClick(index)} key={index} className='pad_courusel'>
                                <div key={index}>
                                    <img key={index} className="border-3 border rounded-4 border-white image-fluid" src={images} style={style_thumbnail} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ThumbnailCarousel;
