import React from 'react';
import ListItem from './list_item';

const List = ({ listings }) => {
  return (
    <div className='comparison-list'>
      <h2>Compare your Favorites</h2>
      <ul>
        <li>
          <ul>
            <li>rent</li>
            <li>bedrooms</li>
            <li>bathrooms</li>
            <li>cats</li>
            <li>dogs</li>
            <li>broker fee</li>
            <li>parking</li>
          </ul>
        </li>
        {listings.map((listing, idx) => <ListItem key={idx} listing={listing} />)}
      </ul>
    </div>
  );
};

export default List;
