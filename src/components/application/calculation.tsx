import React, { useContext } from 'react'
import { useFormik } from 'formik'
import { useHistory } from 'react-router-dom'

import Text from '../common/Text'
import Button from '../common/Button'
import FormCard from '../form/FormContainer'
import Progressbar from '../navigation/Progressbar'

import DateRangePicker from '../calendar/DateRangePicker'
import { AppContext } from '../context/AppContext'

export default function Calculation() {
  const { months } = useContext(AppContext)
  const history = useHistory()

  console.log("months", months)

  const initialValues = {
    months: 1,
  }

  const calculation = useFormik({
    initialValues,
    onSubmit: async (values) => {
      console.log(values)
      history.push('/step3', {animation: 'forward'})
    },
  })

  return (
    <Progressbar current="step2">
      <form onSubmit={calculation.handleSubmit}>
        <FormCard>
          <Text variant="h3" className="pb-5 text-center">
            Viltu taka fæðingarorlofið í samfelldu tímabili?
          </Text>
          <DateRangePicker onChange={(value) => {
            console.log(value)
          }}/>

        </FormCard>

        <div className="d-flex justify-content-between pt-4">
          <Button
            onClick={() => history.push('step1', {animation: 'backward'})}
            variant="secondary"
          >
            Til baka
          </Button>

          <Button
            type="submit"
          >
            Áfram
          </Button>
        </div>
      </form>
    </Progressbar>
  )
}
