'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Task16() {
  const [val, setVal] = useState({ num1: '', num2: '', result: '' });

  function getInputValue(e) {
    setVal({ ...val, [e.target.name]: +e.target.value });
  }

  function doAddition() {
    setVal({ ...val, result: val.num1 + val.num2 });
  }

  function doSubtraction() {
    setVal({ ...val, result: val.num1 - val.num2 });
  }

  function doMultiplication() {
    setVal({ ...val, result: val.num1 * val.num2 });
  }

  function doDivision() {
    val.num2 === 0 && setVal('Infinity');
    
    setVal({ ...val, result: val.num1 / val.num2 });
  }

  function doClear() {
    setVal({ ...val, num1: '', num2: '', result: '' });
  }

  return (
    <>
      <p>
        Создайте калькулятор, который позволяет выполнять основные математические операции (сложение, вычитание, умножение, деление). Реализуйте два
        компонента. page.js: Содержит калькулятор. Calculator.js: Принимает введенные данные и выполняет математические операции для расчета итогового
        результата.
      </p>

      <input type='number' placeholder='Enter the first number' name='num1' value={val.num1} onChange={getInputValue} />
      <input type='number' placeholder='Enter the second number' name='num2' value={val.num2} onChange={getInputValue} />

      <div>
        <button onClick={doAddition}>+</button>
        <button onClick={doSubtraction}>-</button>
        <button onClick={doMultiplication}>*</button>
        <button onClick={doDivision}>/</button>
        <button onClick={doClear}>CE</button>
      </div>

      <h2>{val.result}</h2>

      <p>
        <Link href={'/'}>back</Link>
      </p>
    </>
  );
}
