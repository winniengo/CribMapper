import React from 'react';

export default ({ src, handlePrevious, handleNext }) => {
 return (
    <section className='image-display'>
      <div className='selected' style={{backgroundImage: `url(${src})`}} />
      <div className='arrows'>
        <button className='previous background-img' onClick={handlePrevious} />
        <button className='next background-img' onClick={handleNext}/>
      </div>
    </section>
  );
};
