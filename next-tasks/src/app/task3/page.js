'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Task3() {
  const [val, setVal] = useState('');

  return (
    <>
      <p>
        Создайте форму для ввода данных. По клику на кнопку получите данные из input и отобразите в
        консоль
      </p>

      <input type='text' onChange={(e) => setVal(e.target.value)} />
      <button onClick={() => console.log(val)}>click me</button>

      <p>
        <Link href='/'>back</Link>
      </p>
    </>
  );
}
