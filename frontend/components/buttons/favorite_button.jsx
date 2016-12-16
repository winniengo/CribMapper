import React from 'react';

export default ({ className, dispatchAction }) => (
  <button
    className={`background-img favorite medium-icon ${className} hvr-pulse`}
    onClick={() => dispatchAction()} />
);
