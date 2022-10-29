import homePage from "../pages/homePage";
import bookingAvailabilityPage from "../pages/booking-availabilityPage";
import bookingSeatsPage from "../pages/booking-seatsPage";

describe('Search Round Trip Flights between two location', () => {

    beforeEach(() => {
      homePage.goto()
    })
  
    it('Search between two location for Round Trip and Select Available Seat', () => {
      homePage.waitForHomeToLoad()

      homePage.checkRoundTripSelected()

      homePage.enterOriginAirport('charleston')
  
      homePage.enterDestinationAirport('columbus')
  
      homePage.validateNumberOfGuest('default no of guest','1')

      homePage.selectDepartDate()

      homePage.selectRetrunDate()

      homePage.clickSearchFlight()

      bookingAvailabilityPage.checkOutboundFligthDate()
        
      bookingAvailabilityPage.checkOutboundFligthPriceSelected()
        
      bookingAvailabilityPage.checkReturnFligthDate()

      bookingAvailabilityPage.checkReturnFligthPriceSelected()

      bookingAvailabilityPage.clickLoginLater()

      const seatNumber = bookingSeatsPage.selectFirstAvailableSeat()

      bookingSeatsPage.validateSeatSelectedMessageDisplay(seatNumber)
    })

    it('Add 2 adults, a child, a infant guests of 4 and Search between two location for Round Trip', () => {
      homePage.checkRoundTripSelected()

      homePage.enterOriginAirport('charleston')
        
      homePage.enterDestinationAirport('columbus')

      homePage.clickAddGuestAvatar()

      homePage.clickAddAdultGuest()

      homePage.clickAddChildGuest()

      homePage.clickAddInfantGuest()

      homePage.validateNumberOfGuest('no of guests including default adult guest','4')

      homePage.selectDepartDate()

      homePage.selectRetrunDate()

      homePage.clickSearchFlight()

      bookingAvailabilityPage.checkOutboundFligthDate()
        
      bookingAvailabilityPage.checkOutboundFligthPriceSelected()
        
      bookingAvailabilityPage.checkReturnFligthDate()

      bookingAvailabilityPage.checkReturnFligthPriceSelected()

      bookingAvailabilityPage.clickLoginLater()

      const seatNumber = bookingSeatsPage.selectFirstAvailableSeat()

      bookingSeatsPage.validateSeatSelectedMessageDisplay(seatNumber)
    })

    it('On loading homepage, Round Trip is Selected, Oneway not selected', () => {
      homePage.checkRoundTripSelected()

      homePage.checkOnewayButtonNotActive()
    })
  
    it('Click Add Guest Avatar and Depart Date calendar, without selecting origin airport', () => {
      homePage.enterOriginAirport('charleston')

      homePage.clickDepartFlightCalendar()

      homePage.validateOriginDestinationMandatoryMessage('Please select an origin and destination first')

      homePage.clickAddGuestAvatar()

      homePage.validateOriginDestinationMandatoryMessage('Please select an origin and destination first')
    })

    it('Click Depart Date calendar, without selecting destination airport', () => {
      homePage.enterDestinationAirport('charleston')

      homePage.clickDepartFlightCalendar()

      homePage.validateOriginDestinationMandatoryMessage('Please select an origin and destination first')
    })

    it('Click Return Date calendar, without selecting origin airport', () => {
      homePage.enterOriginAirport('charleston')

      homePage.clickReturnFlightCalendar()

      homePage.validateOriginDestinationMandatoryMessage('Please select an origin and destination first')
    })

    it('Click Return Date calendar, without selecting destination airport', () => {
      homePage.enterDestinationAirport('charleston')

      homePage.clickReturnFlightCalendar()

      homePage.validateOriginDestinationMandatoryMessage('Please select an origin and destination first')
    })

    it('Click Search, without selecting origin airport', () => {
      homePage.enterDestinationAirport('charleston')

      homePage.validateSearchFlightDisabled()
    })

    it('Click Search, without selecting depart airport', () => {
      homePage.enterOriginAirport('charleston')

      homePage.validateSearchFlightDisabled()
    })

  })