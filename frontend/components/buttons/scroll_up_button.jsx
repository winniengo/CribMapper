import React from 'react';

export default ({ pathname }) => (
  pathname.includes('search') ?  // scroll to the top of the sidebar
    <button
      className={`background-img scroll-up-icon hvr-pulse`}
      onClick={() => scrollUp()}
      /> :
    <div />
);
