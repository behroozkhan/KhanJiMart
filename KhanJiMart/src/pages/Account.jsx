import AccountTopLink from "../user/account/AccountTopLink";
import MyAccountLink from "../user/account/MyAccountLink";
import UserData from "../user/account/profile/UserData";


const Account = () => {
  return (
    <div className='w-[81%] mx-auto '>
        <AccountTopLink/>
       <div className="flex">
       <MyAccountLink/>
       <UserData/>
       </div>
    </div>
  )
}

export default Account;