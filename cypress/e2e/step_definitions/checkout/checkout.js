import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

//CT-06 - Checkout
Given ("que o usuário esteja logado", () => {
    cy.visit("https://advantageonlineshopping.com/#/")
    cy.get('#menuUserLink').click()
    cy.get('[a-hint="Username"] > .inputContainer > .ng-pristine').type('UserTest32')
    cy.get('[a-hint="Password"] > .inputContainer > .ng-pristine').type('Senha123')
    cy.get('#sign_in_btn').click()

})

And ("na tela do carrinho com um item adicionado", () => {
    cy.get('#tabletsImg').click()
    cy.get('[data-ng-show="([] | productsFilterForCategoriesProduct:searchResult:minPriceToFilter:maxPriceToFilter:productsInclude).length != 0"] > ul > :nth-child(1)').click()
    cy.get('.fixedBtn > .roboto-medium').click()
    cy.get('#shoppingCartLink').click()
    cy.get('.fixedTableEdgeCompatibility > tbody > tr.ng-scope > :nth-child(2)').should('contain', 'HP ELITEPAD 1000 G2 TABLET')
})

When ("clicar em “Chekout” e confirmar as informações do comprador e produtos", () => {
    cy.get('#checkOutButton').click()
    cy.get('#userDetails > :nth-child(1) > .ng-binding').should('contain', 'Nome Teste')
    cy.get('#userCart > #toolTipCart > :nth-child(1) > table > tbody > #product > :nth-child(2)').should('contain', 'HP ELITEPAD 1000 G2 TABLET')
    
    })

    And ("clicar no botão  Next", () => {
    cy.get('.mobileBtnHandler > #next_btn').click()
})


    And ("preencher os campos necessários para o pagamento", () => {
        cy.get('[a-hint="SafePay username"] > .inputContainer > .ng-pristine').clear().type('UserTest123')
        cy.get('[a-hint="SafePay password"] > .inputContainer > .ng-pristine').clear().type('Senha123')
        cy.get('#pay_now_btn_SAFEPAY').click()
    })



Then ("o sistema exibe uma tela de compra realizada com sucesso", () => {
    cy.get('#orderPaymentSuccess > .roboto-regular.ng-binding').should('contain', 'Your tracking number')
    .and('contain', 'Your order number') 
    
})