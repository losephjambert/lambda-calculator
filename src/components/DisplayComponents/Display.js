import React from 'react';

const Display = ({ values }) => {
  return (
    <section className='display'>
      <p>{[...values]}</p>
    </section>
  );
};

export default Display;
