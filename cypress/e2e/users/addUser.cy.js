describe('Add account', () => {
  it('Add account success', () => {
    const firstNames = ['Maria','Sinta','Kiko','Jhon','Miguel','Pecco','Ramos','Janeth','Elisa','Roni']
    const lastNames = ['Mario','Jojo','Kuka','Chris','Oliviera','Bagnaia','Alex','Bastian','Billy','Yabes']

    var randomFirstName = Math.floor(Math.random() * firstNames.length)
    var randomLastName = Math.floor(Math.random() * lastNames.length)
    var username = firstNames[randomFirstName] +'.'+lastNames[randomLastName]

    cy.login()

    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
    cy.get('.orangehrm-header-container > .oxd-button').click()
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click()
    cy.get('.oxd-select-dropdown.--positon-bottom').click()
    cy.get('.oxd-autocomplete-text-input > input').type('Lisa')
    cy.wait(4000)
    cy.get('.oxd-autocomplete-dropdown.--positon-bottom').click()
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
    cy.get('.oxd-select-dropdown.--positon-bottom').click()
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username)
    cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('Lisa@123')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Lisa@123')
    cy.get('.oxd-button--secondary').click()
    cy.get('p.oxd-text.oxd-text--p.oxd-text').should('be.visible', 'Successfully Saved')
  })
})