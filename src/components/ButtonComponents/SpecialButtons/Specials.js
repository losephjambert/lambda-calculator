import React from 'react';
import SpecialButton from './SpecialButton';
import { specials } from '../../../data';

//import any components needed

//Import your array data to from the provided data file

const Specials = ({ handleValue }) => {
  // STEP 2 - add the imported data to state
  return specials.map((special, key) => (
    <div key={key} className={`btn-cell`}>
      <SpecialButton special={special} onClick={handleValue} />
    </div>
  ));
};

export default Specials;
