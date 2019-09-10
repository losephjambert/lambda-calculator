import React from 'react';
import OperatorButton from './OperatorButton';
import { operators } from '../../../data';

//import any components needed

//Import your array data to from the provided data file

const Operators = ({ handleValue }) => {
  // STEP 2 - add the imported data to state
  return operators.map((operators, key) => (
    <div key={key} className={`btn-cell`}>
      <OperatorButton operators={operators} onClick={handleValue} />
    </div>
  ));
};

export default Operators;
