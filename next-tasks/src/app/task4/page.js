import Link from 'next/link';

export default function Task4() {
  const data = ['New York', 'London', 'Tokyo', 'Paris', 'Berlin'];

  return (
    <>
      <p>
        Создайте массив данных, представляющий элементы, которые вы хотите отобразить в списке
        используя map. ["New York", "London", "Tokyo", "Paris", "Berlin"]
      </p>

      <ul>
        {data.map((el, i) => (
          <li key={i}>{el}</li>
        ))}
      </ul>

      <p>
        <Link href='/'>back</Link>
      </p>
    </>
  );
}
