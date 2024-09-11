import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

//CT-05 - Inclusão de produto ao carrinho vazio
Given ("que o usuário selecione um produto", () => {
    cy.visit("https://advantageonlineshopping.com/#/")
    cy.get('#tabletsImg').click()
    cy.get('[data-ng-show="([] | productsFilterForCategoriesProduct:searchResult:minPriceToFilter:maxPriceToFilter:productsInclude).length != 0"] > ul > :nth-child(1)').click()

    
    
})

When ("clicar em Add to cart", () => {
    cy.get('.fixedBtn > .roboto-medium').click()
    
})



Then ("o produto será adicionado ao carrinho", () => {
    cy.get('#shoppingCartLink').click()
    cy.get('.fixedTableEdgeCompatibility > tbody > tr.ng-scope > :nth-child(2)').should('contain', 'HP ELITEPAD 1000 G2 TABLET')
})
