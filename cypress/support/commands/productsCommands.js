import HomeElements from "../elements/homeElements";
const homeElements = new HomeElements();

Cypress.Commands.add('searchProduct', () => {
    cy.get(homeElements.productTitle())
        .first()
        .invoke('text')
        .then((text) => {
            const productTitle = text.trim(); 
            Cypress.env('productTitle', productTitle);
            cy.get(homeElements.inputSearch()).type(productTitle);
        });
    
    cy.get(homeElements.btnSearch()).click();
    
});