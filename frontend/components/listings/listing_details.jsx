import React from 'react';

export default ({ listing }) => (
  <section className="listing-details">
    <h3>details</h3>
    <ul>
      <li>
        <h4>type</h4>
        {listing.listingType}
      </li>
      <li>
        <h4>rent</h4>
        ${listing.rent}
      </li>
      <li>
        <h4>bedrooms</h4>
        {listing.bedrooms}
      </li>
      <li>
        <h4>bathrooms</h4>
        {listing.bathrooms}
      </li>
      <li>
        <h4>available</h4>
        now!
      </li>
      <li>
        <h4>cats?</h4>
        {listing.cats ? "yes" : "no"}
      </li>
      <li>
        <h4>dogs?</h4>
        {listing.dogs ? "yes" : "no"}
      </li>
      <li>
        <h4>broker fee?</h4>
        {listing.fee ? "yes" : "no"}
      </li>
      <li>
        <h4>parking?</h4>
        {listing.parking ? "yes" : "no"}
      </li>
    </ul>
  </section>
);
