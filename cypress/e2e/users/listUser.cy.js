describe('List user', () => {
    it('Daftar user', () => {
        cy.login()
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click() //klik menu admin
        cy.get('.--visited > .oxd-topbar-body-nav-tab-item').click()
        cy.get('.oxd-dropdown-menu > li').should('be.visible').click()
        cy.url().should('include', '/admin/viewSystemUsers')
    })
})