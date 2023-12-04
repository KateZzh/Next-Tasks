'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Task13() {
  const [val, setVal] = useState('');
  const arr = ['Hi!', 'Hey!', 'Hello!', 'Cheers!'];

  return (
    <>
      <p>
        Напишите скрипт, который при нажатии на кнопку будет выводить случайное сообщение из заранее
        заданного списка.
      </p>

      <button onClick={() => setVal(arr[Math.floor(Math.random() * arr.length)])}>click me</button>
      <h1>{val}</h1>

      <p>
        <Link href={'/'}>back</Link>
      </p>
    </>
  );
}
