import React from 'react';
import "./Checkout.css";
import Subtotal from './Subtotal';


function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img 
                className="checkout_ad"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Jupiter21/Bank/Phase-3/Bank_PC__1500x90_1.jpg"
                alt=""
                />
            
            <div>
                <h2 className="checkout_title">Your Shopping Basket</h2>
            </div>
            </div>
            <div className='checkout_right'>
                <Subtotal/>
{/*                 
                <h2>Subtotal</h2> */}
            </div>
        </div>
    )
}

export default Checkout
