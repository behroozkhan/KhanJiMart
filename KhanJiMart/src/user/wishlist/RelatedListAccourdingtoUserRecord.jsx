import { Button } from "@mui/material";
import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import {
  WishlistUserSelectedItems,
  UserByingRealtedProducts,
} from "../../Product/product";

const OldWishlist = () => {
  return (
    <div className="mt-10">
      <div className="flex items-center w-[81%] mx-auto justify-between p-1">
     <div className="flex gap-4">
     <span className="flex text-[var(--mainSecondaryRedish)] bg-red-500 border border-red-500 rounded text-[1rem] w-[20px] h-[35px]"></span>
        <h3 className="text-[var(--mainTextBlack)] text-[1.200rem] font-normal">
           Just For You
        </h3>
     </div>
        <Button
          sx={{
            color: "var(--mainTextBlack)",
            font: "1rem",
            border: "1px solid var(--mainTextGrey)",
            width: "100px",
            padding: "10px",
            "&:hover": {
              backgroundColor: "var(--mainSecondaryRedish)",
              color: "white",
            },
          }}
        >
          See All
        </Button>
      </div>

      <div className="flex w-[81%] mx-auto mt-10 ">
        <div className="flex justify-between gap-6 flex-wrap">
          {UserByingRealtedProducts.map((item) => (
            <div className="" key={item.id}>
              <div className="relative bg-[var(--mainSecondaryLightWhite)] w-[260px] h-[300px] flex flex-col items-center justify-center p-4">
                <div className="relative w-full">
                  <img
                    className="object-contain mx-auto"
                    src={item.img}
                    alt="console"
                  />
                </div>
                <div className=" absolute top-[260px] bg-[var(--mainTextBlack)] flex w-full">
                  <button className="     text-[var(--mainPrimaryColorWhite)] px-4 py-2 rounded w-full">
                    Add to Cart
                  </button>
                </div>

                <span className="text-center absolute bg-[var(--mainButtonGreenish)] top-[5%] right-[75%] w-[50px] text-[var(--mainPrimaryColorWhite)] rounded-md">
                  {item.offer}
                </span>
                <div className="absolute top-[4%] right-[5%] space-y-2 duration-300 ease-in-out">
                  <button className="flex items-center justify-center bg-[var(--mainPrimaryColorWhite)] rounded-full w-7 h-7 p-[6px]">
                    <AiOutlineEye className="text-xl" />
                  </button>
                  <button className="flex items-center justify-center bg-[var(--mainPrimaryColorWhite)] rounded-full w-7 h-7 p-[5px]">
                    <AiOutlineEye className="text-xl" />
                  </button>
                </div>
              </div>

              <div className="mt-4 ">
                <h3>{item.text}</h3>
                <em className="text-[var(--mainSecondaryRedish)] font-semibold">
                  Rs {item.priceActual}
                </em>
                <em className="text-[var(--mainTextGrey)] font-semibold ml-4 line-through">
                  Rs {item.priceOld}
                </em>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OldWishlist;
