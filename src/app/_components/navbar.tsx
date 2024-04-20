import React, { ElementRef, RefObject } from "react";
import { Search } from "lucide-react";

const NavBar = () => {
  return (
    <nav className="flex flex-row justify-between items-center px-10 py-1 w-full h-[30px]">
      {/* <div ref={containerRef}>Don't mind me</div> */}
      <img
        src="/assets/images/mustang-gt.svg"
        alt="mustang-logo"
        width="40"
        height="40"
      />
      <ul className="flex flex-row gap-10">
        <li>Features</li>
        <li>Description</li>
        <li>About</li>
      </ul>
      <Search />
    </nav>
  );
};

export default NavBar;
