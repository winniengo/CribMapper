import React from 'react';

import NavbarContainer from './navbar/navbar_container';

const App = ({ children }) => {
  return (
    <div id='app'>
      <NavbarContainer />
      {children}
    </div>
  )
};

export default App;
