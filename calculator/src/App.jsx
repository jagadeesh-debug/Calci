import { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState(''); // To show input and result
  const [expression, setExpression] = useState(''); // To store the ongoing expression

  // Handle button clicks
  const handleButtonClick = (value) => {
    if (value === 'AC') {
      setDisplay('');
      setExpression('');
    } else if (value === 'DEL') {
      setExpression(expression.slice(0, -1));
      setDisplay(expression.slice(0, -1));
    } else if (value === '%') {
      try {
        const result = parseFloat(expression) / 100;
        setDisplay(result);
        setExpression(result.toString());
      } catch (error) {
        setDisplay('Error');
      }
    } else if (value === '=') {
      try {
        const result = eval(expression); // Using eval for simplicity
        setDisplay(result);
        setExpression(result.toString());
      } catch (error) {
        setDisplay('Error');
      }
    } else {
      const newExpression = expression + value;
      setExpression(newExpression);
      setDisplay(newExpression);
    }
  };

  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center bg-gray-800'>
      <h3 className='text-orange-400 mb-4 font-bold text-3xl '>CALCI</h3>
      <div className="w-1/3  bg-gray-900 rounded-lg shadow-lg">
        <div className="p-4 h-16 text-right text-white text-3xl bg-gray-700 rounded-t-lg" id='output'>
          {display}
        </div>
        <div className="grid grid-cols-4 grid-rows-5 gap-1 p-4" id='input'>
          <button className="p-4 bg-gray-600 text-white font-bold rounded-lg" id='clear' onClick={() => handleButtonClick('AC')}>AC</button>
          <button className="p-4 bg-gray-600 text-white font-bold rounded-lg" id='del' onClick={() => handleButtonClick('DEL')}>DEL</button>
          <button className="p-4 bg-gray-600 text-white font-bold rounded-lg" id='rem' onClick={() => handleButtonClick('%')}>%</button>
          <button className="p-4 bg-gray-300 text-orange-700 font-bold rounded-lg" id='quot' onClick={() => handleButtonClick('/')}>/</button>
          <button className="p-4 bg-gray-600 text-white font-bold rounded-lg" id='btn-7' onClick={() => handleButtonClick('7')}>7</button>
          <button className="p-4 bg-gray-600 text-white font-bold rounded-lg" id="btn-8" onClick={() => handleButtonClick('8')}>8</button>
          <button className="p-4 bg-gray-600 text-white font-bold rounded-lg" id="btn-9" onClick={() => handleButtonClick('9')}>9</button>
          <button className="p-4 bg-gray-300 text-orange-700 font-bold rounded-lg" id="btn-multiply" onClick={() => handleButtonClick('*')}>*</button>
          <button className="p-4 bg-gray-600 text-white font-bold rounded-lg" id="btn-4" onClick={() => handleButtonClick('4')}>4</button>
          <button className="p-4 bg-gray-600 text-white font-bold rounded-lg" id="btn-5" onClick={() => handleButtonClick('5')}>5</button>
          <button className="p-4 bg-gray-600 text-white font-bold rounded-lg" id="btn-6" onClick={() => handleButtonClick('6')}>6</button>
          <button className="p-4 bg-gray-300 text-orange-700  font-bold rounded-lg" id="btn-minus" onClick={() => handleButtonClick('-')}>-</button>
          <button className="p-4 bg-gray-600 text-white font-bold rounded-lg" id="btn-1" onClick={() => handleButtonClick('1')}>1</button>
          <button className="p-4 bg-gray-600 text-white font-bold rounded-lg" id="btn-2" onClick={() => handleButtonClick('2')}>2</button>
          <button className="p-4 bg-gray-600 text-white font-bold rounded-lg" id="btn-3" onClick={() => handleButtonClick('3')}>3</button>
          <button className="p-4 bg-gray-300 text-orange-700 font-bold rounded-lg" id="btn-plus" onClick={() => handleButtonClick('+')}>+</button>
          <button className="p-4 bg-gray-600 text-white font-bold rounded-lg " id="btn-00" onClick={() => handleButtonClick('00')}>00</button>
          <button className="p-4 bg-gray-600 text-white font-bold rounded-lg" id="btn-0" onClick={() => handleButtonClick('0')}>0</button>
          <button className="p-4 bg-gray-600 text-white font-bold rounded-lg" id="btn-dot" onClick={() => handleButtonClick('.')}>.</button>
          <button className="p-4 bg-orange-500 text-white font-bold rounded-lg" id="btn-equal" onClick={() => handleButtonClick('=')}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
