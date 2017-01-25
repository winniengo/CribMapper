import React from 'react';

export default ({ listing }) => (
  <section className="listing-details">
    <h3>details</h3>
    <section className='listing-table'>
      <ul>
        <li>
          type
          <span>{listing.listingType}</span>
        </li>
        <li>
          rent
          <span>${listing.rent}</span>
        </li>
        <li>
          bedrooms
          <span>{listing.bedrooms}</span>
        </li>
        <li>
          bathrooms
          <span>{listing.bathrooms}</span>
        </li>
        <li>
          available
          <span>now!</span>
        </li>
        <li>
          cats?
          <span>{listing.cats ? "yes" : "no"}</span>
        </li>
        <li>
          dogs?
          <span>{listing.dogs ? "yes" : "no"}</span>
        </li>
        <li>
          broker fee?
          <span>{listing.fee ? "yes" : "no"}</span>
        </li>
        <li>
          parking?
          <span>{listing.parking ? "yes" : "no"}</span>
        </li>
      </ul>
    </section>
  </section>
);
