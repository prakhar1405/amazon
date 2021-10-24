import React from 'react'
import './Subtotal.js'
import CurrencyFormat from "react-currency-format";
import './Subtotal.css'
import { useStateValue } from './StateProvider.js';

function Subtotal() {
    const [{basket}] = useStateValue();
    const getBasketTotal = (basket) => {
        return basket?.reduce((amount, item) => (Number(item.price)) + amount, 0);
      };
    return (
        <div className='subtotal'> 
            <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{getBasketTotal(basket)}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />

      <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
