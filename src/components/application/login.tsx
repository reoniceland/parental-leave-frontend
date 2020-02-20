import React from 'react'
import { useQuery } from 'react-apollo'

import Text from '../common/Text'
import Button from '../common/Button'
import Container from '../common/Container'
import InputField from '../common/InputField'
import FormCard from '../common/FormContainer'


export default function Login() {

  return (
    <Container>
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
        />
        <Button onClick={() => console.log('change route')}>Innskráning</Button>
      </FormCard>
    </Container>
  )
}
