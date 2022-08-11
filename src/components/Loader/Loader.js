import React from 'react';

import './Loader.css';
import LoadImage from '../../assets/images/logo192.png';

const Loader = () => {
    return (
        <>
            <div className="app__background"></div>
            <div className='app__loader'>
                <img src={LoadImage} alt='Spinner' />
                <span>Loading <span className='app__loader-symbol'>...</span></span>
            </div>
        </>
    );
};

export default Loader;