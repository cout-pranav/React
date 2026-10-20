import { useState } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { useDebounce } from './useDebounce.jsx';

const DEFAULT_URL = 'https://jsonplaceholder.typicode.com/users';

// Example-local client, so the example works standalone
const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: false },
  },
});

async function fetchUrl({ queryKey, signal }) {
  const [, url] = queryKey;
  // signal aborts the request if the URL changes before it finishes
  const res = await fetch(url, { signal });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

export function UseDebounceExample() {

  return (
    <QueryClientProvider client={queryClient}>
      <DebouncedFetch />
    </QueryClientProvider>
  )
}

function DebouncedFetch() {

  const [url, setUrl] = useState(DEFAULT_URL);
  const debouncedUrl = useDebounce(url, 500);

  const { data, error, isLoading, isError } = useQuery({
    queryKey: ['debounced-url', debouncedUrl],
    queryFn: fetchUrl,
    enabled: debouncedUrl.trim() !== '',
  });

  let content;
  if (!url.trim()) {
    content = <p>Enter a URL.</p>;
  } else if (url !== debouncedUrl) {
    content = <p>Waiting for you to stop typing…</p>;
  } else if (isLoading) {
    content = <p>Loading…</p>;
  } else if (isError) {
    content = <p>Error: {error.message}</p>;
  } else {
    const items = Array.isArray(data) ? data : [data];
    content = (
      <ul>
        {items.map((item, index) => (
          <li key={item?.id ?? index}>
            {item?.name
              ? `${item.name}${item.email ? ` — ${item.email}` : ''}`
              : item?.title ?? JSON.stringify(item)}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <>
      <div>useDebounce</div>
      <p>The request is sent 500 ms after you stop typing (fetched with TanStack Query).</p>

      <label>
        API URL:{' '}
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          size={50}
        />
      </label>

      {content}
    </>
  )
}
