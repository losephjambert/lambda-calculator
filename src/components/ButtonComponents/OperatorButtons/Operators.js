import React, { useState } from 'react';
import OperatorButton from './OperatorButton';
import { operators } from '../../../data';

//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operatorState, setOperatorState] = useState(operators);
  return operatorState.map((operators, key) => (
    <div key={key} className={`btn-cell`}>
      <OperatorButton operators={operators} />
    </div>
  ));
};

export default Operators;
