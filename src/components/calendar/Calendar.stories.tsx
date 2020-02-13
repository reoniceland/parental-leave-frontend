import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'

import DateRangePicker from './DateRangePicker'
import DateInput from './DateInput'


export default {
  title: 'Calendar',
  component: DateRangePicker,
}

export const DateRange = () => {
  const [date, setDate] = useState()

  return (
    <DateRangePicker
      value={date}
      onChange={action('onChange')}
  />
)}

export const Input = () => {
  return (
    <DateInput />
  )
}
