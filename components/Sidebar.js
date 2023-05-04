import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";

const Sidebar = () => {
  return (
    <div className="w-[270px] bg-bgGray border border-bgGrayBorder h-screen fixed">
      <div className="w-full pr-8  pt-[20px] h-full flex flex-col justify-between">
        <div className="flex flex-col">
          <Link className="px-[30px]" href="/">
            <img
              className="h-[30px] w-[60px] hover:scale-x-105 duration-300 "
              src="/images/logo.png"
              alt="logo"
            />
          </Link>
          <div className="mt-[76px] pl-[15px] ">
            <div className="flex flex-col gap-[10px]">
              <NavLink title="Dashboard" href={"/"} iconName="dashboard" />
              <NavLink
                title="Institutions"
                href={"/institutions"}
                iconName="instructions"
              />
              <NavLink title="Learning" href={"/learning"} iconName="learn" />
              <NavLink
                title="Assessment"
                href={"/assessment"}
                iconName="asset"
              />
              <NavLink title="Finance" href={"/finance"} iconName="finance" />
              <NavLink
                title="Notifications"
                href={"/notification"}
                iconName="notification"
              />
              <NavLink title="Support" href={"/support"} iconName="support" />
            </div>
          </div>
        </div>
        <div className="pl-[15px] mb-[45px]">
          <Link className="navLink justify-between px-[14px]" href="/">
            <span>Logout</span>
            <img
              className="h-[18px] w-[18px] "
              src={`/images/logout.png`}
              alt="logo"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
