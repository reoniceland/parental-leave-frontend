import { gql } from 'apollo-boost'

export const PERSON = gql`
query Person($kennitala: String!) {
  person(kennitala: $kennitala) {
    name
    kennitala
    address
    can_calculate
  }
}`

export const CREATE_SUBMISSION = gql`
mutation createSubmission($kennitala: String!, $months: Int!, $timeFrames: [TimeFrameCreateInput]) {
    createSubmission(
      kennitala: $kennitala
      number_of_months: $months
      timeFrames: $timeFrames
    ) {
      number_of_months
      id
      timeframes {
        start
        end
      }
      payTotal
      payPerMonth
      person {
        name
      }
    }
  }`
