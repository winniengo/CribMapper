import React from 'react';

export default ({ errors }) => {
  return (
    errors.length === 0 ?
    <div /> :
      <ul className='errors'>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
  );
};
