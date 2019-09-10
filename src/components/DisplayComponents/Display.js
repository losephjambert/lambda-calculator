import React from 'react';

const Display = ({ values }) => {
  return (
    <section className={`display ${values.length > 0 ? 'isActive' : ''}`}>
      <p>{[...values]}</p>
    </section>
  );
};

export default Display;
