import React, { useState } from 'react';
import SpecialButton from './SpecialButton';
import { specials } from '../../../data';

//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialState, setSpecialState] = useState(specials);
  return specialState.map((special, key) => <SpecialButton key={key} special={special} />);
};

export default Specials;
