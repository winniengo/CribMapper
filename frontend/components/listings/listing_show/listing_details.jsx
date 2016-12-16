import React from 'react';

export default ({ listing }) => (
  <section className="listing-details">
    <h3>details</h3>
    <section className='listing-table'>
      <ul>
        <li>
          type
          <p>{listing.listingType}</p>
        </li>
        <li>
          rent
          <p>${listing.rent}</p>
        </li>
        <li>
          bedrooms
          <p>{listing.bedrooms}</p>
        </li>
        <li>
          bathrooms
          <p>{listing.bathrooms}</p>
        </li>
        <li>
          available
          <p>now!</p>
        </li>
        <li>
          cats?
          <p>{listing.cats ? "yes" : "no"}</p>
        </li>
        <li>
          dogs?
          <p>{listing.dogs ? "yes" : "no"}</p>
        </li>
        <li>
          broker fee?
          <p>{listing.fee ? "yes" : "no"}</p>
        </li>
        <li>
          parking?
          <p>{listing.parking ? "yes" : "no"}</p>
        </li>
      </ul>
    </section>
  </section>
);
