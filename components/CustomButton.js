import React from "react";

const CustomButton = ({ title, className, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`px-[32px] py-[15px] text-[16px] font-[600] hover:cursor-pointer hover:bg-slate-50 ${className}`}
    >
      {title}
    </div>
  );
};

export default CustomButton;
