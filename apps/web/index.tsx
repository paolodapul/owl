import { createRoot } from 'react-dom/client';
import { App } from './src/components/App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '@components/Home';
import { NotFound } from '@components/NotFound';
import { About } from '@components/About';

const container = document.getElementById('app');
const root = createRoot(container as HTMLElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
