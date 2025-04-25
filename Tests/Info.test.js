import { render, screen } from '@testing-library/react';
import Info from '../components/Info';

test('renders user info correctly', () => {
  const user = { name: 'Jane Doe', location: 'Lviv', public_repos: 42 };
  render(<Info user={user} />);
  expect(screen.getByText(/jane doe/i)).toBeInTheDocument();
  expect(screen.getByText(/lviv/i)).toBeInTheDocument();
  expect(screen.getByText(/42/i)).toBeInTheDocument();
});