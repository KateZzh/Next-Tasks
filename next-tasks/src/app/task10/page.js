'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';

export default function Task10() {
  const [num, setNum] = useState('');
  const [res, setRes] = useState('');

  useMemo(() => {
    const factorial = (num) => {
      return num ? num * factorial(num - 1) : 1;
    };

    setRes(factorial(num));
  }, [num]);

  return (
    <>
      <p>
        Создайте компонент, в котором пользователь может ввести число. Используйте useMemo, чтобы
        вычислить факториал введенного числа. Выведите результат факториала на странице.
      </p>

      <input type='text' onChange={(e) => setNum(e.target.value)} />
      <h1>{num === '' ? '' : res}</h1>

      <p>
        <Link href='/'>back</Link>
      </p>
    </>
  );
}
