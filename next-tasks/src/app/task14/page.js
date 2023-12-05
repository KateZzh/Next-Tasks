'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Task14() {
  const [val, setVal] = useState('');

  return (
    <>
      <p>
        Напишите код для отображения всплывающего окна с сообщением при наведении на определенный
        элемент на странице. (onMouseEnter onMouseLeave)
      </p>

      <button onMouseEnter={() => setVal('this button')} onMouseLeave={() => setVal('')}>
        click me
      </button>
      <h1>{val}</h1>

      <p>
        <Link href={'/'}>back</Link>
      </p>
    </>
  );
}
