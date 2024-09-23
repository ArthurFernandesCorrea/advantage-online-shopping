/// <reference types="cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

beforeEach(() => {
    cy.visit('/')
  })
  
  afterEach(() => {
    cy.screenshot()
  })

//CT-06 - Checkout
    Given ("que o usuário esteja logado", () => {
        cy.realizarLogin()
    })

    And ("na tela do carrinho com um item adicionado", () => {
        cy.selecionarProduto()
        cy.adicionarProdutoAoCarrinho()
        cy.validarProdutoNoCarrinho()
    })

    When ("clicar em “Chekout” e confirmar as informações do comprador e produtos", () => {
        cy.realizarCheckout()
    })

    And ("clicar no botão  Next", () => {
        cy.continuarProcessoCheckout()
    })


    And ("preencher os campos necessários para o pagamento", () => {
        cy.preencherCamposPagamento('UserTest32', 'Senha123')
    })

    Then ("o sistema exibe uma tela de compra realizada com sucesso", () => {
        cy.validarCompra()
    })