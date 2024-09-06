describe('My First Test', () => {
  it('visits and submit form with invlid data - already existing user', () => {
    cy.visit('/register')

    cy.get('input[name="email"]').type('test@test.test')
    cy.get('input[name="password"]').type('Password123$')
    cy.get('input[name="confirmationPassword"]').type('Password123$')
    cy.get('input[name="pseudo"]').type('testtesttest')
    cy.get('input[name="lastName"]').type('TTest')
    cy.get('input[name="firstName"]').type('UUser')
    cy.get('input[name="birthdate"]').type('2001-02-28')
    cy.get('input[name="file"]').selectFile({
      contents: Cypress.Buffer.from('file contents'),
      fileName: 'file.png',
      mimeType: 'image/png',
      lastModified: Date.now()
    })

    cy.get('.form_wrapper .action_btn').click()

    cy.get('.form_wrapper .error_message')
  })
})
