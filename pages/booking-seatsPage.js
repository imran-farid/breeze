import basePage from './basePage'

const bookingSeatPage = {

    seatsNotSelected: '.seat-container.selectable.not-selected',

    selectFirstAvailableSeat (){
        const seatNumber=''
        const fs = cy.get(this.seatsNotSelected).first();
        fs.invoke('attr', 'aria-label')
          .as('seatNumber')  
          .click()

        cy.get('.searchable-group-selector-card-image')
          .eq(4)
        fs.invoke('attr', 'style')
          .then(($seatNumber) => {
            seatNumber = $seatNumber
          })  

        return seatNumber.replace("Seat ", "")

    },
    validateSeatSelectedMessageDisplay (seatNumber){
        const message = 'seatNumber' + ' ' + 'assigned to Adult Guest'
        cy.contains(message).should('be.visible')


    }
   
}

export default { ...basePage, ...bookingSeatPage }