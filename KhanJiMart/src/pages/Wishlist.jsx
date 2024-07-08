import React from 'react'
import CheckOutLink from '../user/checkout/CheckOutLink';
import CartInputs from '../user/checkout/CheckoutInputs';
import PaymentCheckoutBillingRightSide from '../user/checkout/PaymentCheckoutBillingRightSide';

const Checkout = () => {
  return (
    <div className='w-[81%] mx-auto' >
       <CheckOutLink/>
       <div className='xl:flex lg:flex md:flex sm:flex-wrap' >
        <CartInputs/>
        <div className='mx-auto xl:w-[39%] lg:w-[39%] md:w-[39%] sm:w-full justify-end'>
            <PaymentCheckoutBillingRightSide/>
        </div>
       </div>
    </div>
  )
}

export default Checkout;