import React, { useState } from 'react';
import './App.css';
import Numbers from './components/ButtonComponents/NumberButtons/Numbers';
import Operators from './components/ButtonComponents/OperatorButtons/Operators';
import Specials from './components/ButtonComponents/SpecialButtons/Specials';
import Display from './components/DisplayComponents/Display';

import { operators } from './data';

// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from './components/DisplayComponents/Logo';

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props

  const [total, setTotal] = useState(0);
  const [values, setValues] = useState(['0']); // always have the operation array start with a 0 in case the user starts the operation with an operator and not a number
  const calculateTotal = arr => {
    // takes an array operation and returns a total result from the operation in the array.
    console.log('calculateTotal', arr);
    const multipliedAndDividedArray = [];
    const total = 0;
    // loop through arr once to do multiplication and division
    arr.forEach(item => {
      const leftHand = [];
      const rightHand = [];
      let operator = null;
      if (item === '*' || item === '/') {
        operator = item;
      } else if (item !== '+' && item !== '-') {
        operator === null ? leftHand.push(item) : rightHand.push(item);
      }
    });
    // store that arr in a var

    // loop through the new array and do addition and subtraction
    // return total
  };
  const isOperator = (operators, value) => operators.filter(o => o.value === value).length > 0;
  const handleValue = value => {
    if (value === 'C') setValues(['0']);
    else if (value === '=') calculateTotal(values);
    else if (values[values.length - 1] === value && isOperator(operators, value)) console.log(`don't add that value`);
    else setValues([...values, value]);
  };

  return (
    <div className='container'>
      <Logo />
      <div className='App'>
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
        <Display values={values.slice(1)} />
        <section className='buttons-container'>
          <section className='specials'>
            <Specials handleValue={handleValue} />
          </section>
          <section className='numbers'>
            <Numbers handleValue={handleValue} />
          </section>
          <section className='operators'>
            <Operators handleValue={handleValue} />
          </section>
        </section>
      </div>
    </div>
  );
}

export default App;
