import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import { AiOutlineEye } from "react-icons/ai";
import GucchiBag from "../assets/images/Gucchibag.png";
import RgbLiquidCooler from "../assets/images/rgbliquidcooler.png";
import UsbGameConsole from "../assets/images/USBGameConsole.png";
import SatinJacket from "../assets/images/Quilted-Satin-Jacket.png";
import KeyboardRGB from "../assets/images/KeyboardRGB.png";
import LcdMonitor from "../assets/images/LcdMonitor.png";
import LaptopLenovo from "../assets/images/lenovoLaptop.png";
import consoleRed from "../assets/images/consoleRed.png";

import { BsCart3 } from "react-icons/bs";
import DeleteVectorIcon from "../assets/images/DeleteVectorIcon.svg";
import { v4 as uuidv4 } from 'uuid';

export  const WishlistUserSelectedItems = [
  {
    recentItems: [
      {
        id: uuidv4(),
        img: GucchiBag,
        text: "Gucci duffle bag",
        link: "Add To Cart",
        iconDelete: DeleteVectorIcon,
        offer: "-35%",
        priceActual: 960,
        priceOld: 1160,
      },
      {
        id: uuidv4(),
        img: RgbLiquidCooler,
        text: "RGB liquid CPU Cooler",
        link: "Add To Cart",
        iconDelete: DeleteVectorIcon,
        offer: null,
        priceActual: 960,
        priceOld: 1160,
      },
      {
        id: uuidv4(),
        img: UsbGameConsole,
        text: "GP11 Shooter USB Gamepad",
        link: "Add To Cart",
        iconDelete: DeleteVectorIcon,
        offer: null,
        priceActual: 960,
        priceOld: 1160,
      },
      {
        id: uuidv4(),
        img: SatinJacket,
        text: "Quilted Satin Jacket",
        link: "Add To Cart",
        iconDelete: DeleteVectorIcon,
        offer: null,
        priceActual: 960,
        priceOld: 1160,
      },
    ],
    previousAllItemsSelected: [
      {
        id: uuidv4(),
        img: UsbGameConsole,
        text: "GP11 Shooter USB Gamepad",
        link: "Add To Cart",
        iconDelete: DeleteVectorIcon,
        offer: null,
        priceActual: 960,
        priceOld: null,
      },
      {
        id: uuidv4(),
        img: SatinJacket,
        text: "Quilted Satin Jacket",
        link: "Add To Cart",
        iconDelete: DeleteVectorIcon,
        offer: null,
        priceActual: 960,
        priceOld: null,
      },
      {
        id: uuidv4(),
        img: UsbGameConsole,
        text: "GP11 Shooter USB Gamepad",
        link: "Add To Cart",
        iconDelete: DeleteVectorIcon,
        offer: "-35%",
        offer: null,
        priceActual: 960,
        priceOld: null,
      },
      {
        id: uuidv4(),
        img: SatinJacket,
        text: "Quilted Satin Jacket",
        link: "Add To Cart",
        iconDelete: DeleteVectorIcon,
        offer: null,
        priceActual: 960,
        priceOld: null,
      },
    ],
  },
];
