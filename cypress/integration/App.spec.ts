/// <reference types="cypress"/>

describe('Index page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should see login page', () => {
    cy.get('button').contains('Login');
  });
});
