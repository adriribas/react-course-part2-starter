import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './routing/routes';

const queryClient = new QueryClient(/* {
  // Configuration examples (default values are a good approach)
  defaultOptions: {
    queries: {
      retry: 3,
      cacheTime: 300_000, // 5min
      staleTime: 10 * 1000, // 10s
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: false
    }
  }
} */);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
