// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ByteStream title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ByteStream/i);
    expect(titleElement).toBeInTheDocument();
});
