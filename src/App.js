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
  const [values, setValues] = useState([]);

  const multiply = (a, b) => a * b;
  const divide = (a, b) => a / b;

  const calculateTotal = arr => {
    const inputArrCopy = arr.slice(0);
    const evalCrawl = (arr, start, mathCB) => {
      let left = [];
      let right = [];
      let spliceStart;
      let spliceEnd;
      for (let i = start - 1; i >= 0; i--) {
        if (!isNaN(arr[i] * 1)) {
          left.push(arr[i]);
          spliceStart = i;
        } else break;
      }
      for (let i = start + 1; i < arr.length; i++) {
        if (!isNaN(arr[i] * 1)) {
          right.push(arr[i]);
          spliceEnd = i - 1;
        } else break;
      }
      left = left.reverse().join('');
      right = right.join('');
      return [spliceStart, spliceEnd, mathCB(left * 1, right * 1)];
    };
    // handle multiplication and division
    inputArrCopy.forEach((item, i) => {
      if (item === '*' || item === '/') {
        const [start, end, value] = evalCrawl(inputArrCopy, i, item === '*' ? multiply : divide);
        inputArrCopy.splice(start, end, value);
      }
    });
    // convert numbers to +/-
    inputArrCopy.forEach((item, i) => {
      if (!isNaN(item)) inputArrCopy[i] *= 1;
      if (item === '-') {
        inputArrCopy[i + 1] *= -1;
        inputArrCopy.splice(i, 1);
      }
      if (item === '+') inputArrCopy.splice(i, 1);
    });
    // reduce the remaining array by adding the values together with a reduce
    return inputArrCopy.reduce((a, b) => a + b, 0);
  };

  const isOperator = (operators, value) => operators.filter(o => o.value === value).length > 0;

  const handleValue = value => {
    let total = 0;
    if (value === 'C') setValues([]);
    else if (value === '=') total = calculateTotal(values);
    else if (values[values.length - 1] === value && isOperator(operators, value)) return;
    else setValues([...values, value]);
    console.log('total: ', total);
  };

  return (
    <div className='container'>
      <Logo />
      <div className='App'>
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
        <Display values={values} />
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
