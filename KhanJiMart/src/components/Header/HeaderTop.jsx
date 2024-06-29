import { Link } from "react-router-dom";
import LanguageChanger from "./LanguageChanger";

const HeaderTop = () => {
  return (
    <div className="flex justify-center w-full bg-[var(--mainTextBlack)] gap-4 py-2">
      <div className="flex justify-between w-[80%] items-center">
        <div className="flex-1 flex justify-center items-center text-center md:text-left ">
          <p className="text-white text-sm md:text-base lg:text-sm xl:text-md text-center ">
            Summer Sale For All Swim Suits And Free Express Delivery
          </p>
          <em className="text-white text-sm md:text-base lg:text-sm xl:text-md hidden md:inline">
            -OFF 50%!
          </em>
          <Link
            to="#"
            className="underline text-white text-sm md:text-base lg:text-sm xl:text-md hidden md:block ml-4"
          >
            Shop Now
          </Link>
        </div>
        <div className="text-end text-white text-sm md:text-base lg:text-sm xl:text-md hidden md:inline">
          <LanguageChanger />
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
