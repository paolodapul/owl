import { QueryProvider } from '@contexts/QueryProvider';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <QueryProvider>
      <Outlet />
    </QueryProvider>
  );
}

export { App };
