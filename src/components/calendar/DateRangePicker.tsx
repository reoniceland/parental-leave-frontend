import React from 'react'
import Calendar, { OnChangeDateCallback } from 'react-calendar'
import { format } from 'date-fns'
import isLocale from 'date-fns/locale/is'

import './calendar.scss'

interface Props {
  value?: Date | Date[]
  onChange?: OnChangeDateCallback
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
      minDate={new Date()}
      formatMonthYear={(_, date) =>
        format(date, 'LLLL yyyy', { locale: isLocale })
      }
      formatShortWeekday={(_, date) => format(date, 'iii', { locale: isLocale })}
    />
  )
}
