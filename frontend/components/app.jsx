import React from 'react';

import NavbarContainer from './navbar/navbar_container';

const App = ({ children, main, footer }) => {
  return (
    <div id='app'>
      <NavbarContainer/>
      <main className='app-content'>
        {children}
        {main}
      </main>
      {footer}
    </div>
  )
};

export default App;


// <body class="Site">
//   <header>…</header>
//   <main class="Site-content">…</main>
//   <footer>…</footer>
// </body>
