import React from 'react'
import { Link } from 'react-router-dom';

const CheckOutLink = () => {
  return (
    <div className='mt-10'>
        <div className='space-x-2  mx-auto text-[var(--mainTextGrey)]'>
            <Link to={'/'}>Account</Link>
            <span className='space-x-2'>/</span>
            <Link to={'/cart'}>My Account</Link>
            <Link to={'/'}>Product</Link>
            <span className='space-x-2'>/</span>
            <Link to={'/cart'}>View Cart</Link>
            <span className='space-x-2'>/</span>
            <Link to={'/cart'}>Check Out</Link>
        </div>
    </div>
  )
}

export default CheckOutLink;