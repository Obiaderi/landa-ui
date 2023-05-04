import React from "react";
import Sidebar from "./Sidebar";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <div className="bg-bgwhite h-screen w-full">
      <div className="flex">
        <div className="w-[17%] h-screen overflow-hidden">
          <Sidebar />
        </div>
        <div className="flex-grow min-h-screen">
          <div className="">
            <NavBar />
            <div className="px-[50px]">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
