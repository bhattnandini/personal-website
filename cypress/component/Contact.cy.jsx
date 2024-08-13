describe('Contact Us Form', () => {
  // beforeEach(() => {
  //   // Visit the page containing the Contact Us form before each test
  //   cy.visit('https://3000-nandineebha-personalweb-ivmwcodut1j.ws-us115.gitpod.io/');
  // });

  it('should submit the contact form successfully', () => {
    // Fill out the form fields
    cy.get('input[name="name"]').type('John Doe');
    cy.get('input[name="email"]').type('johndoe@example.com');
    cy.get('textarea[name="message"]').type('This is a test message.');

    // Submit the form
    cy.get('button[type="submit"]').click();

    // Verify form submission success message (adjust selector as necessary)
    cy.get('.success-message').should('contain', 'Thank you for your message!');
  });

  it('should show validation errors when submitting an empty form', () => {
    // Submit the form without filling it out
    cy.get('button[type="submit"]').click();

    // Verify that validation errors are displayed (adjust selectors as necessary)
    cy.get('.error-message-name').should('contain', 'Name is required');
    cy.get('.error-message-email').should('contain', 'Email is required');
    cy.get('.error-message-message').should('contain', 'Message is required');
  });

  it('should show an error for invalid email format', () => {
    // Fill out the form with an invalid email
    cy.get('input[name="name"]').type('John Doe');
    cy.get('input[name="email"]').type('invalid-email');
    cy.get('textarea[name="message"]').type('This is a test message.');

    // Submit the form
    cy.get('button[type="submit"]').click();

    // Verify that an error is shown for the email field
    cy.get('.error-message-email').should('contain', 'Please enter a valid email address');
  });
});
