import LoginElements from "../elements/loginElements";
const loginElements = new LoginElements();

Cypress.Commands.add('setEnvironmentVariables', () => {
    const environment = Cypress.env('ENV')
    Cypress.env('baseUrl', Cypress.env(environment).baseUrl)
    Cypress.env('email', Cypress.env(environment).email)
    Cypress.env('password', Cypress.env(environment).password)
});

Cypress.Commands.add('visitLoginPage', () => {
    cy.visit(`${Cypress.env('baseUrl')}/login`)
});

Cypress.Commands.add('loginUser', (email = Cypress.env('email'), password = Cypress.env('password')) => {
    cy.get(loginElements.emailInput()).type(email)
    cy.get(loginElements.passwordInput()).type(password)
    cy.get(loginElements.loginButton()).click()
});