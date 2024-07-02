import SearchIcon from "../../assets/images/searchIcon.svg";
import WishList from "../../assets/images/HeartWishlist.svg";
import ProfileIcon from "../../assets/images/userProfile.svg";
import CartIcon from "../../assets/images/CartIcon.svg";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const NavRight = () => {
  return (
    <div className="flex items-center">
      <div className=" relative bg-[var(--mainSecondaryLightWhite)] shadow-lg hidden sm:hidden lg:flex xl:flex md:flex">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="py-2 pl-6 pr-2 border-none  focus:outline-none bg-[#f5f5f5] text-[17px]"
        />
        <Button className="bg-[var(--mainSecondaryLightWhite)]">
          <img src={SearchIcon} alt="search icon" className="absolute" />
        </Button>
      </div>
      <div className="flex items-center ml-4">
        <div className="relative hidden sm:hidden lg:flex xl:flex md:flex">
          <span className="absolute p-2 right-[25%] rounded-full bg-red-500 text-white text-[10px] font-bold border-2 border-white flex items-center justify-center w-[20px] h-[20px]">
            4
          </span>
          <Link to={"/wishlist"}>
            
            <img src={WishList} alt="wishlist" width={33} className="mr-4" />
          </Link>
        </div>
        <Link to={"#"}>
       
          <img src={CartIcon} alt="cart" width={33} />
        </Link>
        <Link to={"#"}>
          <img
            src={ProfileIcon}
            alt="user-profile"
            width={33}
            className="hidden sm:hidden lg:flex xl:flex md:flex ml-4"
          />
        </Link>
      </div>
    </div>
  );
};

export default NavRight;
