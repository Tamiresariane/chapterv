
declare namespace Cypress {
    interface Chainable {
  
      /**
       * @example cy.login('test')
       */
      login(): void
  
      /**
       * @example cy.token()
       */
  
      token(): void
  
    }
  }