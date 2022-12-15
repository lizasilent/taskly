import React from "react";

import LeftMenu from "../LeftMenu/leftMenu.js";
import CenterMenu from "../CenterMenu/centerMenu";
import RightMenu from "../RightMenu/rightMenu.js";

function Main() {
  return (
    <div className="page">
      <div className="page__content">
        <LeftMenu />
        <CenterMenu />
        <RightMenu />
      </div>
    </div>
  );
}

export default Main;
