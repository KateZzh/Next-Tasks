'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Task7() {
  const [flag, setFlag] = useState(true);

  return (
    <>
      <p>
        Создайте кнопки "Показать текст", "Скрыть текст", параграф. Используйте useState для
        отслеживания текущего выбора пользователя. В зависимости от выбора, отображайте
        соответствующий контент.
      </p>

      <button onClick={() => setFlag(true)}>Показать текст</button>
      <button onClick={() => setFlag(false)}>Скрыть текст</button>

      <p>{flag ? 'Hello!' : ''}</p>

      <p>
        <Link href='/'>back</Link>
      </p>
    </>
  );
}
