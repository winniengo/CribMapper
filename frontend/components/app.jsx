import React from 'react';

import NavbarContainer from './navbar/navbar_container';
import ScrollUpButton from './buttons/scroll_up_button';

const App = (props) => {
  console.log(props);
  const { children, main, footer, location } = props;
  return (
    <div id='app'>
      <NavbarContainer/>
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
