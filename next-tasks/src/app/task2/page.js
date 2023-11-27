'use client';

import Link from 'next/link';
import style from './page.module.css';
import { useState } from 'react';

export default function Task2() {
  const [data, setData] = useState({ name: '', surname: '', email: '', pwd: '' });

  const fillInputs = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const doCheck = () => {
    alert(
      /^[a-zA-Z-_0-9]+@[a-z]+.[a-z]{2,10}/gm.test(data.email) &&
        data.pwd.length >= 8 &&
        isNaN(data.name) &&
        isNaN(data.surname)
        ? true
        : false
    );
  };

  return (
    <>
      <p>
        Создайте форму для ввода имени, фамилии, адреса электронной почты и пароля. По клику на
        кнопку проверить вводимые данные на регулярные выражения. В случае успешной валидации –
        alert(true)
      </p>

      <div className={style.form}>
        <input name='name' onChange={fillInputs} placeholder='введите имя' type='text' />
        <input name='surname' onChange={fillInputs} placeholder='введите фамилию' type='text' />
        <input name='email' onChange={fillInputs} placeholder='введите email' type='text' />
        <input name='pwd' onChange={fillInputs} placeholder='введите пароль' type='password' />
        <button onClick={doCheck}>Добавить</button>
      </div>

      <p>
        <Link href='/'>back</Link>
      </p>
    </>
  );
}
