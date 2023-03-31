import React from 'react';
import { useParams } from 'react-router-dom';
import { BsBagCheckFill, BsBagXFill } from 'react-icons/bs';

import './Checkout.css';

const Checkout = () => {
    const params = useParams();

    return (
        <div className='app__checkout'>
            <div className="app__checkout-card">
                <div className={`app__checkout-icon ${params.success === 'true' ? 'success' : 'error'}`}>
                    {params.success === 'true' ? 
                        <BsBagCheckFill />
                        :
                        <BsBagXFill />
                    }
                </div>
                {params.success === 'true' ?
                    <>
                        <span className='app__checkout-message'>Order placed</span>
                        <p>You will receive an email confirmation</p>
                    </>
                    :
                    <>
                        <span className='app__checkout-message'>Order Cancelled</span>
                        <p>Continue to shop around and checkout when you are ready</p>
                    </>
                }
            </div>
        </div>
    );
};

export default Checkout;