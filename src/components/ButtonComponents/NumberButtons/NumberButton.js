import React from 'react';

const NumberButton = ({ number, onClick }) => {
  return (
    <button className={`btn __number __${number}`} onClick={() => onClick(number)}>
      {number}
    </button>
  );
};

export default NumberButton;
