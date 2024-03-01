/// <reference types="Cypress" />

describe ('Processo seletivo Araujo', () =>{
    beforeEach(function (){
        cy.visit('https://www.maxmilhas.com.br/')
     })
    

     /*it('Caso de login de falha', () => {

        cy.get('span[class="css-1m9j1iq"]').click()
        cy.get('button[class="css-1fn4fq0"]')
            .should('have.text', 'Entre ou cadastre-se')

        cy.get('button[class="css-1fn4fq0"]').click()
            .should('be.visible')
        cy.get('input[id="email"]').click().type('anac_aguiar13@hotmail.com')
            .should('be.visible')
        cy.get('input[type="password"]').click()
            .should('be.visible')
        cy.get('input[type="password"]').click().type('aninha12')
            .should('be.visible')
        cy.get('button[class="css-8q0x67"]').click()
            .should('be.visible')
        cy.wait(2000)


     })*/
    
     it('Caso de login de sucesso e busca por hospedagem' , () => {

        cy.get('span[class="css-1m9j1iq"]').click()
        cy.get('button[class="css-1fn4fq0"]')
            .should('have.text', 'Entre ou cadastre-se')

        cy.get('button[class="css-1fn4fq0"]').click()
            .should('be.visible')
        cy.get('input[id="email"]').click().type('anita13ag@gmail.com')
            .should('be.visible')
        cy.get('input[type="password"]').click()
            .should('be.visible')
        cy.get('input[type="password"]').click().type('aninha13')
            .should('be.visible')
        cy.get('button[class="css-8q0x67"]').click()
            .should('be.visible')
        cy.wait(2000)

      
     })

    
     



})