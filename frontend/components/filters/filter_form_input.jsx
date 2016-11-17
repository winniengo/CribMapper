import React from 'react';

const FilterFormInput = ({ field, fields }) => (  
  <div className="filter">
    <h3>{field}</h3>
    <div className="fields">
      {fields}
    </div>
  </div>
);

export default FilterFormInput;
