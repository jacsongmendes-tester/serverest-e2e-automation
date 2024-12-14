import LoginElements from "../elements/loginElements";
const loginElements = new LoginElements();

Cypress.Commands.add('visitLoginPage', () => {
    cy.visit("/login")
});

Cypress.Commands.add('loginUser', (email, password) => {
    cy.get(loginElements.emailInput()).type(email)
    cy.get(loginElements.passwordInput()).type(password)
    cy.get(loginElements.loginButton()).click()
});