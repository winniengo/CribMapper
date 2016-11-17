import React from 'react';

const FilterTags = ({ tags, resetFilter }) => {
  return (
    <div className='filters tags'>
      {tags.map(({ tag, handleClick }, idx) => (
        <div className='tag' key={idx} onClick={handleClick}>
          <div className='cancel background-img' />
          {tag === 'noFee' ? 'no fee' : tag}
        </div>
      ))}
    </div>
  )
};

export default FilterTags;
