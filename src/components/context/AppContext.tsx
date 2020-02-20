import React, {
  createContext, useState,
} from 'react'
import { useLazyQuery, useMutation } from 'react-apollo'
import { PERSON, CREATE_SUBMISSION } from '../graphql/gql'
interface Props {
  children: React.ReactNode
}

export const AppContext = createContext<any>({ results: null })

export default function AppContextProvider({
  children,
}: Props){{
  const [months, setMonths] = useState('')
  const [getPerson, { data: personData }] = useLazyQuery(PERSON)
  const [makeSubmission, { data: submissionData }] = useMutation(CREATE_SUBMISSION)
  return (
    <AppContext.Provider value={{
      personData, 
      getPerson,
      setMonths,
      months,
    }}>
      {children}
    </AppContext.Provider>
  )
}}