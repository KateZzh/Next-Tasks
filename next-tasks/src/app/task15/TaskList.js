'use client';
import { useState, useEffect } from 'react';

export default function TaskList({ button }) {
  const [list, setList] = useState(['test1', 'test2', 'test3']);

  useEffect(() => {
    setList([...list, button]);
  }, [button]);

  return (
    <>
      <div>
        {list.map((el, i) => (
          <p key={i}>{el}</p>
        ))}
      </div>
    </>
  );
}
