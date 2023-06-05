describe('template spec', () => {
    it('succes_deleteLocations', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/ ')
      cy.login()
      cy.get(':nth-child(1) > .oxd-main-menu-item').click()
      cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click()
      cy.get('.oxd-dropdown-menu > :nth-child(2)').click()  
      cy.get(':nth-child(1) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(1)').click()
      cy.get('.oxd-button--label-danger').click()
    })
  })