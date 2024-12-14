/// <reference types="cypress" />
import LoginElements from "../support/elements/loginElements";
const loginElements = new LoginElements();
import HomeElements from "../support/elements/homeElements";
const homeElements = new HomeElements();

describe('Login Tests', () => {

  beforeEach(() => {
    cy.visitLoginPage()
  })

  it('Should login successfully with valid credentials', () => {
    cy.loginUser("jacson.gomes@outlook.com", "Jacson@2024")
    cy.get(homeElements.btnLogout()).should('be.visible')
  });

  it('Should show error for invalid credentials', () => {
    cy.loginUser("invalid@user.com", "wrongpassword")
    cy.get(loginElements.alertError()).contains('Email e/ou senha inválidos');
  });
});