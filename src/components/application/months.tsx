import React, { useState } from 'react'
import { useFormik } from 'formik'

import Text from '../common/Text'
import Container from '../common/Container'
import FormCard from '../form/FormContainer'
import SelectField from '../form/SelectField'
import Button from '../common/Button'
import { Redirect } from 'react-router-dom'

const availMonths = [
  {value: 1, text: "1 mánuður"},
  {value: 2, text: "2 mánuður"},
  {value: 3, text: "3 mánuður"},
  {value: 4, text: "4 mánuður"},
  {value: 5, text: "5 mánuður"},
  {value: 6, text: "6 mánuður"},
  {value: 7, text: "7 mánuður"},
  {value: 8, text: "8 mánuður"},
  {value: 9, text: "9 mánuður"},
  {value: 10, text: "10 mánuður"},
  {value: 11, text: "11 mánuður"},
  {value: 12, text: "12 mánuður"},
]

export default function Months() {
  const [redirect, setRedirect] = useState(false)
  const initialValues = {
    months: 1,
  }

  const months = useFormik({
    initialValues,
    onSubmit: async (values) => {
      console.log(values)
      setRedirect(true)
    },
  })

  if (redirect) {
    return (
      <Redirect to="/step2" />
    )
  }

  return (
    <Container>
      <form onSubmit={months.handleSubmit}>
        <FormCard>
          <Text variant="h3" className="pb-5 text-center">
            Hvað ætlar þú að nýta þér marga mánuði í fæðingarorlof?
          </Text>

          <SelectField
            name="months"
            label="Fjöldi mánaða"
            options={availMonths}
            placeholder="Veldu fjölda"
          />
        </FormCard>

        <div className="d-flex justify-content-end pt-4">
          <Button
            type="submit"
          >
            Áfram
          </Button>
        </div>
      </form>
    </Container>
  )
}