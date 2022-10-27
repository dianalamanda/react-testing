import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  
  const title = screen.getByText(/why do we need test ?/i)
  expect(title).toBeInTheDocument()

  const btn = screen.getByRole('button')
  expect(btn).toBeInTheDocument()
  expect(btn).toHaveTextContent('Users List')

  fireEvent.click(btn)
  const btn2 = screen.getByRole('button')
  expect(btn2).toBeInTheDocument()
  expect(btn2).toHaveTextContent('Back to Home')
});
