import { Button } from "@mui/material";
import React from "react";

const CartBottom = () => {
  return (
    <div className="mt-10 w-[81%] mx-auto">
      <div className="flex items-center justify-between p-1">
        <Button
          sx={{
            alignItems: "center",
            color: "var(--mainTextBlack)",
            font: "1.200rem",
            border: "1px solid var(--mainTextGrey)",
            width: "200px",
            padding: "10px",
            "&:hover": {
              backgroundColor: "var(--mainSecondaryRedish)",
              color: "white",
            },
            display: { xs: "none", sm: "flex" },
          }}
        >
          Move All To Bag
        </Button>
        <Button
          sx={{
            alignItems: "center",
            color: "var(--mainTextBlack)",
            font: "1.200rem",
            border: "1px solid var(--mainTextGrey)",
            width: "200px",
            padding: "10px",
            "&:hover": {
              backgroundColor: "var(--mainSecondaryRedish)",
              color: "white",
            },
            display: { xs: "none", sm: "flex" },
          }}
        >
          Return To Shop
        </Button>
      </div>

      {/* Coupon Code Cart Total */}

      <div className="flex flex-col md:flex-row justify-between mt-10">
        <div className="sm:flex-row w-full justify-between xl:w-[45%] lg:w-[45%] md:w-[45%] items-center">
        <div className="flex justify-between max-w-[90%]">
        <input
            className="md:min-w-[270px] sm:w-[auto] md:w-[150px] lg:w-[200px] pl-4 rounded outline-none"
            style={{ border: "1px solid var(--mainTextGrey)" }}
            type="text"
            placeholder="Coupon Code"
          />
          <Button
            sx={{
              alignItems: "center",
              color: "var(--mainPrimaryColorWhite)",
              fontSize: { xs: "10px", sm: "12px", md: "14px", lg: "16px" },
              border: "1px solid var(--mainTextGrey)",
              padding: { xs: "5px", sm: "10px", md: "10px", lg: "12px" },
              width: { xs: "100%", sm: "auto" },
              background: "var(--mainSecondaryRedish)",
              "&:hover": {
                backgroundColor: "var(--mainSecondaryLightWhite)",
                color: "var(--mainTextBlack)",
              },
            }}
          >
            Apply Coupon
          </Button>
        </div>
        </div>

        <div className="border w-full xl:w-[40%] lg:w-[40%] md:w-[40%] p-6 rounded border-black xl:mt-0 lg:mt-0 md:mt-0 mt-10">
          <h2 className="text-[1.200rem] font-semibold">Cart Total</h2>
          <div className="flex justify-between mt-4 border-b-2 pb-2">
            <h4>Subtotal:</h4>
            <em className=" font-medium text-[0.800rem]">$1750</em>
          </div>
          <div className="flex justify-between mt-4 border-b-2 pb-2">
            <h4>Shipping:</h4>
            <em className=" font-medium text-[0.800rem]">Free</em>
          </div>
          <div className="flex justify-between mt-4 border-b-2 pb-2">
            <h4>Total:</h4>
            <em className=" font-medium text-[0.800rem]">$1750</em>
          </div>
          <div className="w-full flex justify-center mx-auto mt-8">
            <Button
              sx={{
                alignItems: "center",
                color: "var(--mainPrimaryColorWhite)",
                font: "1.200rem",
                border: "1px solid var(--mainTextGrey)",
                width: "270px",
                backgroundColor: "var(--mainSecondaryRedish)",
                padding: "15px",
                "&:hover": {
                  backgroundColor: "var(--mainSecondaryLightWhite)",
                  color: "var(--mainTextBlack)",
                },
              }}
            >
              Procees to checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartBottom;
