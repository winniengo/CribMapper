import React from 'react';

const FavoriteButton = ({ className, dispatchAction }) => {
  return (
    <button
      className={`background-img favorite-icon ${className} hvr-pulse`}
      onClick={() => dispatchAction()} />
  )
}

export default FavoriteButton;
