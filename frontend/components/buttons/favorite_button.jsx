import React from 'react';

export default ({ className, dispatchAction }) => (
  <button
    className={`background-img favorite-icon ${className} hvr-pulse`}
    onClick={() => dispatchAction()} />
);
