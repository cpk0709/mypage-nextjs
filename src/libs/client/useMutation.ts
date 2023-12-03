/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';

export default function useMutation(url: string) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<undefined | any>();
  const [error, setError] = useState<undefined | any>();

  function mutation(data: any) {
    setIsLoading(true);

    return fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setIsLoading(false));
    // .then((json) => setData(json)); 위와같이 줄여서 가능
  }

  return [mutation, { isLoading, data, error }];
}
