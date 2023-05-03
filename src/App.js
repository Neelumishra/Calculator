import React, { useState } from 'react';
import './style.css';
let string = '';
export default function App() {
  const [result, setResult] = useState('');

  function handleClick(value) {
    if (value == '=') {
      let result = eval(string);
      setResult(result);
      string = '';
      return;
    }
    string = string + value;
    setResult(string);
  }

  return (
    <div>
      <div
        style={{
          width: '50%',
          margin: 'auto',
          border: '1px solid',
          padding: '15px',
        }}
      >
        <input placeholder="Result" style={{ width: '100%' }} value={result} />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '40px 40px 40px 40px',
            gridTemplateRows: 'auto',
            gap: '15px',
            paddingTop: '3px',
          }}
        >
          <button onClick={() => handleClick(1)}>1</button>
          <button onClick={() => handleClick(2)}>2</button>
          <button onClick={() => handleClick(3)}>3</button>
          <button onClick={() => handleClick('+')}>+</button>
          <button onClick={() => handleClick(4)}>4</button>
          <button onClick={() => handleClick(5)}>5</button>
          <button onClick={() => handleClick(6)}>6</button>
          <button onClick={() => handleClick('-')}>-</button>
          <button onClick={() => handleClick(7)}>7</button>
          <button onClick={() => handleClick(8)}>8</button>
          <button onClick={() => handleClick(9)}>9</button>
          <button onClick={() => handleClick('/')}>/</button>
          <button onClick={() => handleClick('*')}>*</button>
          <button onClick={() => handleClick(0)}>0</button>
          <button onClick={() => handleClick('#')}>#</button>
          <button onClick={() => handleClick('=')}>=</button>
        </div>
      </div>
    </div>
  );
}
