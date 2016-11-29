import React from 'react';

export default ({ src }) => (
  <div
    className='thumbnail background-img'
    style={{backgroundImage: `url(${src})`}} />
);
