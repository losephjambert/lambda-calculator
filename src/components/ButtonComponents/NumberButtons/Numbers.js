import React, { useState } from 'react';
import NumberButton from './NumberButton';
import { numbers } from '../../../data';
//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders.
/*
import { numbers } from '../../../data'
*/
//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(numbers);
  return numberState.map(number => (
    <div className={`btn-cell __${number}__`}>
      <NumberButton key={number} number={number} />
    </div>
  ));
};

export default Numbers;
