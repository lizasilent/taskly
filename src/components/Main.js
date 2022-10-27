import React from "react";

import LeftMenu from "./LeftMenu";
import CenterMenu from "./CenterMenu";
import RightMenu from "./RightMenu";

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
