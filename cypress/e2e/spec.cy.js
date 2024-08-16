describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
  })
})
// it("should load the homepage and check title", () => {
//   cy.title().should("include", 'personal-website');
// });

it("should play the video inside the iframe", () => {
  // check videos in iframe --> need to install an extra plugin
  // Can't play the video directly due to CORS errors so check the URL
  cy.visit('/')
  cy.get('[data-cy="v"]')
    .should("be.visible")
    .and("have.attr", "src", "https://www.youtube.com/embed/wavzkI0Sztc");
});
it("should open about me", () => {
  // test <button>
  // 1. Check the URL - but in our case the URLs are not changing
  // 2. Check the contents of the new page to see if this is the right page
  cy.visit('/')
  cy.get('[data-cy="moreabout"]').click();
  cy.get('[data-cy="skills"]').should("contain", "Skills");
});
it("should switch to light mode", () => {
  // 1. test <a> tag
  // 2. test CSS properties
  cy.visit('/')
  cy.get('[data-cy="light"]').should("exist");
  // cy.get('[data-cy="light"]').should("have.attr", "href", "/home-light");
  cy.get('[data-cy="light"]').click();
  cy.get("body").should("have.class", "light");
  cy.get("body").should("not.have.class", "dark");
});
it("should change to French", () => {
  // test drop down menu and <h1> tag
  cy.visit('/')
  cy.get('[data-cy="l"]').should("exist");
  cy.get('[data-cy="l"]').select("fr");
  cy.get('[data-cy="im"]').should("contain", "Je suis");
});
it("should navigate to all subpages", () => {
  cy.visit('/')

  cy.get('[data-cy="cv"]').click();
  cy.get('[data-cy="skills"]').should("contain", "Skills");

  cy.get('[data-cy="portfolio"]').click();
  cy.get('[data-cy="YouTube"]').should("contain", "YouTube");

  cy.get('[data-cy="blogs"]').click();
  cy.get('[data-cy="blog-1"]').should("contain", "The hidden");

  cy.get('[data-cy="contact"]').click();
  cy.get('[data-cy="sendmsg"]').should("contain", "Send Message");
});
it("should be clickable email link", () => {
  cy.visit('/')

  cy.get('[data-cy="cv"]').click();
  cy.get('[data-cy="email"]')
    .should("exist")
    .should("have.attr", "href")
    .and("include", "mailto:reach@nandinibhatt.me");

  // an email client will open --> problem in headless environment
  cy.get('[data-cy="email"]').click();
  // cy.get('[data-cy="email"]').invoke("attr", "href"); // simulate click without actually performing action
});
it("should open english and french CVs in a new tab", () => {
  // Cypress is a single-browser instance so we cannot test links opening in new tab directly
  // Either verify the attributes and URL the tag is pointing to or intercept network request
  // open a custom-made drop down menu and test it
  // follow JS code attached to html elements and test it
  // we cannot interact with/click elements generated dynamically and added to DOM with JS
  // we cannot interact with elements that are not rendered in the DOM
  // we cannot interact with elements with effective size of 0
  // but we can use invoke() instead of click()
  // The PDF file is downloading, there is no URL change or anything else

  cy.visit('/')

  cy.get('[data-cy="cv"]').click();
  cy.get('[data-cy="dwnldcvbtn"]').click();

  // Modify the link to open in the same tab
  cy.get('[data-cy="dwnldcv_en"]').click();
  cy.get('[data-cy="cv-link"]').invoke("removeAttr", "target");
  // Intercept the request to the PDF
  // cy.intercept("GET", "https://assets.nandinibhatt.me/cv/cv_en.pdf").as(
  //   "pdfRequest"
  // );

  // Click the link
  cy.get('[data-cy="cv-link"]')
    .invoke("css", "width", "1px")
    .invoke("css", "height", "1px")
    .invoke("css", "display", "block")
    .click();

  // cy.url().should("include", "http://assets.nandinibhatt.me/cv/cv_en.pdf"); --> url is not changing so can't use this

  // Wait for the PDF request and verify the response
  cy.wait("@pdfRequest").then((interception) => {
    expect(interception.response.statusCode).to.eq(200);
    // Optionally, you can also assert other properties or response headers
  });

  // Verify the URL of the PDF
  // cy.url().should("include", "http://assets.nandinibhatt.me/cv/cv_en.pdf");

  //     // Intercept the request
  //     cy.intercept("GET", "http://assets.nandinibhatt.me/cv/cv_en.pdf", (req) => {
  //       console.log("Intercepted request:", req);
  //     }).as("englishCV"); // Replace with the expected URL
  //
  //     // Click the link
  //     cy.get('[data-cy="dwnldcv_en"]').click();
  //
  //     // Verify the request was made
  //     cy.wait("@englishCV").its("response.statusCode").should("eq", 200);

  //     // Intercept the request
  //     cy.intercept("GET", "https://assets.nandinibhatt.me/cv/cv_fr.pdf").as(
  //       "frenchCV"
  //     ); // Replace with the expected URL
  //
  //     // Click the link
  //     cy.get('[data-cy="dwnldcv_fr"]').click();
  //
  //     // Verify the request was made
  //     cy.wait("@frenchCV").its("response.statusCode").should("eq", 200);
});

  it("should be responsive", () => {
    cy.visit('/')
    cy.viewport("iphone-6");
    cy.get("header").should("be.visible");
    cy.viewport("macbook-15");
    cy.get("header").should("be.visible");
  });