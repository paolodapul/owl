import { createRoot } from 'react-dom/client';
import { App } from './src/components/App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const container = document.getElementById('app');
const root = createRoot(container as HTMLElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
);
