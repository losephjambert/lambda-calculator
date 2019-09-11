import React from 'react';

const OperatorButton = ({ operators: { char, value }, onClick }) => {
  return (
    <button className='btn __operator' onClick={() => onClick(value)}>
      {char}
    </button>
  );
};

export default OperatorButton;
