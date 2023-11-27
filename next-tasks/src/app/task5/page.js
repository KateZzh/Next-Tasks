'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Task5() {
  const [val, setVal] = useState('');
  const data = ['New York', 'London', 'Tokyo', 'Paris', 'Berlin'];

  return (
    <>
      <p>
        Создайте массив данных, представляющий элементы, которые вы хотите отобразить в списке
        используя map. ["New York", "London", "Tokyo", "Paris", "Berlin"]. Добавить событие клика с
        распознаванием на какой именно li был совершен клик
      </p>

      <ul>
        {data.map((el, i) => (
          <li key={i} onClick={(e) => setVal(e.target.textContent)}>
            {el}
          </li>
        ))}
      </ul>

      <h1>{val}</h1>

      <p>
        <Link href='/'>back</Link>
      </p>
    </>
  );
}
