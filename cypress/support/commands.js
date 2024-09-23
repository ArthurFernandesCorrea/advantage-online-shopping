//Comandos para busca
Cypress.Commands.add('validarPáginaInicial', () => {
    cy.url().should('eq', 'https://advantageonlineshopping.com/#/')
})

Cypress.Commands.add('realizarBusca', (produto) => {
    cy.get('#mobileSearch > .roboto-medium').type(produto)
    cy.get('body').type('{enter}')
})

Cypress.Commands.add('validarBusca', () => {
    cy.get('.categoryLeft').should('contain', 'LAPTOPS')
})

Cypress.Commands.add('validarBuscaComTodasCategorias', () => {
    cy.get('.categoryLeft')
    .should('contain', 'LAPTOPS')
    .and('contain', 'HEADPHONES')
    .and('contain', 'TABLETS')
    .and('contain', 'SPEAKERS')
    .and('contain', 'MICE')
})

Cypress.Commands.add('selecionarFiltroHeadPhone', () => {
    cy.get(':nth-child(2) > .fill > .ng-untouched').click()
})

Cypress.Commands.add('validarFiltroHeadPhone', () => {
    cy.get('.productName').should('contain', 'Headset')
})

//Comandos para carrinho
Cypress.Commands.add('selecionarProduto', () => {
    cy.get('#tabletsImg').click()
    cy.get('[data-ng-show="([] | productsFilterForCategoriesProduct:searchResult:minPriceToFilter:maxPriceToFilter:productsInclude).length != 0"] > ul > :nth-child(1)').click()

})

Cypress.Commands.add('adicionarProdutoAoCarrinho', () => {
    cy.get('.fixedBtn > .roboto-medium').click()
})

Cypress.Commands.add('validarProdutoNoCarrinho', () => {
    cy.get('#shoppingCartLink').click()
    cy.get('.fixedTableEdgeCompatibility > tbody > tr.ng-scope > :nth-child(2)').should('contain', 'HP ELITEPAD 1000 G2 TABLET')
})

//Comandos para checkout
Cypress.Commands.add('realizarLogin', () => {
    cy.get('#menuUserLink').click()
    cy.get('[a-hint="Username"] > .inputContainer > .ng-pristine').type('UserTest32')
    cy.get('[a-hint="Password"] > .inputContainer > .ng-pristine').type('Senha123')
    cy.get('#sign_in_btn').click()
    cy.get('#menuUserLink > span').should('contain', 'UserTest32')
})

Cypress.Commands.add('realizarCheckout', () => {
    cy.get('#checkOutButton').click()
    cy.get('#userDetails > :nth-child(1) > .ng-binding').should('contain', 'Nome teste')
    cy.get('#userCart > #toolTipCart > :nth-child(1) > table > tbody > #product > :nth-child(2)').should('contain', 'HP ELITEPAD 1000 G2 TABLET')
})

Cypress.Commands.add('continuarProcessoCheckout', () => {
    cy.get('.mobileBtnHandler > #next_btn').click()
})

Cypress.Commands.add('preencherCamposPagamento', (usuario, senha) => {
    cy.get('[a-hint="SafePay username"] > .inputContainer > .ng-pristine').clear().type(usuario)
        cy.get('[a-hint="SafePay password"] > .inputContainer > .ng-pristine').clear().type(senha)
        cy.get('#pay_now_btn_SAFEPAY').click()
})

Cypress.Commands.add('validarCompra', () => {
    cy.get('#orderPaymentSuccess > .roboto-regular.ng-binding').should('contain', 'Your tracking number')
    .and('contain', 'Your order number')
})













