import React from 'react'
import Calendar, { OnChangeDateCallback } from 'react-calendar'

import './calendar.scss'

interface Props {
  value: Date | Date[] | undefined
  onChange: OnChangeDateCallback | undefined
}
export default function DateRangePicker({
  value,
  onChange,
}: Props) {
  return (
    <Calendar
      value={value}
      onChange={onChange}
      selectRange
    />
  )
}
