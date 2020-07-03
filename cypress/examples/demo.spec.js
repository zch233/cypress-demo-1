/// <reference types="cypress" />

describe('在 Google 上测试', () => {
  beforeEach(() => {
    cy.visit('https://www.google.com')
  })

  it('搜索 zch-ui', () => {
    cy.get('.gLFyf')
      .type('zch-ui{enter}')
    cy.contains('zch-ui').should('exist')
    cy.contains('@zch233').should('exist')
  })
})
