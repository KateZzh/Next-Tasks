import Link from 'next/link';
import axios from 'axios';

export default async function Task9() {
  const getIP = async () => {
    const response = await axios.get('https://api.ipify.org/?format=json');

    return response.data.ip;
  };

  return (
    <>
      <p>
        Создайте компонент, который выполняет запрос к API https://api.ipify.org/?format=json и
        отображает полученные данные в заголовок. (решить задачу через серверный компонент)
      </p>

      <h1>{await getIP()}</h1>

      <p>
        <Link href='/'>back</Link>
      </p>
    </>
  );
}
