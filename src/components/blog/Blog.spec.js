import React from 'react';
import { render, screen } from '@testing-library/react';
import Blog from './Blog'; // Component to test
// import '@testing-library/jest-dom/extend-expect';

describe('Blog', () => {
    it('renders the blog title', () => {
      render(<Blog />);
      const titleElement = screen.getByText(/As a recent graduate/i);
      expect(titleElement).toBeInTheDocument();
    });
  });