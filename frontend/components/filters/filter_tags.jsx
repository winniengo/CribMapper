import React from 'react'; // unused

const FilterTags = ({ tags, resetFilter }) => {
  return (
    <div id='filter-tags' className={`tags ${tags.length > 0 ? '' : 'placeholder'}`}>
      {tags.map(({ tag, handleClick }, idx) => (
        <div className='tag' key={idx} onClick={handleClick}>
          <div className='cancel background-img' />
          {tag === 'noFee' ? 'no fee' : tag}
        </div>
      ))}
    </div>
  );
}

export default FilterTags;
