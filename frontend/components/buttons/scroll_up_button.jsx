import React from 'react';

export default ({ pathname }) => (
  pathname.includes('listings') ?  // scroll to the top of the sidebar
    <div /> :
    <button
      className={`background-img scroll-up-icon hvr-pulse`}
      onClick={animateScrollUp} />
);
