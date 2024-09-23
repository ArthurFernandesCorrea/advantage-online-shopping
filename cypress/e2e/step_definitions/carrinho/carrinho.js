/// <reference types="cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

beforeEach(() => {
    cy.visit('/')
  })
  
  afterEach(() => {
    cy.screenshot()
  })

//CT-05 - Inclusão de produto ao carrinho vazio
    Given ("que o usuário selecione um produto", () => {
        cy.selecionarProduto()
    })

    When ("clicar em Add to cart", () => {
        cy.adicionarProdutoAoCarrinho()
    })

    Then ("o produto será adicionado ao carrinho", () => {
        cy.validarProdutoNoCarrinho()
    })
