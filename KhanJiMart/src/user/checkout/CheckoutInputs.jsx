import React from "react";
import PaymentCheckoutBillingRightSide from "./PaymentCheckoutBillingRightSide";

const CartInputs = () => {
  return (
    <div className="mt-8 max-w-[37%] ">
      <h1 className="text-[1.500rem] font-normal">Billing Details</h1>

      <div className="mt-4">
        <form action="" className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="firstname">First Name</label>
            <input type="text" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="firstname">Company Name</label>
            <input type="text" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="firstname">Street Address</label>
            <input type="text" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="firstname">Apartment, floor, etc. (optional)</label>
            <input type="text" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="firstname">Town/City*</label>
            <input type="text" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="firstname">Phone Number*</label>
            <input type="text" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="firstname">Email Address*</label>
            <input type="text" />
          </div>
          <div className="flex gap-4">
            <input type="checkbox" name="" id="" />
            <p>Save this information for faster check-out next time</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CartInputs;
