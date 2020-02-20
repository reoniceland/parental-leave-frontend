import React, { useState } from 'react'
import { useFormik } from 'formik'

import Text from '../common/Text'
import Button from '../common/Button'
import Container from '../common/Container'
import FormCard from '../form/FormContainer'
import { Redirect } from 'react-router-dom'


export default function Calculation() {
  const [redirect, setRedirect] = useState(false)
  const initialValues = {
    months: 1,
  }

  const calculation = useFormik({
    initialValues,
    onSubmit: async (values) => {
      console.log(values)
      setRedirect(true)
    },
  })

  if (redirect) {
    return (
      <Redirect to="/step3" />
    )
  }

  return (
    <Container>
      <form onSubmit={calculation.handleSubmit}>
        <FormCard>
          <Text variant="h3" className="pb-5 text-center">
            Viltu taka fæðingarorlofið í samfelldu tímabili?
          </Text>


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
