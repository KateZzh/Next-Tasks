'use client';

import Link from 'next/link';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Task8() {
  const [data, setData] = useState('');

  async function getIP() {
    const response = await axios.get('https://api.ipify.org/?format=json');
    setData(response.data.ip);
  }

  useEffect(() => {
    getIP();
  }, []);

  return (
    <>
      <p>
        Создайте компонент, который выполняет запрос к API https://api.ipify.org/?format=json и
        отображает полученные данные в заголовок. (решить задачу через клиентский компонент)
      </p>

      <h1>{data}</h1>

      <p>
        <Link href='/'>back</Link>
      </p>
    </>
  );
}
