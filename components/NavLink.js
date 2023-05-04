import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const NavLink = ({ title, href, iconName }) => {
  const router = useRouter();
  const { pathname } = router;
  return (
    <Link
      className={`navLink ${pathname === href ? "navActive" : ""}`}
      href={href}
    >
      <img
        className="h-[18px] w-[18px] "
        src={`/images/${iconName}.png`}
        alt="logo"
      />
      <span>{title}</span>
    </Link>
  );
};

export default NavLink;
