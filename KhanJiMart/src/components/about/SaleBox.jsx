import React from "react";
import ShopingBag from "../../assets/images/Icon-Shopping bag.png";
import MoneyBag from "../../assets/images/Icon-Moneybag.png";
// import Sale from "../../assets/images/Icon-Sale.png";
import Shop from "../../assets/images/icon_shop.png";

const SalesCont = [
  {
    id: 1,
    img: Shop,
    text: "10.5k",
    head: "Sellers active on our site",
  },
  {
    id: 1,
    img: MoneyBag,
    text: "10.5k",
    head: "Sellers active on our site",
  },
  {
    id: 1,
    img: ShopingBag,
    text: "10.5k",
    head: "Sellers active on our site",
  },
  {
    id: 1,
    img: MoneyBag,
    text: "10.5k",
    head: "Sellers active on our site",
  },
];

const SaleBox = () => {
  return (
    <div className="mt-10 flex justify-center gap-20 items-center p-6 flex-wrap">
    {SalesCont.map((item) => (
      <div
        key={item.id}
        className="border-2 rounded shadow-lg w-[250px] h-[200px] flex flex-col justify-center items-center group hover:bg-[var(--mainSecondaryRedish)] transition duration-300 ease-in-out"
      >
        <div className="bg-slate-400 rounded-full p-3 group-hover:bg-[var(--mainHoverButton)] transition duration-300 ease-in-out">
          <img
            src={item.img}
            alt="icon"
            className="w-[70px] h-[70px] bg-black rounded-full p-3 transition duration-300 ease-in-out"
          />
        </div>
        <h2 className="mt-2 text-lg font-bold group-hover:text-[var(--mainPrimaryColorWhite)] transition duration-300 ease-in-out">
          {item.text}
        </h2>
        <h3 className="mt-1 text-center group-hover:text-[var(--mainPrimaryColorWhite)] transition duration-300 ease-in-out">
          {item.head}
        </h3>
      </div>
    ))}
  </div>
  );
};

export default SaleBox;
