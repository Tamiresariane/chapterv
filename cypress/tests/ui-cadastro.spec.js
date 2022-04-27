/// <reference types="cypress"/>

describe('Cadastro', () => {

	it('Cadastro com sucesso', () => {

		cy.intercept({
			method: 'POST',
			path: '/api/users'
		},

			{
				statusCode: 200,
				fixture: 'cadastro-com-sucesso'

			}).as('postUsers');


		cy.visit('register');

		cy.get('[placeholder=Username]').type('Tamires1');
		cy.get('[placeholder=Email]').type('tamires1@test.com');
		cy.get('[placeholder=Password]').type('Test123');

		cy.get('button.btn-primary').click();

		cy.contains('No articles are here... yet.').should('be.visible');
	});

	it('Cadastro com usuário já existente', ()=> {

		cy.intercept({
			method: 'POST',
			path: '/api/users'
		},

			{
				statusCode: 422,
				fixture: 'cadastro-usuario-existente'

			}).as('postUsers');

			cy.visit('register');

			cy.get('[placeholder=Username]').type('Tamires1');
			cy.get('[placeholder=Email]').type('tamires10@test.com');
			cy.get('[placeholder=Password]').type('Test123');
	
			cy.get('button.btn-primary').click();

			cy.contains('username has already been taken').should('be.visible');

	});
})