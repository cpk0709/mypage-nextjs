/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';

interface UseMutationState<T> {
  loading: boolean;
  data?: T;
  error?: T;
}

type UseMutaionResult<T> = [(data: any) => Promise<void>, UseMutationState<T>];

export default function useMutation<T = any>(url: string): UseMutaionResult<T> {
  const [state, setState] = useState<UseMutationState<T>>({
    loading: false,
    data: undefined,
    error: undefined,
  });

  function mutation(data: any) {
    setState((prev) => ({ ...prev, loading: true }));

    return (
      fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        .then((res) => res.json().catch(() => {}))
        .then((resultData) =>
          setState((prev) => ({ ...prev, data: resultData })),
        )
        .catch((error) => setState((prev) => ({ ...prev, error })))
        .finally(() => setState((prev) => ({ ...prev, loading: false })))
    );
    // .then((json) => setData(json)); 위와같이 줄여서 가능
  }

  return [mutation, { ...state }];
}
