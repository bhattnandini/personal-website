import React from 'react'
import Contact from './Contact'

import { mount } from "cypress/react";

import { IntlProvider } from "react-intl";

import messages from "../lang/en.json"; // Adjust the path to your messages


describe('<Contact />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(

      <IntlProvider locale="en" messages={messages}>

        <Contact />

      </IntlProvider>

    );
    cy.get('input[id="name"]').type("Hinddeep"); // Type in an input field

    cy.get('input[id="email"]').type("hin"); // Type in an input field

    cy.get('input[id="subject"]').type("Subject"); // Type in an input field

    // cy.get('textarea[id="message"]').type(""); // Type in another input field

    // cy.get('textarea[id="message"]').should("have.value", ""); // Type in another input field.

    cy.get('textarea[id="message"]').type("HI").should("not.have.value", ""); // Type in another input field.

    cy.get("form").submit();

    cy.get("form").should("contain", "Entered value does not match email format");
  })
})

