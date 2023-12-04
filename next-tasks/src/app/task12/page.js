import Link from 'next/link';
import Input from './input';
import Client from './client';

export default function Task12() {
  return (
    <>
      <p>
        Реализуйте два компонента (серверный, клиентский). Первый – input.js, второй – page.js.
        input.js содержит статичный input. Страница page.js содержит форму из двух компонентов
        Input.js и кнопки, по нажатию на которую появляется alert с сообщением ‘click’.
      </p>

      <Input />
      <Client />

      <p>
        <Link href='/'>back</Link>
      </p>
    </>
  );
}
