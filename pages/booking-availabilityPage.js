import basePage from './basePage'

const homeAvailabilityPage = {

    outboundFlightDate: '#outboundFlightDatesList .fare-family-card.card.default-card.text-center.selected.interactive .mt-1 div:nth-child(1)',
    outboundFlightPrice : '#outbound-journey-0- .fare-family-card-btn.mt-2.selected',
    returnFlightDate: '#returnFlightDatesList .fare-family-card.card.default-card.text-center.selected.interactive .mt-1 div:nth-child(1)',
    returnFlightPrice: '#inbound-journey-0- .fare-family-card-btn.mt-2.selected',
    loginLater: '#login-later-btn',
    signUp: ' Sign Up ',
    login: '',

    checkOutboundFligthDate(outboundFlightDateText){

        cy.get(this.outboundFlightDate).should(
            "have.text",
            outboundFlightDateText
          )

    },
    checkOutboundFligthPriceSelected(outFlightDate){

        cy.get(this.outboundFlightPrice).should('be.visible')

    },
    checkReturnFligthDate(returnFlightDateText){

        cy.get(this.returnFlightDate).should(
            "have.text",
            returnFlightDateText
          )

    },
    checkReturnFligthPriceSelected(outFlightDate){

        cy.get(this.returnFlightPrice).should('be.visible')

    },
    clickLoginLater (){
        cy.get(this.loginLater)
          .click()
    }
   
}

export default { ...basePage, ...homeAvailabilityPage }