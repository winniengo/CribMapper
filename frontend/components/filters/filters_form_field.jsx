import React from 'react';

export default ({ field, fields }) => (
  <div className="filter">
    <h3>{field}</h3>
    <div className="fields">
      {fields}
    </div>
  </div>
);
