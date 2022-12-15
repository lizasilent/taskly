import React from "react";
import "layout.css";


import LeftMenu from "../LeftMenu/leftMenu.js";
import CenterMenu from "../CenterMenu/centerMenu.js";
import RightMenu from "../RightMenu/rightMenu.js";

function Layout() {
  return (
    <div className="layout">
      <div className="layout__content">
        <LeftMenu />
        <CenterMenu />
        <RightMenu />
      </div>
    </div>
  );
}

export default Layout;
