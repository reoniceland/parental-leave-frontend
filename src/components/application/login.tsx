import React, { useContext } from 'react'
import { useFormik } from 'formik'
import { useHistory } from 'react-router-dom'

import Text from '../common/Text'
import Button from '../common/Button'
import InputField from '../form/InputField'
import FormCard from '../form/FormContainer'
import Progressbar from '../navigation/Progressbar'
import { AppContext } from '../context/AppContext'



export default function Login() {
  const { getPerson, data } = useContext(AppContext)
  const initialValues = {
    kennitala: '0000',
  }

  const login = useFormik({
    initialValues,
    onSubmit: async (values) => {
      await getPerson({ variables: { kennitala: values.kennitala }})

      console.log(data)
      history.push('/step1', {animation: 'forward'})
    },
  })

  const history = useHistory()
  
 

  return (
    <Progressbar current="/">
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
    </Progressbar>
  )
}
