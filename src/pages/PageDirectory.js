import FeedbackPage from './FeedbackPage'
import BusinessDetailsPage from './BusinessDetailsPage'
import ParkingDetailsPage from './ParkingDetailsPage'

const pageDirectory = {

  WELCOME_PAGE: {
    path: '/',
    component: ParkingDetailsPage
  },
  FEEDBACK_PAGE: {
    path: '/feedback',
    component: FeedbackPage
  },
  BUSINESS_DETAILS_PAGE: {
    path: '/business/:id',
    component: BusinessDetailsPage
  },
  PARKING_DETAILS_PAGE: {
    path: '/parking/:id',
    component: ParkingDetailsPage
  }
}
export default pageDirectory
