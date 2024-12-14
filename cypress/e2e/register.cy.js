/// <reference types="cypress" />
import LoginElements from "../support/elements/loginElements";
const loginElements = new LoginElements();
import HomeElements from "../support/elements/homeElements";
const homeElements = new HomeElements();

describe('Credentials Tests', () => {

  beforeEach(() => {
    cy.visitLoginPage()
  })

  it('Create user successfully', () => {

  });
});