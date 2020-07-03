/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://element.eleme.cn/#/zh-CN/component/cascader')
  })
  it('单选', () => {
    cy.contains('单选选择任意一级选项').next().click()
    cy.get('.el-cascader-menu__list').children().eq(0).click({force:true}) // 使用 force 无效果
  })
})
