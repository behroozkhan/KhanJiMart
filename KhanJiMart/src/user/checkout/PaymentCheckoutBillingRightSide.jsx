import React from "react";
import ConsoleRed from "../../assets/images/consoleRed.png";
import LcdMonitor from "../../assets/images/LcdMonitor.png";
import BankImages from "../../assets/images/BankImages.png";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const PaymentCheckoutBillingRightSide = () => {
  return (
    <div className="flex  flex-col mt-20 p-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img src={ConsoleRed} alt="" width={50} />
          <h4>Console Red Ps5</h4>
        </div>
        <em>1650</em>
      </div>

      <div className="flex justify-between items-center mt-6">
        <div className="flex items-center gap-4">
          <img src={LcdMonitor} alt="" width={50} />
          <h4>Console Red Ps5</h4>
        </div>
        <em>1650</em>
      </div>

      <div className="flex justify-between mt-8 border-b-2 pb-2 border-gray-300">
        <h3>Subtotal:</h3>
        <em>1750</em>
      </div>

      <div className="flex justify-between mt-4 border-b-2 pb-2 border-gray-300">
        <h3>Shipping</h3>
        <em>Free</em>
      </div>

      <div className="flex justify-between mt-4">
        <h3>Total:</h3>
        <em>1750</em>
      </div>

      <div className="flex justify-between mt-4 ">
        <div className="flex gap-4">
          <input type="checkbox" name="" id="" />
          <h3>Bank</h3>
        </div>
        <img src={BankImages} alt="" />
      </div>

      <div className="flex gap-4 mt-4">
        <input type="checkbox" name="" id="" />
        <h3>Bank</h3>
      </div>

      <div className="mt-6 flex  justify-between">
        <input
          className="md:min-w-[230px] md:min-h-[35px]  md:w-[150px] lg:w-[200px] sm:w-[auto]  pl-4 p-1   rounded outline-none"
          style={{ border: "1px solid var(--mainTextGrey)" }}
          type="text"
          placeholder="Coupon Code"
        />
        {/* <Button
          sx={{
            alignItems: "center",
            color: "var(--mainPrimaryColorWhite)",
            padding: "10px 20px",
            padding: {sm: "0px 0px"},
            border: "1px solid var(--mainTextGrey)",
            background: "var(--mainSecondaryRedish)",
            "&:hover": {
              backgroundColor: "var(--mainSecondaryLightWhite)",
              color: "var(--mainTextBlack)",
            },
          }}
        >
          Apply Coupon
        </Button> */}
        <button className="bg-[var(--mainSecondaryRedish)] text-[12px] md:w-[150px] rounded text-[var(--mainPrimaryColorWhite)] sm:w-full text-center  sm:p-1 p-2 font-normal hover:bg-[var(--mainSecondaryLightWhite)] border hover:text-[var(--mainTextBlack)]">
          Apply Coupon
        </button>
      </div>

      <Button
        sx={{
          marginTop: "20px",
          width: "200px",
          alignItems: "center",
          color: "var(--mainPrimaryColorWhite)",
          padding: "10px 20px",
          border: "1px solid var(--mainTextGrey)",
          background: "var(--mainSecondaryRedish)",
          "&:hover": {
            backgroundColor: "var(--mainSecondaryLightWhite)",
            color: "var(--mainTextBlack)",
          },
        }}
      >
        <Link>Place Order</Link>
      </Button>
    </div>
  );
};

export default PaymentCheckoutBillingRightSide;
