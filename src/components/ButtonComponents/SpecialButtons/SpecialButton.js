import React from 'react';

const SpecialButton = ({ special, onClick }) => {
  return <button onClick={() => onClick(special)}>{special}</button>;
};

export default SpecialButton;
