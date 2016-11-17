import React from 'react';

const FilterTags = ({ tags }) => {
  return (
    <div className='filters tags'>
      {tags.map((tag, idx) => (
        <div className='tag' key={idx}>
          <div className='cancel background-img' />
          {tag}
        </div>
      ))}
    </div>
  )
};

export default FilterTags;
