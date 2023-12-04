import Input from './input';
import Link from 'next/link';

export default function Task11() {
  return (
    <>
      <p>
        Реализуйте два серверных компонента. Первый – Input.js, второй – page.js. Input.js содержит
        статичный input. Страница page.js содержит форму из двух компонентов Input.js и кнопки.
      </p>
      
      <Input />
      <button>click me</button>

      <p>
        <Link href='/'>back</Link>
      </p>
    </>
  );
}
