import React from 'react';
import './layout.css';

import LeftMenu from '../LeftMenu';
import CenterMenu from '../CenterMenu';
import RightMenu from '../RightMenu';

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
