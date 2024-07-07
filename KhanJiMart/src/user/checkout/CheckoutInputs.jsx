import React from "react";
import PaymentCheckoutBillingRightSide from "./PaymentCheckoutBillingRightSide";

const CartInputs = () => {
  return (
    <div className="mt-8 xl:max-w-[37%] lg:max-w-[37%]  md:max-w-[37%] sm:w-full ">
      <h1 className="text-[1.500rem] font-normal">Billing Details</h1>

      <div className="mt-4">
        <form action="" className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              className="bg-[var(--mainSecondaryLightWhite)] p-2 mt-3 outline-none appearance-none text-[var(--mainTextBlack)]"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="firstname">Company Name</label>
            <input
              type="text"
              className="bg-[var(--mainSecondaryLightWhite)] p-2 mt-3 outline-none appearance-none text-[var(--mainTextBlack)]"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="firstname">Street Address</label>
            <input
              type="text"
              className="bg-[var(--mainSecondaryLightWhite)] p-2 mt-3 outline-none appearance-none text-[var(--mainTextBlack)]"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="firstname">Apartment, floor, etc. (optional)</label>
            <input
              type="text"
              className="bg-[var(--mainSecondaryLightWhite)] p-2 mt-3 outline-none appearance-none text-[var(--mainTextBlack)]"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="firstname">Town/City*</label>
            <input
              type="text"
              className="bg-[var(--mainSecondaryLightWhite)] p-2 mt-3 outline-none appearance-none text-[var(--mainTextBlack)]"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="firstname">Phone Number*</label>
            <input
              type="text"
              className="bg-[var(--mainSecondaryLightWhite)] p-2 mt-3 outline-none appearance-none text-[var(--mainTextBlack)]"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="firstname">Email Address*</label>
            <input
              type="text"
              className="bg-[var(--mainSecondaryLightWhite)] p-2 mt-3 outline-none appearance-none text-[var(--mainTextBlack)]"
            />
          </div>
          <div className="flex gap-4">
            {/* <input className="w-[17px] h-[17px] bg-[var(--mainSecondaryRedish)]  border-gray-300 rounded" type="checkbox" name="" id="" /> */}
              <input type="checkbox" class="custom-checkbox" id="customCheckbox" />
            <p className=" text-[var(--mainTextBlack)]">Save this information for faster check-out next time</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CartInputs;
