import React from 'react';

export default const ({ errors }) => (
  <ul className='session-errors'>
    {errors.map((error, idx) => (
      <li key={idx}>{error}</li>
    ))}
  </ul>
);
