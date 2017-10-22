/* eslint-env jest */
/* globals cy */
describe('HomePage', function () {
  it('Visit homepage', () => {
    cy.server()
    cy.visit('http://localhost:3000')
    cy.contains('FETCH USERS')
    cy.get('button').click()
    cy.contains('Loading ...')
    cy.wait(3000).then(function (xhr) {
      cy.contains('FETCH USERS')
    })
  })
})
