import React from 'react';
import NumberButton from './NumberButton';
import { numbers } from '../../../data';
//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders.
/*
import { numbers } from '../../../data'
*/
//Import your array data to from the provided data file

const Numbers = ({ handleValue }) => {
  // STEP 2 - add the imported data to state
  return numbers.map(number => (
    <div key={number} className={`btn-cell __${number}__`}>
      <NumberButton number={number} onClick={handleValue} />
    </div>
  ));
};

export default Numbers;
