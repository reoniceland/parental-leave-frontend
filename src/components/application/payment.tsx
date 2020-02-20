import React, { useState } from 'react'
import { useFormik } from 'formik'

import Text from '../common/Text'
import Button from '../common/Button'
import Container from '../common/Container'
import FormCard from '../form/FormContainer'
import { Route } from 'react-router-dom'


export default function Payment() {
  const [redirect, setRedirect] = useState(false)
  const initialValues = {
    months: 1,
  }

  const payment = useFormik({
    initialValues,
    onSubmit: async (values) => {
      console.log(values)
      setRedirect(true)
    },
  })

  if (redirect) {
    return (
      <Route path="/finish" />
    )
  }

  return (
    <Container>
      <form onSubmit={payment.handleSubmit}>
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
