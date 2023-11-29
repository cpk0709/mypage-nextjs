/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';

export default function useMutation(url: string) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<undefined | any>();
  const [error, setError] = useState<undefined | any>();

  function mutation(data: any) {
    return fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).then((res) => res.json());
  }

  return [mutation, { loading, data, error }];
}
