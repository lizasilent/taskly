import React from 'react';
import './layout.css';

import LeftMenu from '../LeftMenu/leftMenu';
import CenterMenu from '../CenterMenu/centerMenu';
import RightMenu from '../RightMenu/rightMenu';

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
