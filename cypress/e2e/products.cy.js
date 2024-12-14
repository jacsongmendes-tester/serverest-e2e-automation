/// <reference types="cypress" />
import HomeElements from "../support/elements/homeElements";
const homeElements = new HomeElements();
import ShoppingElements from "../support/elements/shoppingElements";
const shoppingElements = new ShoppingElements();

describe('Products Tests', () => {

  beforeEach(() => {
    cy.visitLoginPage()
    cy.loginUser("jacson.gomes@outlook.com", "Jacson@2024")
  })

  it('Should display a list of available products on the home page', () => {
    cy.get(homeElements.productLink()).should('have.length.greaterThan', 0);
  });

  it('Should search a product and display the result', () => {
    cy.searchProduct()
    cy.get(homeElements.productLink()).should('have.length.greaterThan', 0);
  });

  it('Should add a product to the shopping list successfully', () => {
    cy.searchProduct()
    cy.get(homeElements.btnAddList()).click()
    cy.get(shoppingElements.titlePage()).should('be.visible')
    cy.get(shoppingElements.shoppingCartName()).should('be.visible')
  });

});