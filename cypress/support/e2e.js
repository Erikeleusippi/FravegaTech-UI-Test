// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

Cypress.Commands.add('ignoreTrackers', () => {
    cy.intercept('POST', '**google.com/g/collect', { statusCode: 204, body: {} });
    cy.intercept('GET', '**doubleclick.net/**', { statusCode: 204, body: {} });
    cy.intercept('POST', '**sentry.io/**', { statusCode: 204, body: {} });
    cy.intercept('GET', '**gum.criteo.com/**', { statusCode: 204, body: {} });
    cy.intercept('GET', '**adnxs.com/pixie/**', { statusCode: 204, body: {} });
    cy.intercept('GET', '**/ads/**', { statusCode: 204, body: {} });
    cy.intercept('GET', '**/track/**', { statusCode: 204, body: {} });
  });