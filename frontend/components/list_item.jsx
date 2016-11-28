import React from 'react';

const ListItem = ({ listing }) => {
  return (
    <li>
      <ul>
        <li>${listing.rent}</li>
        <li>{listing.bedrooms}</li>
        <li>{listing.bathrooms}</li>
        <li>{listing.cats ? 'yes' : 'no'}</li>
        <li>{listing.dogs ? 'yes' : 'no'}</li>
        <li>{listing.fee ? 'yes' : 'no'}</li>
        <li>{listing.parking ? 'yes' : 'no'}</li>
      </ul>
    </li>
  );
};

export default ListItem;
