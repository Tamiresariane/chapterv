/// <reference types="cypress"/>

import articles from '../support/pages/articles'

describe('Articles', () => {
  // HOOK -> trechos que devem ser executados antes ou depois do teste

  beforeEach(() => {
    // Arrange: chegar até a pagina do teste
    cy.login()
    cy.visit('/')
  })

  it('Cadastro de novo artigo com sucesso', () => {
    // fluxo de criação do artigo
    // act: acesso ao form
    articles.acessarFormulario()

    // act: preencher o formulário
    articles.preencherFormulario()

    // act: submeter formulario
    articles.submeterFormulario()

    // asserts: verificar se o artigo foi criado com aucesso
    articles.verificarCriacaoDoArtigo()
  })
})
