import React from 'react';

export default ({ src, handlePrevious, handleNext }) => {
 return (
    <section className='image-display'>
      <div className='selected' style={{backgroundImage: `url(${src})`}} />
      <div className='arrows'>
        <button className='previous background-img hvr-pulse' onClick={handlePrevious} />
        <button className='next background-img hvr-pulse' onClick={handleNext}/>
      </div>
    </section>
  );
};
