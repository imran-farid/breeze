import basePage from './basePage'
import helper from '../utils/helper'

const homePage = {

    roundTripButtonActive: '.nav-link.tc-roundtrip-btn.active',
    oneWayButtonActive: 'nav-link tc-oneway-btn active',
    oneWayButtonInActive: 'nav-link tc-oneway-btn',
    fromField : '#origin > div > div > div.ng-input > input[type=text]',
    fromListOption: 'div[id="origin-selected-station"] [aria-label="Options list"] div[class="ng-option"]',
    toField : '#ti-destination-select #destination input[type=text]',
    toListOption: 'div[id="destination-selected-station"] [aria-label="Options list"] div[class="ng-option"]',
    calendra: 'bz-availability-date-picker div[class*="tc-flight-date-picker"] div[class="date"]',
    calendraDate: 'div[data-full="REPLACE_XXXX"]',
    guestValue: 'div[aria-label="add guests button"] div div[class*="font-header"]',
    addGuestAvatar: 'div[aria-label="add guests button"] div[class*="avatar white-border"]',
    addAdult: 'div[aria-label="add adult"] img[aria-label="add adult"]',
    addChild: 'div[aria-label="add child"] img[aria-label="add child"]',
    addIInfant: 'div[aria-label="add infant"] img[aria-label="add infant"]',

    searchButton: '#search-flights',

    checkRoundTripSelected(){

        cy.get(this.roundTripButtonActive).should('be.visible')

    },
    checkOnewayButtonNotActive(){

        cy.get(this.oneWayButtonActive).should('not.exist'),
        cy.get(this.oneWayButtonInActive).should('be.visible')
    },
    waitForHomeToLoad (){
      //cy.wait(5000)

    },
    enterOriginAirport (originAirport){
        cy.get(this.fromField)
          .click()

        cy.get(this.fromListOption, { timeout: 10000 }).should('be.visible');

        cy.get(this.fromListOption).each($ele => {
          const originValue = $ele.text()
          if (String(originValue).toLowerCase().includes(originAirport.toLowerCase())) {
            cy.log("origin name found and now clicking")
            $ele.click();
          }
        })

    },
    enterDestinationAirport (destinationAirport){
        cy.get(this.toField)
          .click()
  
        cy.get(this.toListOption, { timeout: 10000 }).should('be.visible');

        cy.get(this.toListOption).each($ele => {
          const destinationValue = $ele.text()
          if (String(destinationValue).toLowerCase().includes(destinationAirport.toLowerCase())) {
            cy.log("destination name found and now clicking")
            $ele.click();
          }
        })

    },
    clickDepartFlightCalendar (){
      cy.get(this.calendra, { timeout: 60000 }).should('be.visible');

      const fs = cy.get(this.calendra).first();
      fs.click();

    },
    selectDepartDate (){
        const fs = cy.get(this.calendra).first();
        fs.click();

        const date = helper.getCurrentDate();
        this.calendraDate = this.calendraDate.replace("REPLACE_XXXX",date)

        cy.get(this.calendraDate).click()


    }
    ,
    clickReturnFlightCalendar (){
      const fs = cy.get(this.calendra).eq(1);
      fs.click();

    },
  
    selectRetrunDate (){
        const fs = cy.get(this.calendra).eq(1);
        fs.click();

        const date = helper.getCurrentDate();
        this.calendraDate = this.calendraDate.replace("REPLACE_XXXX",date)

        cy.get(this.calendraDate).click()
    },
    clickSearchFlight (){
        cy.get(this.searchButton)
          .click()
    },
    validateOriginDestinationMandatoryMessage (calendarErrorMessage){
        cy.contains(calendarErrorMessage)
          .should('be.visible')
    },
    validateSearchFlightDisabled (){
      cy.get(this.seatsNotSelected)
       .invoke('attr', 'aria-disabled')
       .should('eq', 'true')
    },
    clickAddGuestAvatar (){
        cy.get(this.addGuestAvatar)
          .click()
    },
    clickAddAdultGuest (){
      cy.get(this.addAdult)
        .click()
    },
    clickAddChildGuest (){
      cy.get(this.addChild)
        .click()
    },
    clickAddInfantGuest (){
      cy.get(this.addIInfant)
        .click()
    },
    validateNumberOfGuest(message,noOfGuests){
      cy.get(this.guestValue).should('have.text', ` ${noOfGuests} `)
    }
}

export default { ...basePage, ...homePage }