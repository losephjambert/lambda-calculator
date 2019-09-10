import React from 'react';

const Display = ({ values }) => {
  return <section className='display'>{[...values]}</section>;
};

export default Display;
