import { faker } from '@faker-js/faker';
import RegisterElements from "../elements/registerElements";
const registerElements = new RegisterElements();

Cypress.Commands.add('createUser', (username = faker.internet.username() ,email = faker.internet.email(), password = faker.internet.password()) => {
    cy.get(registerElements.userNameInput()).type(username)
    cy.get(registerElements.emailInput()).type(email)
    cy.get(registerElements.passwordInput()).type(password)
    cy.get(registerElements.btnRegister()).click()
});
