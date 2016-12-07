import React from 'react';

import NavbarContainer from './navbar/navbar_container';
import ScrollUpButton from './buttons/scroll_up_button';
import AlertContainer from './alert/alert_container';

const App = (props) => {
  const { children, main, footer, location } = props;
  return (
    <div id='app'>
      <NavbarContainer pathname={location.pathname} />
      <AlertContainer />
      <ScrollUpButton pathname={location.pathname} />
      <main className='app-content'>
        {children}
        {main}
      </main>
      {footer}
    </div>
  )
};

export default App;
