/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';

export default function useMutation(
  url: string,
): [
  (data: any) => Promise<void>,
  { isLoading: boolean; data: any; error: any },
] {
  const [isLoading, setIsLoading] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  const [data, setData] = useState<undefined | any>();
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  const [error, setError] = useState<undefined | any>();

  // eslint-disable-next-line @typescript-eslint/no-shadow
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
