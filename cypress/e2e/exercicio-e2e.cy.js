/// <reference types="cypress" />

import produtosPage from "../support/page_objects/produtos.page";

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

    before(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(login => {
            cy.login(login.usuario, login.senha)
        })
    });

  beforeEach(() => {
      produtosPage.visitarUrl()
  });

  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
      //TODO: Coloque todo o fluxo de teste aqui, considerando as boas práticas e otimizações
            produtosPage.buscarProduto('Ariel Roll Sleeve Sweatshirt')
            produtosPage.addProdutoCarrinho('S', 'Green', 4)
            cy.get('.checkout-button').click()
            cy.get('#terms').click()
            cy.get('#place_order').click()
            cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
  });


})