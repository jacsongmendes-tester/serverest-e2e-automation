/// <reference types="cypress" />
import LoginElements from "../support/elements/loginElements";
const loginElements = new LoginElements();
import HomeElements from "../support/elements/homeElements";
const homeElements = new HomeElements();
import RegisterElements from "../support/elements/registerElements";
const registerElements = new RegisterElements();

describe('User Registration Tests', () => {

  beforeEach(() => {
    cy.visitLoginPage()
  })

  it('Should register a new user successfully', () => {
    cy.get(loginElements.btnRegister()).click()
    cy.createUser()
    cy.get(registerElements.alertMessageSucsess()).contains('Cadastro realizado com sucesso')
    cy.get(homeElements.btnLogout()).should('be.visible')

  });

  it('Should not register a user with an email in use', () => {
    cy.get(loginElements.btnRegister()).click()
    cy.createUser("Jacson Gomes Mendes", Cypress.env('email'), Cypress.env('passsword'))
    cy.get(registerElements.alertMessageError()).contains('Este email já está sendo usado')
    cy.get(registerElements.btnRegister()).should('be.visible')
  });
});