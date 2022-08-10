import React, { useState } from 'react';

import './ImageSlider.css';

const ImageSlider = ({ images, title }) => {
    const [activeImage, setActiveImage] = useState(0);

    const handleImageChange = (imageId) => {
        setActiveImage(imageId);
    }

    return (
        <div className='app__image-slider'>
            <img src={images[activeImage]} alt={title} />
            <div className="app__image-slider-images">
                {images.map((image, idx) => {
                    return (
                        <img src={image} alt={title} key={idx} className={idx === activeImage ? 'active' : ''} onClick={() => handleImageChange(idx)} />
                    );
                })}
            </div>
        </div>
    );
};

export default ImageSlider;