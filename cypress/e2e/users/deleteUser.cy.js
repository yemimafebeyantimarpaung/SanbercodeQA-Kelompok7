describe('Delete user', () => {
    it('Delete user success', () => {
        cy.login()
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click() //klik menu admin
        cy.get('.oxd-autocomplete-text-input > input').type('Admin')
        cy.wait(4000)
        cy.get('.oxd-autocomplete-option').click()
        cy.get('.oxd-form-actions > .oxd-button--secondary').click({force: true})
        cy.get(':nth-child(2) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(1)').click()
        //cy.get(':nth-child(1) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(1)').click()
        cy.get('.oxd-button--label-danger').click()
        cy.get('#oxd-toaster_1.oxd-toast-container.oxd-toast-container--bottom').should('be.visible', 'Successfully Deleted')
    })
})