import React from 'react'
import CheckOutLink from './CheckOutLink'
import CartInputs from './CheckoutInputs';
import PaymentCheckoutBillingRightSide from './PaymentCheckoutBillingRightSide';

const Checkout = () => {
  return (
    <div className='w-[81%] mx-auto' >
       <CheckOutLink/>
       <div className='flex'>
        <CartInputs/>
        <div className='mx-auto w-[39%] justify-end'>
            <PaymentCheckoutBillingRightSide/>
        </div>
       </div>
    </div>
  )
}

export default Checkout;