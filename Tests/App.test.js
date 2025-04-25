import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../components/App';
import axios from 'axios';

jest.mock('axios');

test('renders input and fetches user data', async () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/enter github username/i);
  const button = screen.getByText(/search/i);

  fireEvent.change(input, { target: { value: 'mockuser' } });
  fireEvent.click(button);

  await waitFor(() => screen.getByText(/mock user/i));
  expect(screen.getByText(/mock user/i)).toBeInTheDocument();
  expect(screen.getByText(/mock city/i)).toBeInTheDocument();
});