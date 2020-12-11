// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add('backgroundLogin', () => {
    cy.setCookie(
        'PrestaShop-a30a9934ef476d11b6cc3c983616e364', 
       'R6xmma6F4U6edNQuu67M0unWP5ULdsYBWgPpNSwCwp%2BmYh%2BzRSJNZRuZqQKMUueC0vUHrR4ib9UMwAC4%2FIIIm776fzDj1kRpajrh4xgqXzIrhmI1i79KT2VsLXt3K8EtcZbmBAmoqtISVuI%2BRPtk0nYt335FnoKAe08kP0NiMaQczOrTSM2Ms%2BYT%2F6c8LpImREDKhoDg197AY9GBaADuY9aCEnAbAcS4AyhVbh8R6MW6ZLD%2BLP3CpyM2PY%2B%2BCGllAFZKNtKM5mn399vawexJEquyBn1%2FB7UVGBoCyiRMmwKb58v6w%2Fju%2B5iNFZ%2BNsG9%2Fgy10wiLxgxTUwAXWM2UYyFngz%2FRWOu5PQLobwwv50%2FdmSoq1SDok6fMg96VYvovHG4HVjaLV2GAmSjX6oBIJ03lA8Q6asnAKo8X5BdK8tZOw%2Bn9YfChrKrnRSQGYBaeT%2Fh5%2BhBMTsIcKXVwmSLmFiJt9LzAQcUYAED7QPgbNPTk%3D000355'
   )
})
