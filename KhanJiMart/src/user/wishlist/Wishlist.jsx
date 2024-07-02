import { Button } from '@mui/material';
import React from 'react'
import WishlistCard from './WishlistCard';
import GucchiBag from "../../assets/images/Gucchibag.png";

const Wishlist = () => {
  return (
    <div className='mt-10'>
        <div className='flex items-center w-[81%] mx-auto justify-between p-1'>
            <h3 className='text-[var(--mainTextBlack)] text-[1.200rem] font-normal'>Wishlist <span>(4)</span></h3>
            <Button sx={{alignItems:'center',color: "var(--mainTextBlack)",font:'1.200rem',border: '1px solid var(--mainTextGrey)',width:'200px',padding:'10px', 
            '&:hover': {
                backgroundColor: 'var(--mainSecondaryRedish)',
                color: 'white',
              },
            }}>Move All To Bag</Button>
        </div>

        <div>
            <WishlistCard/>
        </div>

        
    </div>
  )
}

export default Wishlist;