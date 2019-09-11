import React from 'react';

const Display = ({ values, total }) => {
  let display = total || [...values];
  return (
    <section className={`display ${values.length > 0 ? 'isActive' : ''}`}>
      <p>{display}</p>
    </section>
  );
};

export default Display;
