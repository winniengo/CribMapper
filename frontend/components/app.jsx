import React from 'react';

import NavbarContainer from './navbar/navbar_container';

const App = ({ children, main, footer }) => {
  return (
    <div id='app'>
      <NavbarContainer/>
      {children}
      {main}
      {footer}
    </div>
  )
};

export default App;
