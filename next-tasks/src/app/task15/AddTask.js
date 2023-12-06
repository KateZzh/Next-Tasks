'use client';
import { useState } from 'react';

export default function AddTask({ setButton }) {
  const [val, setVal] = useState('');

  const writeValByClickingButton = () => {
    setButton(val);
    setVal('');
  };
  return (
    <>
      <input value={val} type='text' onChange={(e) => setVal(e.target.value)} />
      <button onClick={writeValByClickingButton}>Add</button>
    </>
  );
}
