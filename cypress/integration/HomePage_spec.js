/* globals cy */
describe('HomePage', () => {
  it('Visit homepage', () => {
    cy.server();
    cy.visit('http://localhost:3000');
    cy.contains('FETCH USERS');
    cy.get('button').click();
    cy.contains('Loading ...');
    cy.wait(3000).then((xhr) => {
      cy.contains('FETCH USERS');
    });
  });
});
