
import SearchIcon from '../../assets/images/searchIcon.svg';
import WishList from '../../assets/images/HeartWishlist.svg';
import ProfileIcon from '../../assets/images/userProfile.svg';
import CartIcon from '../../assets/images/CartIcon.svg';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const NavRight = () => {
    return (
        // <div className='flex bg-red-500'>
        //     <div className="relative flex items-center w-full max-w-lg bg-[var(--mainSecondaryLightWhite)] shadow-lg">
        //         <input
        //             type="text"
        //             placeholder="What are you looking for?"
        //             className="w-full py-2 pl-6 pr-12 border-none  focus:outline-none bg-[#f5f5f5] text-[17px]"
        //         />
        //         <Button className='bg-[var(--mainSecondaryLightWhite)]'>  
        //             <img
        //             src={SearchIcon}
        //             alt="search icon"
        //             className=""
        //         />
        //         </Button>
        //     </div>
        //     <div className="flex max-w-[250px]">

        //         <Link to={'#'}><Button> <img src={WishList} alt="wishlist" width={32} /></Button></Link>
        //         <Link to={'#'}><Button> <img src={CartIcon} alt="cart" width={32} /></Button></Link>

        //         <Link to={'#'}><Button> <img src={ProfileIcon} alt="Profile" width={32} /></Button></Link>
        //     </div>
        // </div>
        <div className="flex items-center">
            {/* <NavRight/> */}
            <div className="flex relative bg-[var(--mainSecondaryLightWhite)] shadow-lg">
                <input
                    type="text"
                    placeholder="What are you looking for?"
                    className="py-2 pl-6 pr-2 border-none  focus:outline-none bg-[#f5f5f5] text-[17px]"
                />
                <Button className='bg-[var(--mainSecondaryLightWhite)]'>
                    <img
                        src={SearchIcon}
                        alt="search icon"
                        className="absolute"
                    />
                </Button>
            </div>
            <div className="flex items-center ml-4">
                <div className='relative '>
                    <span className='absolute p-2 right-[25%] rounded-full bg-red-500 text-white text-[10px] font-bold border-2 border-white flex items-center justify-center w-[20px] h-[20px]'>
                        4
                    </span>
                    <Link to={'#'}> <img src={WishList} alt="wishlist" width={33} className="mr-4" /></Link>
                </div>
                <Link to={'#'}> <img src={CartIcon} alt="wishlist" width={33} /></Link>
                <Link to={'#'}> <img src={ProfileIcon} alt="wishlist" width={33} className="ml-4" /></Link>
            </div>
        </div>
    );
};

export default NavRight;
