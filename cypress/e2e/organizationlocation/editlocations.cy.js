describe('template spec', () => {
    it('succes_editLocations', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/ ')
      cy.login()
      cy.get(':nth-child(1) > .oxd-main-menu-item').click()
      cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click()
      cy.get('.oxd-dropdown-menu > :nth-child(2)').click()  
      cy.get(':nth-child(1) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(2)').click()
      cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type('My Home')
      cy.get('.oxd-button--secondary').click()
    })
    it('failed_editLocations', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/ ')
        cy.login()
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click()
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click()  
        cy.get(':nth-child(1) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(2)').click()
        // cy.get(':nth-child(2) > .oxd-input').clear().type('AdminMyHome')
        cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('AdminMyHome')
        cy.get('.oxd-button--secondary').click()
      })
  })