import React from 'react';
import { render, screen } from '@testing-library/react';
import Modal from 'react-modal';
import Blog from '../../src/components/blog/Blog';
// import HomeDark from '../../src/views/all-home-version/HomeDark';

// Set the app element for accessibility
// Modal.setAppElement('#root');

// beforeEach(() => {
//   // Add the #root element to the document body
//   const root = document.createElement('div');
//   root.setAttribute('id', 'root');
//   document.body.appendChild(root);
// });

// afterEach(() => {
//   // Clean up the #root element after each test
//   const root = document.getElementById('root');
//   if (root) {
//     document.body.removeChild(root);
//   }
// });

describe('Blog', () => {
  test('renders the Blog title', () => {
    render(<Blog />);
    const titleElement = screen.getByText(/Nandini's Blogs/i);
    expect(titleElement).toBeInTheDocument();
  });

  // test('renders a list of projects', () => {
  //   const projects = ['Project 1', 'Project 2', 'Project 3'];
  //   render(<Portfolio projects={projects} />);
  //   projects.forEach(project => {
  //     expect(screen.getByText(project)).toBeInTheDocument();
  //   });
  // });

  // Add more tests as needed
});