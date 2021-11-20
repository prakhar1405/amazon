import React from 'react';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';


function Checkout() {
    const [{basket}, dispatch] = useStateValue();
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

                {basket.map(item => (
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                ))}
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
