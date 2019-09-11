import React from 'react';

const SpecialButton = ({ special, onClick }) => {
  return (
    <button className='btn __special' onClick={() => onClick(special)}>
      {special}
    </button>
  );
};

export default SpecialButton;
