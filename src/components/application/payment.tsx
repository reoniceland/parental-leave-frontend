import React from 'react'
import { useFormik } from 'formik'
import { useHistory } from 'react-router-dom'

import Text from '../common/Text'
import Button from '../common/Button'
import Container from '../common/Container'
import FormCard from '../form/FormContainer'


export default function Payment() {
  const history = useHistory()
  const initialValues = {
    months: 1,
  }

  const payment = useFormik({
    initialValues,
    onSubmit: async (values) => {
      console.log(values)
      history.push('/finish')
    },
  })
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
