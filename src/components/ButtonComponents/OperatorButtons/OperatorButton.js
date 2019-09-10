import React from 'react';

const OperatorButton = ({ operators: { char, value }, onClick }) => {
  return <button onClick={() => onClick(value)}>{char}</button>;
};

export default OperatorButton;
