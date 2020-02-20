import React, { useContext } from 'react'
import { useFormik } from 'formik'
import { useHistory } from 'react-router-dom'

import Text from '../common/Text'
import Button from '../common/Button'
import FormCard from '../form/FormContainer'
import SelectField from '../form/SelectField'
import Progressbar from '../navigation/Progressbar'
import { AppContext } from '../context/AppContext'

const availMonths = [
  {value: 1, text: "1 mánuður"},
  {value: 2, text: "2 mánuðir"},
  {value: 3, text: "3 mánuðir"},
  {value: 4, text: "4 mánuðir"},
  {value: 5, text: "5 mánuðir"},
  {value: 6, text: "6 mánuðir"},
]

export default function Months() {
  const { personData, setMonths } = useContext(AppContext)
  console.log(personData)
  const history = useHistory()

  const initialValues = {
    months: 1,
  }

  const months = useFormik({
    initialValues,
    onSubmit: async (values) => {
      setMonths(values.months)
      history.push('/step2', {animation: 'forward'})
    },
  })

  return (
    <Progressbar current="/step1">
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
            onChange={months.handleChange}
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
    </Progressbar>
  )
}
