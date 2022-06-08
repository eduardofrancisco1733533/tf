/// <reference types="Cypress" />

describe('First test suite', () => {
    //google
    it('Visits the google site', () => {
        cy.visit('http://google.com')
        cy.title().should('eq', 'Google')
    })
})
