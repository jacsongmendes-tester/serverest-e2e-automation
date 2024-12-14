import LoginElements from "../elements/loginElements";
const loginElements = new LoginElements();

Cypress.Commands.add('visitLoginPage', () => {
    cy.visit("/login")
});

Cypress.Commands.add('createUser', (email, password) => {

});