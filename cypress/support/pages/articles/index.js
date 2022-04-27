// AAA -> Arrange, Act, Assert
// Preparar, Executar/Agir, Validar

const el = require('./elements').ELEMENTS

const articleName = 'Artigo de testes' + new Date().getTime()

class Articles {
  // fluxo de criação do artigo

  // act: acesso ao form
  acessarFormulario () {
    cy.get(el.linkNovoArtigo).click()
  }

  // act: preencher o formulário
  preencherFormulario () {
    cy.get(el.inputTitle).type(articleName)
    cy.get(el.inputDesscription).type('Descrição do artigo de testes')
    cy.get(el.inputBody).type('Corpo do texto do artigo que está sendo criado')
    cy.get(el.inputTags).type('Cypress')
  }

  // act: submeter formulario
  submeterFormulario () {
    cy.contains('button', 'Publish Article').click()
  }

  // asserts: verificar se o artigo foi criado com aucesso
  verificarCriacaoDoArtigo () {
    cy.contains(articleName).should('be.visible')
    cy.get('h1').should('have.text', articleName)
  }
}

export default new Articles()
