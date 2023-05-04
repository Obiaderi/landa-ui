import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import CustomDropdown from "./CustomDropdown";

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const handleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="">
      <div className="bg-bgwhite py-[30px] px-[50px] flex items-center justify-between border border-b mb-[50px] ">
        <span className="font-[800] text-[16px] text-black">Assessments</span>
        <div
          className="flex items-center gap-2 hover:scale-x-105 duration-300 hover:cursor-pointer"
          onClick={handleDropdown}
        >
          <img
            className="h-[30px] w-[30px]  "
            src="/images/avatar.png"
            alt="avatar"
          />
          <MdKeyboardArrowDown className="h-[20px] w-[20px] text-black" />
        </div>
      </div>
      <div className="absolute top-16 px-4 bg-white right-10">
        {isDropdownOpen && <CustomDropdown />}
      </div>
    </div>
  );
};

export default NavBar;
