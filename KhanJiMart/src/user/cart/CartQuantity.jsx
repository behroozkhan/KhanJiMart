import * as React from 'react';
import { RiArrowDropUpLine, RiArrowDropDownLine } from "react-icons/ri";

export default function CartQuantity() {
  const [value, setValue] = React.useState('');

  return (
    <div className="relative">
          <input
        type="text"
        placeholder="00"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-[55px] h-[35px] pl-2 border border-gray-500 rounded text-[var(--mainTextBlack)] placeholder-custom"
      />
      <div className=' absolute right-[2%] top-1'>
      <RiArrowDropUpLine 
        className="cursor-pointer"
        onClick={() => setValue((prevValue) => parseInt(prevValue) + 1 || 1)} 
      />
    
      <RiArrowDropDownLine 
        className="cursor-pointer"
        onClick={() => setValue((prevValue) => parseInt(prevValue) - 1 || 0)} 
      />
      </div>
    </div>
  );
}
