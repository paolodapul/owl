import { Home } from '@components/Home';
import { screen, render } from '@testing-library/react';
import { it, expect } from 'vitest';

it('should render the home page', () => {
  render(<Home />);
  expect(screen.getByText('Owl', { exact: false })).toBeInTheDocument();
});
