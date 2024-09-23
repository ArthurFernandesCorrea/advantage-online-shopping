/// <reference types="cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'



beforeEach(() => {
    cy.visit('/')
  })
  
  afterEach(() => {
    cy.screenshot()
  })

//CT-01 - Busca de produto válido
Given ("que o usuário esteja na página inicial", () => {
    cy.validarPáginaInicial()
})

When ("digitar o nome de um produto válido no campo de pesquisa", () => {
    cy.realizarBusca('Laptop')
})

Then ("o sistema exibe os resultados da busca com intens correspondentes ao da pesquisa", () => {
    cy.validarBusca()
})


//CT-02 - Busca com nome parcial
Given ("que o usuário esteja na página inicial", () => {
    cy.validarPáginaInicial()
})

When ("digitar o nome parcial de um produto válido no campo de pesquisa", () => {
    cy.realizarBusca('Lap')
    
})

Then ("o sistema exibe os resultados da busca com intens correspondentes ao nome parcial da pesquisa", () => {
    cy.validarBusca()
})

//CT-03 - Busca de produto com campo em branco
Given ("que o usuário esteja na página inicial", () => {
    cy.validarPáginaInicial()
})

When ("não digitar nada no campo de pesquisa", () => {
    cy.realizarBusca(' ')
})

Then ("o sistema exibe todos os produtos do catálogo", () => {
    cy.validarBuscaComTodasCategorias()
})

//CT-04 - Aplicar filtros nos resultados da pesquisa
Given ("que o usuário esteja na página inicial", () => {
    cy.validarPáginaInicial()
})

When ("digitar o nome do produto no campo de pesquisa", () => {
    cy.realizarBusca('HP')
})

And ("selecionar um dos filtros disponíveis", () => {
    cy.selecionarFiltroHeadPhone() //Filtro selecionado "Headphones"
})

Then ("o sistema exibe os resultados da busca com intens correspondentes ao da pesquisa + os filtros", () => {
    cy.validarFiltroHeadPhone()
})






