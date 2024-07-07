import React from 'react'
import AccountTopLink from './AccountTopLink';
import MyAccountLink from './MyAccountLink';

const Account = () => {
  return (
    <div className='w-[81%] mx-auto'>
        <AccountTopLink/>
        <MyAccountLink/>
    </div>
  )
}

export default Account;