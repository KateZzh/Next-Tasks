import Link from 'next/link';
import style from './page.module.css';

export default function Task1() {
  return (
    <>
      <p>Создайте форму для ввода имени, фамилии, адреса электронной почты и пароля</p>

      <div className={style.form}>
        <input placeholder='введите имя' type='text' />
        <input placeholder='введите фамилию' type='text' />
        <input placeholder='введите email' type='text' />
        <input placeholder='введите пароль' type='password' />
        <button>Добавить</button>
      </div>

      <p>
        <Link href='/'>back</Link>
      </p>
    </>
  );
}
