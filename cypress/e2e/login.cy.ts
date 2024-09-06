describe('Login Test', () => {
  it('visit and submit valid login form', () => {
    cy.visit('/login')
    cy.get('input[name="login"]').type('test@test.test')
    cy.get('input[name="password"]').type('Password123$')

    cy.get('.form_wrapper .action_btn').click()

    cy.get('.form_wrapper .success_message').should('be.visible')
  })

  it('visit and submit invalid login form', () => {
    cy.visit('/login')
    cy.get('input[name="login"]').type('test@.test')
    cy.get('input[name="password"]').type('Password123$')

    cy.get('.form_wrapper .action_btn').click()

    cy.get('.form_wrapper .error_message').should('be.visible')
  })
})
