import React from 'react'
import { gql } from 'apollo-boost'
import { useFormik } from 'formik'
import { useLazyQuery } from 'react-apollo'
import { useHistory } from 'react-router-dom'

import Text from '../common/Text'
import Button from '../common/Button'
import Container from '../common/Container'
import InputField from '../form/InputField'
import FormCard from '../form/FormContainer'

const PERSON = gql`
query Person($kennitala: String!) {
  person(kennitala: "0000") {
    name
    address
    can_calculate
  }
}`

export default function Login() {
  const history = useHistory()
  const [getPerson, { data }] = useLazyQuery(PERSON)

  const initialValues = {
    kennitala: '0000',
  }

  const login = useFormik({
    initialValues,
    onSubmit: async (values) => {
      await getPerson({ variables: { kennitala: values.kennitala }})
      console.log(data)
      history.push('/step1')
    },
  })

  return (
    <Container>
      <form onSubmit={login.handleSubmit}>
        <FormCard>
          <Text
            variant="h3"
            className="pb-4"
          >
            Vinsamlegast skráðu þig inn
          </Text>
          <Text
            variant="p"
            className="pb-4"
          >
            Til að sækja um fæðingarorlof þarft þú að skrá þig inn með kennitölu svo við vitum hver þú ert.
          </Text>

          <InputField
            name="kennitala"
            type="text"
            label="Kennitala"
            placeholder="Sláðu inn kennitölu"
            className="pb-4"
            onChange={login.handleChange}
          />
          <Button
            type="submit"
            disabled={login.isSubmitting}
          >Innskráning</Button>
        </FormCard>
      </form>
    </Container>
  )
}
