'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Task6() {
  const [flag, setFlag] = useState(true);

  return (
    <>
      <body style={{ backgroundColor: flag ? 'white' : 'black' }}>
        <p style={{ color: flag ? 'black' : 'white' }}>
          Создайте кнопку, которая позволяет пользователю переключаться между светлой и темной темой
          интерфейса. Используйте useState, чтобы отслеживать текущую тему. Применяйте
          соответствующие стили в зависимости от выбранной темы.
        </p>

        <button onClick={() => setFlag(!flag)}>{flag ? 'black' : 'white'}</button>

        <p>
          <Link href='/'>back</Link>
        </p>
      </body>
    </>
  );
}
