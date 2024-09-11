import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

//CT-01 - Busca de produto válido
Given ("que o usuário esteja na página inicial", () => {
    cy.visit("https://advantageonlineshopping.com/#/")
})

When ("digitar o nome de um produto válido no campo de pesquisa", () => {
    cy.get('#mobileSearch > .roboto-medium').type('Laptop')
    cy.get('body').type('{enter}')
})

Then ("o sistema exibe os resultados da busca com intens correspondentes ao da pesquisa", () => {
    cy.get('.categoryLeft').should('contain', 'LAPTOPS')
})


//CT-02 - Busca com nome parcial
Given ("que o usuário esteja na página inicial", () => {
    cy.visit("https://advantageonlineshopping.com/#/")
})

When ("digitar o nome parcial de um produto válido no campo de pesquisa", () => {
    cy.get('#mobileSearch > .roboto-medium').type('Lap')
    cy.get('body').type('{enter}')
})

Then ("o sistema exibe os resultados da busca com intens correspondentes ao nome parcial da pesquisa", () => {
    cy.get('.categoryLeft').should('contain', 'LAPTOPS')
})

//CT-03 - Busca de produto com campo em branco
Given ("que o usuário esteja na página inicial", () => {
    cy.visit("https://advantageonlineshopping.com/#/")
})

When ("não digitar nada no campo de pesquisa", () => {
    cy.get('#mobileSearch > .roboto-medium').type(' ')
    cy.get('body').type('{enter}')
})

Then ("o sistema exibe todos os produtos do catálogo", () => {
    cy.get('.categoryLeft')
    .should('contain', 'LAPTOPS')
    .and('contain', 'HEADPHONES')
    .and('contain', 'TABLETS')
    .and('contain', 'SPEAKERS')
    .and('contain', 'MICE')
})

//CT-04 - Aplicar filtros nos resultados da pesquisa
Given ("que o usuário esteja na página inicial", () => {
    cy.visit("https://advantageonlineshopping.com/#/")
})

When ("digitar o nome do produto no campo de pesquisa", () => {
    cy.get('#mobileSearch > .roboto-medium').type('HP')
    cy.get('body').type('{enter}')
})

And ("selecionar um dos filtros disponíveis", () => {
    cy.get(':nth-child(2) > .fill > .ng-untouched').click()
})

Then ("o sistema exibe os resultados da busca com intens correspondentes ao da pesquisa + os filtros", () => {
    cy.get('.productName').should('contain', 'Headset')
})






