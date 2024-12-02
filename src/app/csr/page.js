'use client';

import { useEffect, useState } from 'react';

export default function Page() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return <div>{data ? data.title : 'Loading...'}</div>;
}
