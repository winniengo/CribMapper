import React from 'react';

const Details = ({ listing }) => (
  <div className="listing-details">
    <h3>Details</h3>
    <ul>
      <li>
        <h4>Rent</h4>
        ${listing.rent}
      </li>
      <li className='even'>
        <h4>Bedrooms</h4>
        {listing.bedrooms}
      </li>
      <li>
        <h4>Bathrooms</h4>
        {listing.bathrooms}
      </li>
      <li className='even'>
        <h4>Available</h4>
        Now!
      </li>
      <li>
        <h4>Cats?</h4>
        {listing.cats ? "Yes" : "No"}
      </li>
      <li className='even'>
        <h4>Dogs?</h4>
        {listing.dogs ? "Yes" : "No"}
      </li>
      <li>
        <h4>Broker Fee?</h4>
        {listing.fee ? "Yes" : "No"}
      </li>
      <li className='even'>
        <h4>Parking?</h4>
        {listing.parking ? "Yes" : "No"}
      </li>
    </ul>
  </div>
);

export default Details;
