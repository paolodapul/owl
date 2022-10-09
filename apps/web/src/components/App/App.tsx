import { Home } from '@components/Home';
import { QueryProvider } from '@contexts/QueryProvider';

function App() {
  return (
    <QueryProvider>
      <Home />
    </QueryProvider>
  );
}

export { App };
