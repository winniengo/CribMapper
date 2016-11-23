import React from 'react';

const FavoriteIcon = ({ className, dispatchAction }) => {
  return (
    <button
      className={`background-img favorite-icon ${className}`}
      onClick={() => dispatchAction()} />
  )
}

export default FavoriteIcon;
