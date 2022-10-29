const basePage = {
    baseUrl: 'http://www.flybreeze.com/',
  
    goto () {
      cy.visit(`${this.baseUrl}`)
    }
  }
  export default basePage