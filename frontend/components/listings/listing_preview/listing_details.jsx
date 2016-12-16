import React from 'react';

export default ({ listing }) => (
  <section className='listing-details'>
    <ul>
      <li>
        <div className='background-img medium-icon bed' />
        {listing.bedrooms} bed
      </li>
      <li>
        <div className='background-img medium-icon bath' />
        {listing.bathrooms} bath
      </li>
      <li>
        <div className='background-img medium-icon dog' />
        {listing.dogs ? 'yes' : 'no'}
      </li>
      <li>
        <div className='background-img medium-icon cat' />
        {listing.cats ? 'yes' : 'no'}
      </li>
      <li>
        <div className='background-img medium-icon parking' />
        {listing.parking ? 'yes' : 'no'}
      </li>
    </ul>
  </section>
);
