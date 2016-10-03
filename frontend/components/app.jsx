import React from 'react';

import SearchContainer from './search/search_container';

const App = () => (
  <div className='app'>
    CribMapper
    <SearchContainer />
  </div>
);

// const App = ({ children }) => (
//   <div className='app'>
//     <header>
//       <HeaderContainer />
//     </header>
//     CribMapper
//     {this.children}
//   </div>
// );
export default App;
